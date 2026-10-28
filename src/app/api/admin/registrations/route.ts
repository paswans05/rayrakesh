import { NextRequest, NextResponse } from "next/server";
import { isRequestAdminAuthenticated, isServerAdminAuthenticated } from "@/lib/admin-auth";
import { getAllRegistrations, getRegistrationStats, deleteRegistrationById } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const isAuthed = (await isServerAdminAuthenticated()) || isRequestAdminAuthenticated(req);
    if (!isAuthed) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Please login to access registrations." },
        { status: 401 }
      );
    }

    const registrations = getAllRegistrations();
    const stats = getRegistrationStats();

    return NextResponse.json({
      success: true,
      stats,
      registrations,
    });
  } catch (error) {
    console.error("[/api/admin/registrations GET] Error:", error);
    const message = error instanceof Error ? error.message : "Failed to fetch registrations.";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const isAuthed = (await isServerAdminAuthenticated()) || isRequestAdminAuthenticated(req);
    if (!isAuthed) {
      return NextResponse.json(
        { success: false, error: "Unauthorized." },
        { status: 401 }
      );
    }

    const { id } = await req.json();
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing registration ID to delete." },
        { status: 400 }
      );
    }

    const deleted = deleteRegistrationById(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Registration not found or already deleted." },
        { status: 404 }
      );
    }

    const stats = getRegistrationStats();
    return NextResponse.json({
      success: true,
      message: "Registration deleted successfully.",
      stats,
    });
  } catch (error) {
    console.error("[/api/admin/registrations DELETE] Error:", error);
    const message = error instanceof Error ? error.message : "Failed to delete registration.";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
