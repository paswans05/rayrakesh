import React from "react";
import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export interface RunnerCertificateData {
  registrationId: string;
  fullName: string;
  distance?: string;
  date?: string;
  location?: string;
  organizer?: string;
}

// In-memory caches for fast batch and repeated generation
let cachedTemplateBase64: string | null = null;
let cachedInterBoldFont: ArrayBuffer | null = null;
let cachedDevanagariFont: ArrayBuffer | null = null;

function getTemplateDataUri(): string {
  if (!cachedTemplateBase64) {
    const templatePath = path.join(
      process.cwd(),
      "public",
      "images",
      "marathon-certificate-template.jpg"
    );
    if (fs.existsSync(templatePath)) {
      const buf = fs.readFileSync(templatePath);
      cachedTemplateBase64 = buf.toString("base64");
    }
  }
  return cachedTemplateBase64 ? `data:image/jpeg;base64,${cachedTemplateBase64}` : "";
}

async function loadFontFile(
  localFileName: string,
  remoteUrls: string[]
): Promise<ArrayBuffer | null> {
  // 1. Try local file in public/fonts
  const localPath = path.join(process.cwd(), "public", "fonts", localFileName);
  if (fs.existsSync(localPath)) {
    try {
      const buf = fs.readFileSync(localPath);
      if (buf && buf.byteLength > 1000) {
        return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
      }
    } catch (err) {
      console.warn(`[certificate] Could not read local font ${localFileName}:`, err);
    }
  }

  // 2. Try remote fallback URLs
  for (const url of remoteUrls) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
      if (res.ok) {
        const ab = await res.arrayBuffer();
        if (ab && ab.byteLength > 1000) {
          return ab;
        }
      }
    } catch {
      // Ignore network timeout/failure and try next
    }
  }

  return null;
}

async function getCertificateFonts() {
  if (!cachedInterBoldFont) {
    cachedInterBoldFont = await loadFontFile("inter-700.woff", [
      "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.8/files/inter-latin-700-normal.woff",
      "https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.19.3/Inter-Bold.woff",
    ]);
  }

  if (!cachedDevanagariFont) {
    cachedDevanagariFont = await loadFontFile("noto-sans-devanagari-700.woff", [
      "https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-devanagari@5.0.8/files/noto-sans-devanagari-devanagari-700-normal.woff",
    ]);
  }

  const fonts: Array<{
    name: string;
    data: ArrayBuffer;
    weight: 400 | 700;
    style: "normal";
  }> = [];

  if (cachedInterBoldFont) {
    fonts.push({
      name: "Inter",
      data: cachedInterBoldFont,
      weight: 700,
      style: "normal",
    });
  }

  if (cachedDevanagariFont) {
    fonts.push({
      name: "NotoSansDevanagari",
      data: cachedDevanagariFont,
      weight: 700,
      style: "normal",
    });
  }

  return fonts;
}

/**
 * Generates the official Rakesh Marathon Certificate of Participation (1024x682)
 * using the user's official Nepali certificate template and dynamically filling
 * the participant's name into the blank dotted space:
 * "यो प्रमाण पत्र द्वारा प्रमाणित गरिन्छ कि श्री / श्रीमती / कुमारी [ Participant Name ]"
 */
export async function generateRunnerCertificatePng(
  data: RunnerCertificateData
): Promise<Buffer> {
  const { fullName, registrationId } = data;
  const templateUri = getTemplateDataUri();

  // Dynamic font sizing based on name length to ensure perfect fit inside the dotted line
  const cleanName = (fullName || "Participant").trim();
  const nameLen = cleanName.length;
  let fontSize = "22px";
  if (nameLen > 32) {
    fontSize = "15px";
  } else if (nameLen > 25) {
    fontSize = "17px";
  } else if (nameLen > 18) {
    fontSize = "19px";
  }

  const certificateElement = (
    <div
      style={{
        width: "1024px",
        height: "682px",
        display: "flex",
        position: "relative",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* ── Official Template Background Image ── */}
      {templateUri ? (
        <img
          src={templateUri}
          width="1024"
          height="682"
          alt="Certificate Template"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "1024px",
            height: "682px",
          }}
        />
      ) : null}

      {/* ── Dynamic Participant Name Filled in the Blank Space ── */}
      {/* Dots on template run from X=523 to X=906 at Y=353 */}
      <div
        style={{
          position: "absolute",
          left: "522px",
          top: "320px",
          width: "386px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "#FFFFFF",
          // borderBottom: "1.5px solid #0C2340",
          fontFamily: "NotoSansDevanagari, Inter, sans-serif",
          fontSize,
          fontWeight: 700,
          color: "#0C2340",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        {cleanName}
      </div>

      {/* ── Discrete Official Registration / Certificate Serial Number ── */}
      {registrationId ? (
        <div
          style={{
            position: "absolute",
            left: "65px",
            top: "22px",
            display: "flex",
            alignItems: "center",
            fontSize: "11px",
            fontWeight: 700,
            color: "#000000ff",
            fontFamily: "Inter, sans-serif",
            letterSpacing: "0.5px",
          }}
        >
          REG: {registrationId}
        </div>
      ) : null}
    </div>
  );

  const fonts = await getCertificateFonts();

  const imageResponse = new ImageResponse(certificateElement, {
    width: 1024,
    height: 682,
    ...(fonts.length > 0 ? { fonts } : {}),
  });

  const arrayBuffer = await imageResponse.arrayBuffer();
  return Buffer.from(arrayBuffer);
}
