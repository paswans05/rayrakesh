import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { isRequestAdminAuthenticated, isServerAdminAuthenticated } from "@/lib/admin-auth";
import { getAllRegistrations } from "@/lib/db";
import { generateRunnerPassPng } from "@/lib/generate-runner-pass";
import { createZipArchive, ZipFileInput } from "@/lib/simple-zip";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
// 60-second execution budget on serverless (allows generating passes)
export const maxDuration = 60;

export async function GET(req: NextRequest) {
  try {
    const isAuthed = (await isServerAdminAuthenticated()) || isRequestAdminAuthenticated(req);
    if (!isAuthed) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Please login to admin dashboard." },
        { status: 401 }
      );
    }

    const registrations = await getAllRegistrations();
    if (!registrations || registrations.length === 0) {
      return NextResponse.json(
        { success: false, error: "No runner registrations found to download." },
        { status: 404 }
      );
    }

    const passesDir = path.join(process.cwd(), "public", "passes");
    const zipFiles: ZipFileInput[] = [];

    // Process all passes in parallel chunks of 5 to balance memory and speed
    const CHUNK_SIZE = 5;
    for (let i = 0; i < registrations.length; i += CHUNK_SIZE) {
      const chunk = registrations.slice(i, i + CHUNK_SIZE);
      await Promise.all(
        chunk.map(async (record) => {
          const regId = record.registration_id;
          const fileName = `Rakesh-Marathon-Pass-${regId}.png`;
          const filePath = path.join(passesDir, fileName);

          // 1. Check if cached on disk
          if (fs.existsSync(filePath)) {
            try {
              const cachedBuf = await fs.promises.readFile(filePath);
              zipFiles.push({ name: fileName, data: cachedBuf });
              return;
            } catch (readErr) {
              console.warn(`[all-passes] Error reading cached file ${filePath}:`, readErr);
            }
          }

          // 2. Otherwise generate the pass PNG on the fly
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

          try {
            const generatedBuffer = await generateRunnerPassPng({
              registrationId: regId,
              fullName: record.full_name,
              age: record.age,
              gender: record.gender || "Participant",
              tshirtSize: record.tshirt_size || "M",
              address: record.address || "Parsa, Nepal",
              date: timestamp,
            });

            // Cache to disk if possible
            try {
              await fs.promises.mkdir(passesDir, { recursive: true });
              await fs.promises.writeFile(filePath, generatedBuffer);
            } catch {
              // Ignore filesystem write error in serverless read-only mode
            }

            zipFiles.push({ name: fileName, data: generatedBuffer });
          } catch (genErr) {
            console.error(`[all-passes] Error generating pass for ${regId}:`, genErr);
          }
        })
      );
    }

    if (zipFiles.length === 0) {
      return NextResponse.json(
        { success: false, error: "Failed to generate any runner passes." },
        { status: 500 }
      );
    }

    // Build the ZIP archive
    const zipBuffer = createZipArchive(zipFiles);
    const dateStr = new Date().toISOString().split("T")[0];
    const zipFileName = `Rakesh-Marathon-All-Passes-${dateStr}.zip`;

    return new NextResponse(new Uint8Array(zipBuffer), {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${zipFileName}"`,
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "Content-Length": String(zipBuffer.length),
      },
    });
  } catch (error) {
    console.error("[/api/admin/download-all-passes GET] Error:", error);
    const message = error instanceof Error ? error.message : "Failed to build passes archive.";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
