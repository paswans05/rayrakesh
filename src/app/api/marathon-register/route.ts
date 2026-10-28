import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      age,
      gender,
      address,
      emergencyName,
      emergencyPhone,
      registrationId,
    } = body;

    // ── Server-side validation ──
    if (!fullName || !email || !phone || !age || !address || !emergencyName || !emergencyPhone) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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

    const regId = registrationId || `RM15K-${Math.floor(1000 + Math.random() * 9000)}`;
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kathmandu",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // ── Notification email to Rakesh (site owner) ──
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
            <tr><td style="padding: 8px 0; color: #4B535D; font-weight: 600;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #CAA05C;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #4B535D; font-weight: 600;">Phone</td><td style="padding: 8px 0; color: #202a34;">${escapeHtml(phone)}</td></tr>
            <tr><td style="padding: 8px 0; color: #4B535D; font-weight: 600;">Age</td><td style="padding: 8px 0; color: #202a34;">${escapeHtml(age)} years</td></tr>
            <tr><td style="padding: 8px 0; color: #4B535D; font-weight: 600;">Gender</td><td style="padding: 8px 0; color: #202a34;">${escapeHtml(gender || "Not specified")}</td></tr>
            <tr><td style="padding: 8px 0; color: #4B535D; font-weight: 600;">City / Address</td><td style="padding: 8px 0; color: #202a34;">${escapeHtml(address)}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px;">
            <p style="font-size: 13px; color: #4B535D; margin: 0 0 8px; font-weight: 600;">Emergency Contact</p>
            <p style="font-size: 15px; color: #202a34; margin: 0;">${escapeHtml(emergencyName)} — ${escapeHtml(emergencyPhone)}</p>
          </div>
        </div>
        <div style="padding: 16px 32px; background: #202a34; border-radius: 0 0 12px 12px; text-align: center;">
          <p style="color: #A6B0BA; font-size: 12px; margin: 0;">15 KM Single-Distance • Kathmandu, Nepal</p>
        </div>
      </div>
    `;

    // ── Confirmation email to participant ──
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
            Thank you for registering for the <strong>Rakesh Marathon (15 KM)</strong>! Your registration has been received and confirmed. Keep this email for your records.
          </p>
          <div style="background: #202a34; color: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; color: #A6B0BA;">Registration ID</td>
                <td style="padding: 6px 0; color: #CAA05C; font-weight: bold; text-align: right; font-family: monospace; font-size: 16px;">${escapeHtml(regId)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #A6B0BA;">Distance</td>
                <td style="padding: 6px 0; color: #fff; text-align: right;">15 KM (Single Category)</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #A6B0BA;">Location</td>
                <td style="padding: 6px 0; color: #fff; text-align: right;">Kathmandu, Nepal</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #A6B0BA;">Registered On</td>
                <td style="padding: 6px 0; color: #fff; text-align: right;">${escapeHtml(timestamp)}</td>
              </tr>
            </table>
          </div>
          <div style="background: #fffbeb; border: 1px solid #CAA05C; padding: 14px 18px; border-radius: 8px; font-size: 13px; color: #202a34; line-height: 1.5;">
            <strong>What's next?</strong><br/>
            • The official race date and route will be announced soon.<br/>
            • Bib collection details will be emailed before race day.<br/>
            • Please bring a valid photo ID when collecting your race bib.
          </div>
        </div>
        <div style="padding: 16px 32px; background: #202a34; border-radius: 0 0 12px 12px; text-align: center;">
          <p style="color: #CAA05C; font-size: 13px; margin: 0; font-weight: 600;">Run Together. Build a Better Tomorrow.</p>
          <p style="color: #A6B0BA; font-size: 11px; margin: 6px 0 0;">Rakesh Ray — Community Initiative</p>
        </div>
      </div>
    `;

    // Send both emails concurrently
    await Promise.all([
      sendMail({
        subject: `Marathon Registration: ${fullName} [${regId}]`,
        html: adminHtml,
        replyTo: email,
      }),
      sendMail({
        subject: `Your Rakesh Marathon Registration is Confirmed [${regId}]`,
        html: participantHtml,
        replyTo: process.env.MAIL_TO,
      }).catch((err) => {
        // Don't fail the whole request if confirmation email fails
        console.warn("[marathon-register] Participant email failed:", err);
      }),
    ]);

    return NextResponse.json({
      success: true,
      registrationId: regId,
      message: "Registration confirmed. Check your email for confirmation.",
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

