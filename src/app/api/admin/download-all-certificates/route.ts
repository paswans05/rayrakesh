import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { isRequestAdminAuthenticated, isServerAdminAuthenticated } from "@/lib/admin-auth";
import { getAllRegistrations } from "@/lib/db";
import { generateRunnerCertificatePng } from "@/lib/generate-runner-certificate";
import { createZipArchive, ZipFileInput } from "@/lib/simple-zip";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60; // 60 seconds budget for certificate batch generation

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
        { success: false, error: "No runner registrations found to download certificates." },
        { status: 404 }
      );
    }

    const certsDir = path.join(process.cwd(), "public", "certificates");
    const zipFiles: ZipFileInput[] = [];

    // Process certificates in chunks
    const CHUNK_SIZE = 5;
    for (let i = 0; i < registrations.length; i += CHUNK_SIZE) {
      const chunk = registrations.slice(i, i + CHUNK_SIZE);
      await Promise.all(
        chunk.map(async (record) => {
          const regId = record.registration_id;
          const fileName = `Rakesh-Marathon-Certificate-${regId}.png`;
          const filePath = path.join(certsDir, fileName);

          // 1. Check cached disk copy
          if (fs.existsSync(filePath)) {
            try {
              const cachedBuf = await fs.promises.readFile(filePath);
              zipFiles.push({ name: fileName, data: cachedBuf });
              return;
            } catch (readErr) {
              console.warn(`[all-certificates] Error reading cached file ${filePath}:`, readErr);
            }
          }

          // 2. Otherwise generate on the fly
          const timestamp = record.created_at
            ? new Date(record.created_at).toLocaleDateString("en-US", {
                timeZone: "Asia/Kathmandu",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Event 2026";

          try {
            const certBuffer = await generateRunnerCertificatePng({
              registrationId: regId,
              fullName: record.full_name,
              distance: "15 KILOMETERS (SOLO)",
              date: timestamp,
              location: "Parsa, Madhesh Province, Nepal",
              organizer: "Rakesh Ray",
            });

            // Cache to disk if possible
            try {
              await fs.promises.mkdir(certsDir, { recursive: true });
              await fs.promises.writeFile(filePath, certBuffer);
            } catch {
              // Ignore cache write error on serverless read-only mode
            }

            zipFiles.push({ name: fileName, data: certBuffer });
          } catch (genErr) {
            console.error(`[all-certificates] Error generating certificate for ${regId}:`, genErr);
          }
        })
      );
    }

    if (zipFiles.length === 0) {
      return NextResponse.json(
        { success: false, error: "Failed to generate any certificates." },
        { status: 500 }
      );
    }

    // Build the ZIP archive
    const zipBuffer = createZipArchive(zipFiles);
    const dateStr = new Date().toISOString().split("T")[0];
    const zipFileName = `Rakesh-Marathon-All-Certificates-${dateStr}.zip`;

    return new NextResponse(new Uint8Array(zipBuffer), {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${zipFileName}"`,
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "Content-Length": String(zipBuffer.length),
      },
    });
  } catch (error) {
    console.error("[/api/admin/download-all-certificates GET] Error:", error);
    const message = error instanceof Error ? error.message : "Failed to build certificates archive.";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

