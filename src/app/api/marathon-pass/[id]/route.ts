import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { getRegistrationById } from "@/lib/db";
import { generateRunnerPassPng } from "@/lib/generate-runner-pass";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    if (!id) {
      return new NextResponse("Missing pass ID", { status: 400 });
    }

    const cleanId = id.replace(/[^a-zA-Z0-9_-]/g, "");
    const passesDir = path.join(process.cwd(), "public", "passes");
    const filePath = path.join(passesDir, `Rakesh-Marathon-Pass-${cleanId}.png`);

    // 1. If file already exists locally in public/passes, serve it directly
    if (fs.existsSync(filePath)) {
      const buffer = await fs.promises.readFile(filePath);
      return new NextResponse(new Uint8Array(buffer), {
        headers: {
          "Content-Type": "image/png",
          "Content-Disposition": `attachment; filename="Rakesh-Marathon-Pass-${cleanId}.png"`,
          "Cache-Control": "public, max-age=86400",
        },
      });
    }

    // 2. Otherwise generate from Turso database on the fly
    const record = await getRegistrationById(cleanId);
    if (!record) {
      return new NextResponse("Registration pass not found", { status: 404 });
    }

    const timestamp = record.created_at
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
      registrationId: record.registration_id,
      fullName: record.full_name,
      age: record.age,
      gender: record.gender,
      tshirtSize: record.tshirt_size || "M",
      address: record.address,
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
        "Content-Disposition": `attachment; filename="Rakesh-Marathon-Pass-${cleanId}.png"`,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("[/api/marathon-pass] Error:", error);
    return new NextResponse("Failed to download runner pass", { status: 500 });
  }
}
