import { NextRequest, NextResponse } from "next/server";
import { voteRangoliEntry } from "@/lib/db";

function getVoterId(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip") || "unknown-ip";
  const userAgent = (req.headers.get("user-agent") || "").slice(0, 50);
  return `${ip}::${userAgent}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { entry_id } = body;

    if (!entry_id) {
      return NextResponse.json(
        { success: false, error: "Missing entry_id" },
        { status: 400 }
      );
    }

    const voterId = getVoterId(req);
    const result = await voteRangoliEntry(entry_id, voterId);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      entry_id,
      newVotesCount: result.newVotesCount,
      message: result.message,
    });
  } catch (error: any) {
    console.error("POST /api/rangoli/vote error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to record vote",
        details: error?.message,
      },
      { status: 500 }
    );
  }
}
