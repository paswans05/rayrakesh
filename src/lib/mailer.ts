import nodemailer from "nodemailer";

const smtpPort = Number(process.env.SMTP_PORT) || 587;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: smtpPort,
  secure: smtpPort === 465, // true for 465 (SSL), false for 587 (STARTTLS)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 20000,
});

export interface MailAttachment {
  filename: string;
  content?: Buffer | string;
  path?: string;
  contentType?: string;
  cid?: string;
  encoding?: string;
}

export interface SendMailOptions {
  to?: string;
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: MailAttachment[];
}

export async function sendMail({ to, subject, html, replyTo, attachments }: SendMailOptions) {
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;
  const recipient = to || process.env.MAIL_TO || process.env.SMTP_USER;

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("[mailer] SMTP credentials not configured – skipping email.");
    return { accepted: [], skipped: true };
  }

  if (!recipient) {
    console.warn("[mailer] No recipient specified – skipping email.");
    return { accepted: [], skipped: true };
  }

  try {
    const info = await transporter.sendMail({
      from,
      to: recipient,
      replyTo: replyTo || undefined,
      subject,
      html,
      attachments,
    });
    console.log(`[mailer] Email delivered successfully to: ${recipient} (Message ID: ${info.messageId})`);
    return info;
  } catch (error) {
    console.error(`[mailer] Failed to deliver email to ${recipient}:`, error);
    throw error;
  }
}
