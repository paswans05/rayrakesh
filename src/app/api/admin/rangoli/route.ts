import { NextRequest, NextResponse } from "next/server";
import { isRequestAdminAuthenticated, isServerAdminAuthenticated } from "@/lib/admin-auth";
import { getAllRangoliAdmin, getRangoliStatsAdmin, deleteRangoliEntryById } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const isAuthed = (await isServerAdminAuthenticated()) || isRequestAdminAuthenticated(req);
    if (!isAuthed) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Please login to access admin data." },
        { status: 401 }
      );
    }

    const entries = await getAllRangoliAdmin();
    const stats = await getRangoliStatsAdmin();

    return NextResponse.json({
      success: true,
      stats,
      entries,
    });
  } catch (error: any) {
    console.error("[/api/admin/rangoli GET] Error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch rangoli entries." },
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

    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing Rangoli ID to delete." },
        { status: 400 }
      );
    }

    const deleted = await deleteRangoliEntryById(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Rangoli entry not found or already deleted." },
        { status: 404 }
      );
    }

    const stats = await getRangoliStatsAdmin();
    return NextResponse.json({
      success: true,
      message: "Rangoli entry deleted successfully.",
      stats,
    });
  } catch (error: any) {
    console.error("[/api/admin/rangoli DELETE] Error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to delete rangoli entry." },
      { status: 500 }
    );
  }
}

