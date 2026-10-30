import { NextRequest, NextResponse } from "next/server";
import { getRangoliEntries, createRangoliEntry, getVotedEntryIds } from "@/lib/db";

function getClientIp(req: NextRequest): string {
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

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sort = (searchParams.get("sort") === "latest" ? "latest" : "votes") as "votes" | "latest";
    const entries = await getRangoliEntries(sort);
    const clientIp = getClientIp(req);
    const userVotedIds = await getVotedEntryIds(clientIp);

    return NextResponse.json({
      success: true,
      entries,
      userVotedIds,
      userVotedEntryId: userVotedIds.length > 0 ? userVotedIds[0] : null,
      hasVoted: userVotedIds.length > 0,
      clientIp,
    });
  } catch (error: any) {
    console.error("GET /api/rangoli error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch rangoli entries",
        details: error?.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { full_name, email, phone, gender, address, title, description, image_url } = body;

    if (!full_name || !phone || !address || !title || !image_url) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: Name, Phone, Address, Title, and Rangoli Photo are required.",
        },
        { status: 400 }
      );
    }

    // Female-only competition: reject non-female submissions
    const cleanGender = (gender || "").toString().trim().toLowerCase();
    if (cleanGender !== "female") {
      return NextResponse.json(
        {
          success: false,
          error: "This Diwali Rangoli competition is exclusively for female participants only. (यो प्रतियोगिता महिलाहरूका लागि मात्र हो।)",
        },
        { status: 400 }
      );
    }

    const created = await createRangoliEntry({
      full_name,
      email,
      phone,
      address,
      title,
      description,
      image_url,
    });

    return NextResponse.json({
      success: true,
      entry: created,
      message: "Rangoli entry submitted successfully for Diwali Festival!",
    });
  } catch (error: any) {
    console.error("POST /api/rangoli error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit rangoli entry. Please try again.",
        details: error?.message,
      },
      { status: 500 }
    );
  }
}
