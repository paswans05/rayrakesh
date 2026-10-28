import { NextRequest, NextResponse } from "next/server";
import {
  isServerAdminAuthenticated,
  isRequestAdminAuthenticated,
  getCurrentAdminUsername,
  getSecretKey,
} from "@/lib/admin-auth";
import {
  updateAdminUserPassword,
  verifyAdminCredentialsFromDb,
  getAdminUserByUsername,
} from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, currentPassword, newPassword, recoveryKey } = body;

    if (!newPassword || newPassword.trim().length < 6) {
      return NextResponse.json(
        { success: false, error: "New password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    const cleanNewPass = newPassword.trim();
    let targetUsername = (username || "").trim();

    // Check if requester is logged in via session cookie
    const isAuthed = (await isServerAdminAuthenticated()) || isRequestAdminAuthenticated(req);
    const loggedInUsername = await getCurrentAdminUsername();

    if (isAuthed && loggedInUsername) {
      if (!targetUsername) {
        targetUsername = loggedInUsername;
      }

      // If changing own password, optional currentPassword check or direct allow
      if (currentPassword) {
        const isCurrentValid = await verifyAdminCredentialsFromDb(targetUsername, currentPassword);
        if (!isCurrentValid) {
          return NextResponse.json(
            { success: false, error: "Current password is incorrect." },
            { status: 401 }
          );
        }
      }

      const updateRes = await updateAdminUserPassword(targetUsername, cleanNewPass);
      if (!updateRes.success) {
        return NextResponse.json(
          { success: false, error: updateRes.error || "Failed to update password." },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: `Password for "${targetUsername}" has been updated successfully.`,
      });
    }

    // Unauthenticated reset: requires either current password or recovery key
    if (!targetUsername) {
      return NextResponse.json(
        { success: false, error: "Username is required to reset password." },
        { status: 400 }
      );
    }

    // Check if recovery key provided matches master ADMIN_SESSION_SECRET
    const masterSecret = getSecretKey();
    const isRecoveryKeyValid = recoveryKey && recoveryKey.trim() === masterSecret.trim();

    // Or check if current password is valid
    const isCurrentPassValid =
      currentPassword && (await verifyAdminCredentialsFromDb(targetUsername, currentPassword));

    if (!isRecoveryKeyValid && !isCurrentPassValid) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid current password or recovery key. Password reset rejected.",
        },
        { status: 401 }
      );
    }

    const updateRes = await updateAdminUserPassword(targetUsername, cleanNewPass);
    if (!updateRes.success) {
      return NextResponse.json(
        { success: false, error: updateRes.error || "Failed to reset password." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Password for "${targetUsername}" has been reset successfully. You can now log in.`,
    });
  } catch (error) {
    console.error("[/api/admin/reset-password] Error:", error);
    const message = error instanceof Error ? error.message : "Internal error during password reset.";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

