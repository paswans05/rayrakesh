import React from "react";
import { ImageResponse } from "next/og";

export interface RunnerPassData {
  registrationId: string;
  fullName: string;
  age: number | string;
  gender?: string;
  tshirtSize?: string;
  address: string;
  date?: string;
}

// In-memory font cache across serverless invocations
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
      console.warn(`[runner-pass] Could not fetch font from ${url}:`, err);
    }
  }
  return null;
}

async function getPassFonts() {
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
 * Generates an official high-resolution PNG Runner Pass Card (900x520)
 * using Next.js native `ImageResponse` (Satori + Resvg engine).
 * 
 * Works 100% reliably on Vercel Serverless, Linux, Windows, and macOS
 * without relying on librsvg or system fontconfig.
 */
export async function generateRunnerPassPng(data: RunnerPassData): Promise<Buffer> {
  const {
    registrationId,
    fullName,
    age,
    gender = "Not specified",
    tshirtSize = "M",
    address,
    date = new Date().toISOString().split("T")[0],
  } = data;

  const barcodeBars = [];
  const barWidths = [2, 4, 1, 3, 5, 2, 4, 1, 3, 2, 5, 1, 4, 2, 3, 1, 5, 2, 3, 4, 2, 1, 4, 3, 2, 5, 1, 3, 4, 2];
  for (let i = 0; i < barWidths.length; i++) {
    barcodeBars.push(
      <div
        key={i}
        style={{
          width: `${barWidths[i]}px`,
          height: "42px",
          backgroundColor: "#CAA05C",
          opacity: 0.85,
          marginRight: "3px",
        }}
      />
    );
  }

  const passElement = (
    <div
      style={{
        width: "900px",
        height: "520px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0f1720",
        borderRadius: "24px",
        border: "3px solid #CAA05C",
        padding: "24px 32px",
        color: "#FFFFFF",
        fontFamily: "Inter, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Top Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid rgba(202, 160, 92, 0.4)",
          paddingBottom: "16px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#CAA05C",
              fontSize: "26px",
              fontWeight: 700,
              letterSpacing: "2px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            RAKESH MARATHON
          </span>
          <span
            style={{
              color: "#E5E7EB",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              marginTop: "2px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            OFFICIAL PARTICIPANT BIB PASS • 15 KM RACE
          </span>
        </div>
        <div
          style={{
            backgroundColor: "#DC2626",
            color: "#FFFFFF",
            padding: "8px 24px",
            borderRadius: "20px",
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "1px",
            border: "1.5px solid rgba(255,255,255,0.3)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          15 KM RACE
        </div>
      </div>

      {/* Center Section (Left & Right) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "14px 0",
        }}
      >
        {/* Left: Runner Details */}
        <div style={{ display: "flex", flexDirection: "column", width: "470px" }}>
          <span
            style={{
              color: "#CAA05C",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            REGISTERED RUNNER
          </span>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: "30px",
              fontWeight: 700,
              margin: "4px 0 16px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {fullName}
          </span>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", gap: "30px" }}>
              <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
                <span style={{ color: "#9CA3AF", fontSize: "11px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
                  RACE CATEGORY
                </span>
                <span style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
                  15 KM Single Distance
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#9CA3AF", fontSize: "11px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
                  T-SHIRT SIZE
                </span>
                <span style={{ color: "#DFCD95", fontSize: "15px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
                  {tshirtSize} (Official Kit)
                </span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "30px" }}>
              <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
                <span style={{ color: "#9CA3AF", fontSize: "11px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
                  AGE & GENDER
                </span>
                <span style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
                  {age} Yrs • {gender}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#9CA3AF", fontSize: "11px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
                  CITY / LOCATION
                </span>
                <span style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
                  {address}
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", marginTop: "4px" }}>
              <span style={{ color: "#9CA3AF", fontSize: "11px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
                REGISTRATION DATE
              </span>
              <span style={{ color: "#CAA05C", fontSize: "13px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
                {date}
              </span>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div
          style={{
            width: "1px",
            height: "270px",
            backgroundColor: "rgba(202, 160, 92, 0.3)",
          }}
        />

        {/* Right: BIB Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "320px",
            backgroundColor: "rgba(20, 30, 40, 0.7)",
            border: "2px solid #CAA05C",
            borderRadius: "18px",
            padding: "20px 16px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#CAA05C",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            BIB / REGISTRATION NUMBER
          </span>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: "34px",
              fontWeight: 700,
              letterSpacing: "3px",
              margin: "8px 0",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {registrationId}
          </span>
          <div
            style={{
              backgroundColor: "rgba(202, 160, 92, 0.15)",
              border: "1px solid #CAA05C",
              color: "#DFCD95",
              borderRadius: "14px",
              padding: "4px 16px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "12px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            STATUS: CONFIRMED
          </div>

          {/* Barcode Visual */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {barcodeBars}
          </div>
          <span
            style={{
              color: "#9CA3AF",
              fontSize: "11px",
              fontFamily: "Inter, monospace, sans-serif",
              marginTop: "4px",
              letterSpacing: "2px",
            }}
          >
            * {registrationId} *
          </span>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(202, 160, 92, 0.3)",
          paddingTop: "12px",
          fontSize: "12px",
        }}
      >
        <span style={{ color: "#CAA05C", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
          &ldquo;Run Together. Build a Better Tomorrow.&rdquo;
        </span>
        <span style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
          Rakesh Ray Community Initiative • Parsa, Nepal
        </span>
      </div>
    </div>
  );

  const fonts = await getPassFonts();

  const imageResponse = new ImageResponse(passElement, {
    width: 900,
    height: 520,
    ...(fonts.length > 0 ? { fonts } : {}),
  });

  const arrayBuffer = await imageResponse.arrayBuffer();
  return Buffer.from(arrayBuffer);
}
