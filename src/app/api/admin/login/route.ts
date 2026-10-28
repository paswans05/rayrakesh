import { NextRequest, NextResponse } from "next/server";
import { verifyAdminCredentials, createAdminToken, ADMIN_COOKIE_NAME } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!verifyAdminCredentials(username, password)) {
      return NextResponse.json(
        { error: "Invalid admin username or password." },
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
    return NextResponse.json(
      { error: "Internal server error during login." },
      { status: 500 }
    );
  }
}

