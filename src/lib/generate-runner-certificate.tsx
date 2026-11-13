import React from "react";
import { ImageResponse } from "next/og";

export interface RunnerCertificateData {
  registrationId: string;
  fullName: string;
  distance?: string;
  date?: string;
  location?: string;
  organizer?: string;
}

// In-memory font cache for certificate generation
let cachedRegularFont: ArrayBuffer | null = null;
let cachedBoldFont: ArrayBuffer | null = null;

async function fetchFontWithFallbacks(urls: string[]): Promise<ArrayBuffer | null> {
  for (const url of urls) {
    try {
      const res = await fetch(url, {
        signal: AbortSignal.timeout(6000),
      });
      if (res.ok) {
        const buf = await res.arrayBuffer();
        if (buf && buf.byteLength > 1000) {
          return buf;
        }
      }
    } catch (err) {
      console.warn(`[certificate] Could not fetch font from ${url}:`, err);
    }
  }
  return null;
}

async function getCertificateFonts() {
  if (!cachedRegularFont) {
    cachedRegularFont = await fetchFontWithFallbacks([
      "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.8/files/inter-latin-400-normal.woff",
      "https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.19.3/Inter-Regular.woff",
      "https://unpkg.com/@fontsource/inter@5.0.8/files/inter-latin-400-normal.woff",
    ]);
  }
  if (!cachedBoldFont) {
    cachedBoldFont = await fetchFontWithFallbacks([
      "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.8/files/inter-latin-700-normal.woff",
      "https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.19.3/Inter-Bold.woff",
      "https://unpkg.com/@fontsource/inter@5.0.8/files/inter-latin-700-normal.woff",
    ]);
  }

  const fonts: Array<{
    name: string;
    data: ArrayBuffer;
    weight: 400 | 700;
    style: "normal";
  }> = [];

  if (cachedRegularFont) {
    fonts.push({
      name: "Inter",
      data: cachedRegularFont,
      weight: 400,
      style: "normal",
    });
  }

  if (cachedBoldFont) {
    fonts.push({
      name: "Inter",
      data: cachedBoldFont,
      weight: 700,
      style: "normal",
    });
  }

  return fonts;
}

/**
 * Generates an official landscape PNG Certificate of Participation (1200x800)
 * using Next.js native `ImageResponse` (Satori engine).
 * 
 * Works 100% reliably in Serverless, Linux, Windows, and macOS.
 */
export async function generateRunnerCertificatePng(data: RunnerCertificateData): Promise<Buffer> {
  const {
    registrationId,
    fullName,
    distance = "15 KILOMETERS (SOLO)",
    date = "Official Event 2026",
    location = "Parsa, Madhesh Province, Nepal",
    organizer = "Rakesh Ray",
  } = data;

  const certificateElement = (
    <div
      style={{
        width: "1200px",
        height: "800px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0d1520",
        backgroundImage: "radial-gradient(circle at 50% 50%, #152233 0%, #0a1017 100%)",
        padding: "36px",
        boxSizing: "border-box",
        fontFamily: "Inter, sans-serif",
        color: "#FFFFFF",
        position: "relative",
      }}
    >
      {/* Outer Border with Golden Accents */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "3px solid #CAA05C",
          borderRadius: "20px",
          padding: "36px 48px",
          boxSizing: "border-box",
          position: "relative",
          backgroundColor: "rgba(13, 21, 32, 0.75)",
        }}
      >
        {/* Inner Thin Border */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            right: "10px",
            bottom: "10px",
            border: "1px dashed rgba(202, 160, 92, 0.4)",
            borderRadius: "14px",
            pointerEvents: "none",
          }}
        />

        {/* ── HEADER SECTION ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Top Pill / Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(202, 160, 92, 0.15)",
              border: "1.5px solid #CAA05C",
              borderRadius: "24px",
              padding: "6px 20px",
              marginBottom: "12px",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", color: "#DFCD95" }}>
              RAKESH MARATHON • OFFICIAL CERTIFICATE
            </span>
          </div>

          <h1
            style={{
              fontSize: "44px",
              fontWeight: 700,
              letterSpacing: "4px",
              color: "#CAA05C",
              margin: "4px 0 0",
              textTransform: "uppercase",
            }}
          >
            CERTIFICATE OF PARTICIPATION
          </h1>

          <p
            style={{
              fontSize: "14px",
              letterSpacing: "3px",
              color: "#9CA3AF",
              margin: "6px 0 0",
              textTransform: "uppercase",
            }}
          >
            THIS IS PROUDLY PRESENTED TO
          </p>
        </div>

        {/* ── RECIPIENT NAME & DISTANCE ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            margin: "10px 0",
          }}
        >
          {/* Participant Full Name */}
          <div
            style={{
              fontSize: "46px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "1px",
              borderBottom: "2px solid #CAA05C",
              paddingBottom: "8px",
              minWidth: "500px",
              textAlign: "center",
            }}
          >
            {fullName}
          </div>

          {/* Statement */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: "26px",
              color: "#CBD1D6",
              maxWidth: "820px",
              margin: "18px 0 0",
              textAlign: "center",
            }}
          >
            in recognition of outstanding commitment, endurance, and spirited sportsmanship in participating in the{" "}
            <span style={{ color: "#CAA05C", fontWeight: 700 }}>Rakesh Marathon</span> {distance} community road race held in{" "}
            <span style={{ color: "#FFFFFF", fontWeight: 700 }}>{location}</span>.
          </p>
        </div>

        {/* ── FOOTER & SIGNATURES ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(202, 160, 92, 0.35)",
            paddingTop: "18px",
          }}
        >
          {/* Left: Date & Location */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", color: "#9CA3AF" }}>
              BIB / REGISTRATION NUMBER
            </span>
            <span style={{ fontSize: "16px", fontWeight: 700, color: "#CAA05C", fontFamily: "monospace", marginTop: "2px" }}>
              {registrationId}
            </span>
            <span style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "4px" }}>
              Issue Date: {date}
            </span>
          </div>

          {/* Center: Official Seal Visual */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "36px",
                border: "2px solid #CAA05C",
                backgroundColor: "rgba(202, 160, 92, 0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "20px" }}>🏅</span>
              <span style={{ fontSize: "8px", fontWeight: 700, letterSpacing: "1px", color: "#DFCD95", marginTop: "2px" }}>
                VERIFIED
              </span>
            </div>
            <span style={{ fontSize: "10px", color: "#9CA3AF", marginTop: "4px" }}>
              Official Community Initiative
            </span>
          </div>

          {/* Right: Organizer Signature */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right" }}>
            <span style={{ fontSize: "20px", fontWeight: 700, color: "#CAA05C", letterSpacing: "1.5px" }}>
              {organizer}
            </span>
            <div
              style={{
                width: "160px",
                height: "1px",
                backgroundColor: "#CAA05C",
                marginTop: "4px",
                marginBottom: "4px",
              }}
            />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1px", color: "#E5E7EB" }}>
              Campaign Leader & Organizer
            </span>
            <span style={{ fontSize: "10px", color: "#9CA3AF" }}>
              Rakesh Marathon • Parsa, Nepal
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const fonts = await getCertificateFonts();

  const imageResponse = new ImageResponse(certificateElement, {
    width: 1200,
    height: 800,
    ...(fonts.length > 0 ? { fonts } : {}),
  });

  const arrayBuffer = await imageResponse.arrayBuffer();
  return Buffer.from(arrayBuffer);
}
