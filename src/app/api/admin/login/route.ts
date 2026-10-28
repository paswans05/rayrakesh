import { NextRequest, NextResponse } from "next/server";
import { verifyAdminCredentials, createAdminToken, ADMIN_COOKIE_NAME } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!verifyAdminCredentials(username, password)) {
      return NextResponse.json(
        { success: false, error: "Invalid admin username or password." },
        { status: 401 }
      );
    }

    const token = createAdminToken(username.trim());
    const res = NextResponse.json({
      success: true,
      message: "Admin authentication successful.",
    });

    res.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      maxAge: 24 * 60 * 60, // 24 hours
    });

    return res;
  } catch (error) {
    console.error("[/api/admin/login] Error:", error);
    const message = error instanceof Error ? error.message : "Internal server error during login.";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
