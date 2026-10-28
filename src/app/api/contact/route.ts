import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // ── Server-side validation ──
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // ── Build HTML email ──
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #202a34; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #CAA05C; margin: 0; font-size: 22px;">New Contact Form Message</h1>
          <p style="color: #CBD1D6; margin: 4px 0 0; font-size: 14px;">Rakesh Ray Website — Contact Us</p>
        </div>
        <div style="background: #f7f8f9; padding: 28px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr>
              <td style="padding: 10px 0; color: #4B535D; font-weight: 600; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #202a34;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #4B535D; font-weight: 600; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #202a34;"><a href="mailto:${escapeHtml(email)}" style="color: #CAA05C;">${escapeHtml(email)}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding: 10px 0; color: #4B535D; font-weight: 600; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; color: #202a34;">${escapeHtml(phone)}</td>
            </tr>` : ""}
            ${service ? `<tr>
              <td style="padding: 10px 0; color: #4B535D; font-weight: 600; vertical-align: top;">Service</td>
              <td style="padding: 10px 0; color: #202a34;">${escapeHtml(service)}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #4B535D; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #202a34; white-space: pre-line;">${escapeHtml(message)}</td>
            </tr>
          </table>
        </div>
        <p style="text-align: center; color: #A6B0BA; font-size: 12px; margin-top: 16px;">
          Sent from the contact form at rakeshray.com
        </p>
      </div>
    `;

    await sendMail({
      subject: `Contact: ${name} — ${service || "General Inquiry"}`,
      html,
      replyTo: email,
    });

    return NextResponse.json({ success: true, message: "Your message has been sent successfully." });
  } catch (error) {
    console.error("[/api/contact] Error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
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

