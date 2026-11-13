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
 * Generates an official landscape PNG Certificate of Participation (1200x840)
 * matching the user's reference design:
 * - Clean white card background with dark frame border
 * - Top-left modern curved ribbon in deep Crimson Red (#C5283D) and Charcoal (#2B2D42)
 * - Elegant gothic headline: "Certificate of Participation"
 * - Prominent Red Script/Italic stylized participant name [ Name of Recipient ]
 * - Clear event statement and accreditation text
 * - Vector runner silhouettes across the bottom-left
 * - Official rosette award seal ribbon in the center-bottom
 * - Authentic Date line and Signature line on the right
 */
export async function generateRunnerCertificatePng(data: RunnerCertificateData): Promise<Buffer> {
  const {
    registrationId,
    fullName,
    distance = "15 KM Community Race",
    date = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    location = "Parsa, Nepal",
    organizer = "Rakesh Ray",
  } = data;

  const certificateElement = (
    <div
      style={{
        width: "1200px",
        height: "840px",
        display: "flex",
        position: "relative",
        backgroundColor: "#111827",
        padding: "16px",
        boxSizing: "border-box",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* ── Inner White Certificate Canvas ── */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
          border: "2px solid #E5E7EB",
        }}
      >
        {/* ── Top Left Decorative Curved Wave Ribbons (Crimson & Charcoal) ── */}
        <svg
          viewBox="0 0 1200 240"
          width="1200"
          height="240"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        >
          {/* Charcoal wave background */}
          <path
            d="M 0,0 L 520,0 C 420,130 260,185 0,195 Z"
            fill="#23272F"
          />
          {/* Crimson Red primary swoop */}
          <path
            d="M 0,0 L 410,0 C 320,120 180,165 0,175 Z"
            fill="#D32F2F"
          />
          {/* Clean White Arch Overcut (gives the iconic curved top-right border) */}
          <path
            d="M 330,0 Q 640,160 1200,60 L 1200,0 Z"
            fill="#23272F"
          />
          <path
            d="M 350,0 Q 640,145 1200,50 L 1200,0 Z"
            fill="#FFFFFF"
          />
        </svg>

        {/* ── Runners Silhouettes Group on Bottom-Left ── */}
        <svg
          viewBox="0 0 440 420"
          width="440"
          height="420"
          style={{
            position: "absolute",
            bottom: "0px",
            left: "15px",
            pointerEvents: "none",
          }}
        >
          {/* Runner 1 (Far Left Boy / Sprinting) */}
          <g fill="#2D3748">
            <circle cx="55" cy="180" r="16" />
            <path d="M 50,198 C 42,205 38,225 36,250 L 26,275 C 24,280 20,285 18,290 C 16,295 18,300 24,298 C 30,296 36,285 40,270 L 46,245 L 62,245 C 68,260 72,285 76,310 C 78,322 74,335 70,345 C 68,350 74,354 78,350 C 84,342 88,320 86,300 L 76,245 C 74,235 70,225 66,215 L 75,208 C 82,215 90,225 96,238 C 100,246 106,244 104,238 C 100,222 90,210 80,200 Z" />
            <path d="M 45,260 L 52,320 C 53,330 55,348 57,360 L 62,370 C 64,375 70,375 70,370 L 63,355 L 56,295 Z" />
          </g>

          {/* Runner 2 (Mid-Left Trail Runner) */}
          <g fill="#4A5568">
            <circle cx="125" cy="205" r="14" />
            <path d="M 120,222 C 112,230 110,245 108,265 L 102,285 L 108,310 C 110,320 112,335 110,345 C 108,350 114,354 118,350 C 122,342 124,325 120,305 L 118,280 L 132,275 C 136,290 140,310 144,328 C 146,336 150,335 148,328 L 140,280 C 138,268 135,255 132,242 L 140,235 C 146,242 152,252 156,260 C 160,266 164,264 162,258 C 158,245 150,235 142,226 Z" />
          </g>

          {/* Runner 3 (Lead Center Female Athlete - Prominent) */}
          <g fill="#1A202C">
            {/* Head & Flowing Ponytail / Hair */}
            <circle cx="218" cy="115" r="22" />
            <path d="M 205,100 C 185,105 170,120 162,140 C 160,146 166,150 172,145 C 180,135 192,125 208,122 Z" />
            {/* Torso & Athletic Top */}
            <path d="M 210,140 C 196,150 190,175 186,205 C 182,230 178,255 185,275 C 190,290 200,298 215,298 C 230,298 240,290 245,275 C 252,255 248,230 244,205 C 240,175 234,150 220,140 Z" />
            {/* Arms Running Forward & Back */}
            <path d="M 194,155 C 185,170 175,190 168,210 C 164,220 170,225 176,218 C 184,202 192,185 200,170 Z" />
            <path d="M 235,160 C 246,175 258,192 268,210 C 272,218 278,215 275,208 C 265,190 252,172 242,156 Z" />
            {/* Legs Running Dynamic Pace */}
            {/* Left Leg Forward */}
            <path d="M 195,285 C 192,305 190,325 194,345 C 198,365 205,385 212,402 C 215,408 222,408 224,402 C 226,392 225,375 220,355 L 216,325 C 220,312 222,298 222,285 Z" />
            {/* Right Leg Trailing Back */}
            <path d="M 230,285 C 236,305 242,325 248,340 C 254,352 260,360 266,368 C 272,374 278,370 274,364 C 266,350 258,335 250,318 L 244,290 Z" />
          </g>

          {/* Runner 4 (Mid-Right Girl Runner) */}
          <g fill="#4A5568">
            <circle cx="310" cy="205" r="14" />
            <path d="M 314,200 C 324,202 332,210 336,220 C 338,225 334,228 328,225 C 322,220 316,214 312,212 Z" />
            <path d="M 306,222 C 298,230 296,245 294,265 L 288,285 L 294,310 C 296,320 298,335 296,345 C 294,350 300,354 304,350 C 308,342 310,325 306,305 L 304,280 L 318,275 C 322,290 326,310 330,328 C 332,336 336,335 334,328 L 326,280 C 324,268 321,255 318,242 L 326,235 Z" />
          </g>

          {/* Runner 5 (Far Right Male Runner) */}
          <g fill="#2D3748">
            <circle cx="370" cy="180" r="17" />
            <path d="M 364,198 C 354,208 348,228 344,250 L 338,275 C 336,282 342,286 348,280 L 354,255 L 372,255 C 378,270 384,295 388,320 C 390,332 386,345 382,355 C 380,360 386,364 390,360 C 396,352 400,330 398,310 L 388,255 C 386,245 382,235 378,225 L 388,215 C 396,222 406,235 412,248 C 416,256 422,254 420,248 C 415,232 404,218 392,206 Z" />
            <path d="M 358,265 L 366,325 C 367,335 370,355 372,368 C 374,374 380,374 380,368 L 372,345 L 366,295 Z" />
          </g>
        </svg>

        {/* ── MAIN CONTENT (Right-Aligned Layout as per Reference) ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            width: "100%",
            height: "100%",
            paddingTop: "75px",
            paddingRight: "70px",
            paddingLeft: "360px",
            boxSizing: "border-box",
            justifyContent: "space-between",
          }}
        >
          {/* ── Top Header Text ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: "720px",
              textAlign: "center",
            }}
          >
            {/* Certificate of Participation title (Gothic / Calligraphic look) */}
            <h1
              style={{
                fontSize: "58px",
                fontWeight: 700,
                color: "#1E2530",
                letterSpacing: "1.5px",
                margin: "0 0 16px 0",
                fontFamily: "Inter, Georgia, serif",
                textTransform: "capitalize",
                textAlign: "center",
                lineHeight: "1.1",
              }}
            >
              Certificate of Participation
            </h1>

            {/* "This certificate is awarded to" */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#4B5563",
                margin: "0 0 20px 0",
                letterSpacing: "0.5px",
              }}
            >
              This official certificate is proudly awarded to
            </p>

            {/* ── Participant Name (Red Script / Italic / Stylized) ── */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                maxWidth: "600px",
              }}
            >
              <span
                style={{
                  fontSize: "44px",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: "#C5283D",
                  letterSpacing: "1px",
                  fontFamily: "Georgia, serif",
                  marginBottom: "8px",
                  textAlign: "center",
                }}
              >
                [ {fullName} ]
              </span>
              {/* Thin underline beneath name */}
              <div
                style={{
                  width: "100%",
                  height: "1.5px",
                  backgroundColor: "#2B2D42",
                }}
              />
            </div>

            {/* ── Certificate Citation Paragraph ── */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: "22px",
                color: "#374151",
                margin: "18px 0 0 0",
                textAlign: "center",
                maxWidth: "640px",
              }}
            >
              For outstanding endurance, spirited sportsmanship, and successfully participating in the{" "}
              <strong>Rakesh Marathon ({distance})</strong> community race held at {location}.
            </p>

            {/* BIB ID and Valid text */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "10px",
                fontSize: "12px",
                color: "#6B7280",
                fontWeight: 500,
              }}
            >
              <span>BIB ID: <strong style={{ color: "#111827", fontFamily: "monospace" }}>{registrationId}</strong></span>
              <span>•</span>
              <span>Status: <strong style={{ color: "#059669" }}>Verified Finisher ✓</strong></span>
            </div>
          </div>

          {/* ── Bottom Section: Date, Ribbon Seal, Signature ── */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "720px",
              paddingBottom: "36px",
            }}
          >
            {/* 1. Date Block */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "180px",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#1E2530",
                  marginBottom: "6px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {date}
              </span>
              <div
                style={{
                  width: "100%",
                  height: "1.5px",
                  backgroundColor: "#2B2D42",
                  marginBottom: "6px",
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#4B5563",
                  letterSpacing: "0.5px",
                }}
              >
                Date
              </span>
            </div>

            {/* 2. Official Ribbon Rosette Seal (Center) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                width: "80px",
                height: "90px",
              }}
            >
              {/* Red Ribbon Tails */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0px",
                  display: "flex",
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    width: "16px",
                    height: "36px",
                    backgroundColor: "#C5283D",
                    transform: "rotate(15deg)",
                    borderBottom: "4px solid transparent",
                  }}
                />
                <div
                  style={{
                    width: "16px",
                    height: "36px",
                    backgroundColor: "#C5283D",
                    transform: "rotate(-15deg)",
                    borderBottom: "4px solid transparent",
                  }}
                />
              </div>

              {/* Rosette Outer Circle (Scalloped Dark Badge) */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "32px",
                  backgroundColor: "#1F2937",
                  border: "3px solid #C5283D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 2,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                }}
              >
                {/* Inner White Ring */}
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "23px",
                    backgroundColor: "#FFFFFF",
                    border: "1.5px dashed #C5283D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>🏅</span>
                </div>
              </div>
            </div>

            {/* 3. Signature Block */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "180px",
              }}
            >
              {/* Stylized Signature Script */}
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: "#1E2530",
                  fontFamily: "Georgia, serif",
                  marginBottom: "4px",
                  letterSpacing: "1px",
                }}
              >
                {organizer}
              </span>
              <div
                style={{
                  width: "100%",
                  height: "1.5px",
                  backgroundColor: "#2B2D42",
                  marginBottom: "6px",
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#4B5563",
                  letterSpacing: "0.5px",
                }}
              >
                Signature
              </span>
              <span
                style={{
                  fontSize: "10px",
                  color: "#9CA3AF",
                  marginTop: "2px",
                }}
              >
                Organizer & Leader
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const fonts = await getCertificateFonts();

  const imageResponse = new ImageResponse(certificateElement, {
    width: 1200,
    height: 840,
    ...(fonts.length > 0 ? { fonts } : {}),
  });

  const arrayBuffer = await imageResponse.arrayBuffer();
  return Buffer.from(arrayBuffer);
}
