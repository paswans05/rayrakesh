import { NextRequest, NextResponse } from "next/server";
import { isServerAdminAuthenticated, isRequestAdminAuthenticated } from "@/lib/admin-auth";
import { getAllAdminUsers, createAdminUser, deleteAdminUser } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const isAuthed = (await isServerAdminAuthenticated()) || isRequestAdminAuthenticated(req);
    if (!isAuthed) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }

    const users = await getAllAdminUsers();
    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error("[/api/admin/users GET] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch admin users." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const isAuthed = (await isServerAdminAuthenticated()) || isRequestAdminAuthenticated(req);
    if (!isAuthed) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }

    const { username, password, email, role } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Username and password are required." },
        { status: 400 }
      );
    }

    const res = await createAdminUser({ username, password, email, role });
    if (!res.success) {
      return NextResponse.json({ success: false, error: res.error }, { status: 400 });
    }

    const users = await getAllAdminUsers();
    return NextResponse.json({
      success: true,
      message: `Admin user "${username}" created successfully.`,
      users,
    });
  } catch (error) {
    console.error("[/api/admin/users POST] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create admin user." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const isAuthed = (await isServerAdminAuthenticated()) || isRequestAdminAuthenticated(req);
    if (!isAuthed) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }

    const { id } = await req.json();
    if (!id) {
      return NextResponse.json(
        { success: false, error: "User ID or username is required." },
        { status: 400 }
      );
    }

    const res = await deleteAdminUser(id);
    if (!res.success) {
      return NextResponse.json({ success: false, error: res.error }, { status: 400 });
    }

    const users = await getAllAdminUsers();
    return NextResponse.json({
      success: true,
      message: "Admin user removed successfully.",
      users,
    });
  } catch (error) {
    console.error("[/api/admin/users DELETE] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete admin user." },
      { status: 500 }
    );
  }
}

