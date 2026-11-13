import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { getRegistrationById } from "@/lib/db";
import { generateRunnerCertificatePng } from "@/lib/generate-runner-certificate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function extractRegistrationId(raw: string): string {
  const match = raw.match(/RM[0-9A-Za-z_-]+/i);
  if (match) return match[0];
  return raw.replace(/\.png$/i, "").replace(/^Rakesh-Marathon-Certificate-/i, "").trim();
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    if (!id) {
      return new NextResponse("Missing participant ID", { status: 400 });
    }

    const cleanId = extractRegistrationId(id);
    const certsDir = path.join(process.cwd(), "public", "certificates");
    const filePath = path.join(certsDir, `Rakesh-Marathon-Certificate-${cleanId}.png`);

    const isDownload = req.nextUrl.searchParams.get("download") === "1";
    const dispositionType = isDownload ? "attachment" : "inline";

    // 1. If certificate already cached on disk, serve directly
    if (fs.existsSync(filePath)) {
      try {
        const buffer = await fs.promises.readFile(filePath);
        return new NextResponse(new Uint8Array(buffer), {
          headers: {
            "Content-Type": "image/png",
            "Content-Disposition": `${dispositionType}; filename="Rakesh-Marathon-Certificate-${cleanId}.png"`,
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      } catch (readErr) {
        console.warn("[marathon-certificate] Error reading cached file, regenerating:", readErr);
      }
    }

    // 2. Fetch record from database (or fallback gracefully to generate card)
    const record = await getRegistrationById(cleanId);

    const fullName = record?.full_name || "Official Runner";
    const regId = record?.registration_id || cleanId;
    const timestamp = record?.created_at
      ? new Date(record.created_at).toLocaleDateString("en-US", {
          timeZone: "Asia/Kathmandu",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "Event 2026";

    const certBuffer = await generateRunnerCertificatePng({
      registrationId: regId,
      fullName,
      distance: "15 KILOMETERS (SOLO)",
      date: timestamp,
      location: "Parsa, Madhesh Province, Nepal",
      organizer: "Rakesh Ray",
    });

    // Save locally to public/certificates if writable
    try {
      await fs.promises.mkdir(certsDir, { recursive: true });
      await fs.promises.writeFile(filePath, certBuffer);
    } catch {
      // Ignore cache failure on serverless read-only filesystem
    }

    return new NextResponse(new Uint8Array(certBuffer), {
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": `${dispositionType}; filename="Rakesh-Marathon-Certificate-${cleanId}.png"`,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("[/api/marathon-certificate] Error:", error);
    return new NextResponse("Failed to download runner certificate", { status: 500 });
  }
}
