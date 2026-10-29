import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { getRegistrationById } from "@/lib/db";
import { generateRunnerPassPng } from "@/lib/generate-runner-pass";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function extractRegistrationId(raw: string): string {
  const match = raw.match(/RM[0-9A-Za-z_-]+/i);
  if (match) return match[0];
  return raw.replace(/\.png$/i, "").replace(/^Rakesh-Marathon-Pass-/i, "").trim();
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    if (!id) {
      return new NextResponse("Missing pass ID", { status: 400 });
    }

    const cleanId = extractRegistrationId(id);
    const passesDir = path.join(process.cwd(), "public", "passes");
    const filePath = path.join(passesDir, `Rakesh-Marathon-Pass-${cleanId}.png`);

    const isDownload = req.nextUrl.searchParams.get("download") === "1";
    const dispositionType = isDownload ? "attachment" : "inline";

    // 1. If file already exists locally in public/passes, serve it directly
    if (fs.existsSync(filePath)) {
      try {
        const buffer = await fs.promises.readFile(filePath);
        return new NextResponse(new Uint8Array(buffer), {
          headers: {
            "Content-Type": "image/png",
            "Content-Disposition": `${dispositionType}; filename="Rakesh-Marathon-Pass-${cleanId}.png"`,
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      } catch (readErr) {
        console.warn("[marathon-pass] Error reading cached file, regenerating:", readErr);
      }
    }

    // 2. Fetch from Turso database (or fallback gracefully to generate card)
    const record = await getRegistrationById(cleanId);

    const fullName = record?.full_name || "Official Runner";
    const regId = record?.registration_id || cleanId;
    const age = record?.age || 25;
    const gender = record?.gender || "Participant";
    const tshirtSize = record?.tshirt_size || "M";
    const address = record?.address || "Parsa, Nepal";
    const timestamp = record?.created_at
      ? new Date(record.created_at).toLocaleString("en-US", {
          timeZone: "Asia/Kathmandu",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "Official Pass";

    const passBuffer = await generateRunnerPassPng({
      registrationId: regId,
      fullName,
      age,
      gender,
      tshirtSize,
      address,
      date: timestamp,
    });

    // Save to public/passes so subsequent requests are instantaneous
    try {
      await fs.promises.mkdir(passesDir, { recursive: true });
      await fs.promises.writeFile(filePath, passBuffer);
    } catch (saveErr) {
      console.warn("[marathon-pass] Could not cache pass to public folder:", saveErr);
    }

    return new NextResponse(new Uint8Array(passBuffer), {
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": `${dispositionType}; filename="Rakesh-Marathon-Pass-${cleanId}.png"`,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("[/api/marathon-pass] Error:", error);
    return new NextResponse("Failed to download runner pass", { status: 500 });
  }
}
