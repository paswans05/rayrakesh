import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { sendMail } from "@/lib/mailer";
import { upsertRegistration, getRegistrationByEmail } from "@/lib/db";
import { generateRunnerPassPng } from "@/lib/generate-runner-pass";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      age,
      gender,
      tshirtSize,
      address,
      emergencyName,
      emergencyPhone,
      registrationId,
    } = body;

    // ── Server-side validation ──
    if (!fullName || !email || !phone || !age || !address) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum < 16 || ageNum > 100) {
      return NextResponse.json(
        { error: "Age must be between 16 and 100." },
        { status: 400 }
      );
    }

    // ── Turso libSQL Registration (Upsert) ──
    const existing = await getRegistrationByEmail(cleanEmail);
    const regId = existing?.registration_id || registrationId || `RM15K-${Math.floor(1000 + Math.random() * 9000)}`;

    const { isNew } = await upsertRegistration({
      registration_id: regId,
      full_name: fullName.trim(),
      email: cleanEmail,
      phone: phone.trim(),
      age: ageNum,
      gender: gender || "prefer-not-to-say",
      tshirt_size: tshirtSize || "M",
      address: address.trim(),
      emergency_name: emergencyName ? emergencyName.trim() : "",
      emergency_phone: emergencyPhone ? emergencyPhone.trim() : "",
    });

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kathmandu",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // ── Generate Digital Runner Pass PNG Card Attachment ──
    const passFileName = `Rakesh-Marathon-Pass-${regId}.png`;
    const passDownloadPath = `/passes/${passFileName}`;
    const directApiDownloadPath = `/api/marathon-pass/${regId}`;

    let passBuffer: Buffer | null = null;
    try {
      passBuffer = await generateRunnerPassPng({
        registrationId: regId,
        fullName: fullName.trim(),
        age: ageNum,
        gender: gender || "Not specified",
        tshirtSize: tshirtSize || "M",
        address: address.trim(),
        date: timestamp,
      });

      // Save locally to public/passes if writable (e.g. localhost/VPS)
      if (passBuffer) {
        try {
          const passesDir = path.join(process.cwd(), "public", "passes");
          await fs.promises.mkdir(passesDir, { recursive: true });
          const passFilePath = path.join(passesDir, passFileName);
          await fs.promises.writeFile(passFilePath, passBuffer);
          console.log(`[/api/marathon-register] Pass card saved to public file: ${passFilePath}`);
        } catch (fsErr) {
          // Normal on Vercel serverless where root filesystem is read-only
          console.warn("[marathon-register] Local file cache skipped (serverless environment):", fsErr);
        }
      }
    } catch (genErr) {
      console.error("[marathon-register] Failed to generate runner pass card:", genErr);
    }

    // Determine site URL for absolute email links
    const host = req.headers.get("x-forwarded-host") || req.headers.get("host") || "";
    const proto = req.headers.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
    const siteUrl = (
      process.env.NEXT_PUBLIC_SITE_URL ||
      (host ? `${proto}://${host}` : "") ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
      "http://localhost:3000"
    ).replace(/\/$/, "");

    const fullPassDownloadUrl = `${siteUrl}${passDownloadPath}`;
    const fullApiDownloadUrl = `${siteUrl}${directApiDownloadPath}`;

    const passAttachments = passBuffer
      ? [
        {
          filename: passFileName,
          content: passBuffer,
          contentType: "image/png",
          cid: "runner-pass-card",
        },
      ]
      : undefined;

    // ── Notification email to Rakesh Ray (site organizer) ──
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #202a34; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #CAA05C; margin: 0; font-size: 22px;">🏃 New Marathon Registration</h1>
          <p style="color: #CBD1D6; margin: 4px 0 0; font-size: 14px;">Rakesh Marathon — 15 KM Community Race</p>
        </div>
        <div style="background: #f7f8f9; padding: 28px 32px; border: 1px solid #e5e7eb; border-top: none;">
          <div style="background: #CAA05C; color: #202a34; padding: 12px 20px; border-radius: 8px; margin-bottom: 20px; font-size: 14px;">
            <strong>Registration ID:</strong> ${escapeHtml(regId)} &nbsp;|&nbsp;
            <strong>Time:</strong> ${escapeHtml(timestamp)} NPT
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr><td style="padding: 8px 0; color: #4B535D; font-weight: 600; width: 150px;">Full Name</td><td style="padding: 8px 0; color: #202a34;">${escapeHtml(fullName)}</td></tr>
            <tr><td style="padding: 8px 0; color: #4B535D; font-weight: 600;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(cleanEmail)}" style="color: #CAA05C;">${escapeHtml(cleanEmail)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #4B535D; font-weight: 600;">Phone</td><td style="padding: 8px 0; color: #202a34;">${escapeHtml(phone)}</td></tr>
            <tr><td style="padding: 8px 0; color: #4B535D; font-weight: 600;">Age</td><td style="padding: 8px 0; color: #202a34;">${escapeHtml(String(age))} years</td></tr>
            <tr><td style="padding: 8px 0; color: #4B535D; font-weight: 600;">Gender</td><td style="padding: 8px 0; color: #202a34;">${escapeHtml(gender || "Not specified")}</td></tr>
            <tr><td style="padding: 8px 0; color: #4B535D; font-weight: 600;">T-Shirt Size</td><td style="padding: 8px 0; color: #CAA05C; font-weight: bold;">${escapeHtml(tshirtSize || "M")}</td></tr>
            <tr><td style="padding: 8px 0; color: #4B535D; font-weight: 600;">City / Address</td><td style="padding: 8px 0; color: #202a34;">${escapeHtml(address)}</td></tr>
          </table>

          <!-- Direct Download Link for Organizer -->
          <div style="text-align: center; margin: 22px 0 16px;">
            <a href="${fullPassDownloadUrl}" download="${passFileName}"
               style="background: #CAA05C; color: #0f1720; padding: 12px 24px; border-radius: 8px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block;">
              ⬇ Download Runner Pass (${escapeHtml(regId)})
            </a>
            <p style="color: #6B7280; font-size: 11px; margin: 6px 0 0;">
              URL: <a href="${fullPassDownloadUrl}" style="color: #CAA05C; word-break: break-all;">${fullPassDownloadUrl}</a>
            </p>
          </div>

          ${passBuffer
        ? `
          <div style="margin-top: 14px; text-align: center;">
            <p style="font-size: 12px; color: #4B535D; margin-bottom: 8px; font-weight: bold; text-transform: uppercase;">Participant Pass Card Preview</p>
            <img src="cid:runner-pass-card" alt="Participant Pass" style="width: 100%; max-width: 480px; height: auto; border-radius: 8px; border: 1px solid #CAA05C;" />
          </div>`
        : ""
      }
        </div>
        <div style="padding: 16px 32px; background: #202a34; border-radius: 0 0 12px 12px; text-align: center;">
          <p style="color: #A6B0BA; font-size: 12px; margin: 0;">Stored in SQLite Database • 15 KM Single-Distance • Parsa, Nepal</p>
        </div>
      </div>
    `;

    // ── Confirmation email to registered participant ──
    const participantHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #202a34; padding: 28px 32px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: #CAA05C; margin: 0; font-size: 24px;">🏅 Registration Confirmed!</h1>
          <p style="color: #CBD1D6; margin: 8px 0 0; font-size: 15px;">Rakesh Marathon — 15 KM Community Race</p>
        </div>
        <div style="background: #f7f8f9; padding: 28px 32px; border: 1px solid #e5e7eb; border-top: none;">
          <p style="font-size: 16px; color: #202a34; margin: 0 0 16px;">
            Dear <strong>${escapeHtml(fullName)}</strong>,
          </p>
          <p style="font-size: 15px; color: #4B535D; line-height: 1.6; margin: 0 0 20px;">
            Congratulations! You are officially registered for the <strong>Rakesh Marathon (15 KM)</strong>. Your entry has been securely recorded in our event database.
          </p>

          <!-- Registration Summary Box -->
          <div style="background: #202a34; color: #fff; padding: 20px; border-radius: 10px; margin-bottom: 22px;">
            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; color: #A6B0BA;">BIB / Registration ID</td>
                <td style="padding: 6px 0; color: #CAA05C; font-weight: bold; text-align: right; font-family: monospace; font-size: 17px;">${escapeHtml(regId)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #A6B0BA;">Distance</td>
                <td style="padding: 6px 0; color: #fff; text-align: right; font-weight: 600;">15 KM (Single Distance)</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #A6B0BA;">Participant Name</td>
                <td style="padding: 6px 0; color: #fff; text-align: right;">${escapeHtml(fullName)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #A6B0BA;">T-Shirt Size</td>
                <td style="padding: 6px 0; color: #CAA05C; font-weight: bold; text-align: right;">${escapeHtml(tshirtSize || "M")} (Official Kit)</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #A6B0BA;">Location</td>
                <td style="padding: 6px 0; color: #fff; text-align: right;">Parsa, Nepal</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #A6B0BA;">Status</td>
                <td style="padding: 6px 0; color: #10B981; font-weight: bold; text-align: right;">Confirmed ✓</td>
              </tr>
            </table>
          </div>

          <!-- Direct Download CTA Button -->
          <div style="text-align: center; margin: 24px 0 20px; background: #fdf8ed; border: 1.5px dashed #CAA05C; padding: 18px; border-radius: 10px;">
            <p style="font-size: 13px; font-weight: bold; color: #202a34; margin: 0 0 10px;">Your Official Runner Pass is Ready for Download:</p>
            <a href="${fullPassDownloadUrl}" download="${passFileName}"
               style="background: #CAA05C; color: #0f1720; padding: 14px 28px; border-radius: 8px; font-weight: 800; font-size: 15px; text-decoration: none; display: inline-block; box-shadow: 0 4px 12px rgba(202,160,92,0.35);">
              ⬇ Download Official Pass Card (PNG)
            </a>
            <p style="color: #6B7280; font-size: 11px; margin: 10px 0 0;">
              Direct Link: <a href="${fullPassDownloadUrl}" style="color: #CAA05C; word-break: break-all;">${fullPassDownloadUrl}</a>
            </p>
          </div>

          <!-- Digital Runner Pass Card Preview -->
          ${passBuffer
        ? `
          <div style="margin: 24px 0; text-align: center;">
            <div style="background: #CAA05C; color: #121C27; display: inline-block; padding: 6px 18px; border-radius: 20px; font-size: 12px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 12px;">
              🎟 Your Digital Runner Pass
            </div>
            <p style="font-size: 13px; color: #4B535D; margin: 0 0 12px; line-height: 1.5;">
              Your official high-resolution runner pass is attached (<code>${passFileName}</code>) and saved for online download above.
            </p>
            <div style="background: #0f1720; padding: 10px; border-radius: 12px; border: 1.5px solid #CAA05C; display: inline-block; max-width: 100%;">
              <img src="cid:runner-pass-card" alt="Official Runner Pass" style="width: 100%; max-width: 500px; height: auto; border-radius: 8px; display: block;" />
            </div>
          </div>
          `
        : ""
      }

          <div style="background: #fffbeb; border: 1px solid #CAA05C; padding: 16px 20px; border-radius: 8px; font-size: 13px; color: #202a34; line-height: 1.6; margin-top: 20px;">
            <strong>Important Next Steps:</strong><br/>
            • <strong>Download your attached pass:</strong> Keep the PNG on your mobile device for quick check-in.<br/>
            • <strong>Bib Collection:</strong> Present your photo ID and BIB ID (<strong>${escapeHtml(regId)}</strong>) at the reporting counter on race morning.<br/>
            • <strong>Event Updates:</strong> Official route map checkpoints, flag-off schedule, and preparation guidelines will be emailed to you prior to race day.
          </div>
        </div>
        <div style="padding: 18px 32px; background: #202a34; border-radius: 0 0 12px 12px; text-align: center;">
          <p style="color: #CAA05C; font-size: 13px; margin: 0; font-weight: 600;">“Run Together. Build a Better Tomorrow.”</p>
          <p style="color: #A6B0BA; font-size: 11px; margin: 6px 0 0;">Rakesh Ray Community Initiative • Parsa, Nepal</p>
        </div>
      </div>
    `;

    // ── Send emails with card attachment ──
    const adminEmailRecipient = process.env.MAIL_TO || process.env.SMTP_USER;

    const emailTasks: Promise<any>[] = [];

    // 1. Organizer notification email
    if (adminEmailRecipient) {
      emailTasks.push(
        sendMail({
          to: adminEmailRecipient,
          subject: `🏃 New Marathon Registration: ${fullName} (${regId})`,
          html: adminHtml,
          replyTo: cleanEmail,
          attachments: passAttachments,
        }).catch((err) => {
          console.error("[/api/marathon-register] Organizer email send error:", err);
          return null;
        })
      );
    }

    // 2. Participant confirmation with card attachment & inline CID
    emailTasks.push(
      sendMail({
        to: cleanEmail,
        subject: `🏅 Your Official Rakesh Marathon 15 KM Pass [${regId}]`,
        html: participantHtml,
        replyTo: adminEmailRecipient || undefined,
        attachments: passAttachments,
      }).catch((err) => {
        console.error("[/api/marathon-register] Participant email send error:", err);
        return null;
      })
    );

    const emailResults = await Promise.allSettled(emailTasks);

    const adminFulfilled = emailResults[0]?.status === "fulfilled" && emailResults[0]?.value !== null;
    const participantFulfilled = emailResults.length > 1
      ? emailResults[1]?.status === "fulfilled" && emailResults[1]?.value !== null
      : adminFulfilled;

    if (adminFulfilled) {
      console.log(`[/api/marathon-register] Organizer notification email delivered to ${adminEmailRecipient}`);
    }

    if (participantFulfilled) {
      console.log(`[/api/marathon-register] Participant confirmation email delivered to ${cleanEmail}`);
    }

    return NextResponse.json({
      success: true,
      registrationId: regId,
      downloadUrl: passDownloadPath,
      fullDownloadUrl: fullPassDownloadUrl,
      apiDownloadUrl: directApiDownloadPath,
      fileName: passFileName,
      isNew,
      emailDelivered: {
        admin: adminFulfilled,
        participant: participantFulfilled,
      },
      message: isNew
        ? "Registration successfully saved in database. Confirmation email with your runner card has been sent."
        : "Registration updated! Your official runner pass card has been sent to your email.",
    });
  } catch (error) {
    console.error("[/api/marathon-register] Error:", error);
    return NextResponse.json(
      { error: "Failed to process registration. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
