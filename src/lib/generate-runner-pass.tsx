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
        fontFamily: "sans-serif",
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
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            RAKESH MARATHON
          </span>
          <span
            style={{
              color: "#E5E7EB",
              fontSize: "12px",
              fontWeight: "bold",
              letterSpacing: "1.5px",
              marginTop: "2px",
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
            fontWeight: "bold",
            letterSpacing: "1px",
            border: "1.5px solid rgba(255,255,255,0.3)",
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
              fontWeight: "bold",
              letterSpacing: "1.5px",
            }}
          >
            REGISTERED RUNNER
          </span>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: "32px",
              fontWeight: "bold",
              margin: "4px 0 16px",
            }}
          >
            {fullName}
          </span>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", gap: "30px" }}>
              <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
                <span style={{ color: "#9CA3AF", fontSize: "11px", fontWeight: "bold" }}>
                  RACE CATEGORY
                </span>
                <span style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: "bold" }}>
                  15 KM Single Distance
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#9CA3AF", fontSize: "11px", fontWeight: "bold" }}>
                  T-SHIRT SIZE
                </span>
                <span style={{ color: "#DFCD95", fontSize: "15px", fontWeight: "bold" }}>
                  {tshirtSize} (Official Kit)
                </span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "30px" }}>
              <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
                <span style={{ color: "#9CA3AF", fontSize: "11px", fontWeight: "bold" }}>
                  AGE & GENDER
                </span>
                <span style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: "bold" }}>
                  {age} Yrs • {gender}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#9CA3AF", fontSize: "11px", fontWeight: "bold" }}>
                  CITY / LOCATION
                </span>
                <span style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: "bold" }}>
                  {address}
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", marginTop: "4px" }}>
              <span style={{ color: "#9CA3AF", fontSize: "11px", fontWeight: "bold" }}>
                REGISTRATION DATE
              </span>
              <span style={{ color: "#CAA05C", fontSize: "13px", fontWeight: "bold" }}>
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
              fontWeight: "bold",
              letterSpacing: "1.5px",
            }}
          >
            BIB / REGISTRATION NUMBER
          </span>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: "36px",
              fontWeight: "bold",
              letterSpacing: "3px",
              margin: "8px 0",
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
              fontWeight: "bold",
              letterSpacing: "1px",
              marginBottom: "12px",
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
              fontFamily: "monospace",
              marginTop: "4px",
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
        <span style={{ color: "#CAA05C", fontWeight: "bold" }}>
          &ldquo;Run Together. Build a Better Tomorrow.&rdquo;
        </span>
        <span style={{ color: "#9CA3AF" }}>
          Rakesh Ray Community Initiative • Parsa, Nepal
        </span>
      </div>
    </div>
  );

  const imageResponse = new ImageResponse(passElement, {
    width: 900,
    height: 520,
  });

  const arrayBuffer = await imageResponse.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

