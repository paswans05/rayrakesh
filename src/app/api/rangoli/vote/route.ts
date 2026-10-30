import { NextRequest, NextResponse } from "next/server";
import { voteRangoliEntry } from "@/lib/db";

function getClientIp(req: NextRequest): string {
  // Grab clean IP address (first address in x-forwarded-for if behind proxy/Cloudflare/Vercel)
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const firstIp = forwarded.split(",")[0].trim();
    if (firstIp) return firstIp;
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  const cfConnectingIp = req.headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();
  return "unknown-ip";
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

    // Strict IP address extraction (IP-wise check)
    const clientIp = getClientIp(req);
    const result = await voteRangoliEntry(entry_id, clientIp);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          alreadyVoted: result.alreadyVoted ?? true,
          votedEntryId: result.votedEntryId,
          message: result.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      entry_id,
      votedEntryId: entry_id,
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
