import crypto from "node:crypto";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const ADMIN_COOKIE_NAME = "admin_session";

function getSecretKey(): string {
  return process.env.ADMIN_SESSION_SECRET || "rakesh-marathon-admin-session-secret-2026";
}

export function verifyAdminCredentials(username?: string, password?: string): boolean {
  const expectedUser = (process.env.ADMIN_USERNAME || "admin").trim();
  const expectedPass = (process.env.ADMIN_PASSWORD || "admin@rakesh15k").trim();

  if (!username || !password) return false;
  return username.trim() === expectedUser && password.trim() === expectedPass;
}

export function createAdminToken(username: string): string {
  const secret = getSecretKey();
  const timestamp = Date.now();
  const payload = `${username}:${timestamp}`;
  const signature = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  return Buffer.from(`${payload}:${signature}`).toString("base64");
}

export function verifyAdminToken(token?: string | null): boolean {
  if (!token) return false;

  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const parts = decoded.split(":");
    if (parts.length < 3) return false;

    const [username, timestampStr, signature] = parts;
    const timestamp = parseInt(timestampStr, 10);
    if (isNaN(timestamp)) return false;

    // Check expiration (24 hours)
    const MAX_AGE_MS = 24 * 60 * 60 * 1000;
    if (Date.now() - timestamp > MAX_AGE_MS) {
      return false;
    }

    const secret = getSecretKey();
    const expectedPayload = `${username}:${timestampStr}`;
    const expectedSig = crypto.createHmac("sha256", secret).update(expectedPayload).digest("hex");

    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig));
  } catch {
    return false;
  }
}

export async function isServerAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(ADMIN_COOKIE_NAME);
  return verifyAdminToken(sessionCookie?.value);
}

export function isRequestAdminAuthenticated(req: NextRequest): boolean {
  const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  return verifyAdminToken(token);
}

