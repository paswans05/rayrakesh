import { NextRequest, NextResponse } from "next/server";
import { isRequestAdminAuthenticated } from "@/lib/admin-auth";
import { getAllRegistrations, getRegistrationStats, deleteRegistrationById } from "@/lib/db";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    if (!isRequestAdminAuthenticated(req)) {
      return NextResponse.json(
        { error: "Unauthorized. Please login to access registrations." },
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
    return NextResponse.json(
      { error: "Failed to fetch registrations." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    if (!isRequestAdminAuthenticated(req)) {
      return NextResponse.json(
        { error: "Unauthorized." },
        { status: 401 }
      );
    }

    const { id } = await req.json();
    if (!id) {
      return NextResponse.json(
        { error: "Missing registration ID to delete." },
        { status: 400 }
      );
    }

    const deleted = deleteRegistrationById(id);
    if (!deleted) {
      return NextResponse.json(
        { error: "Registration not found or already deleted." },
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
    return NextResponse.json(
      { error: "Failed to delete registration." },
      { status: 500 }
    );
  }
}

