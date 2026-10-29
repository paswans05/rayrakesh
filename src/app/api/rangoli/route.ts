import { NextRequest, NextResponse } from "next/server";
import { getRangoliEntries, createRangoliEntry, getVotedEntryIds } from "@/lib/db";

function getVoterId(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip") || "unknown-ip";
  const userAgent = (req.headers.get("user-agent") || "").slice(0, 50);
  return `${ip}::${userAgent}`;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sort = (searchParams.get("sort") === "latest" ? "latest" : "votes") as "votes" | "latest";
    const entries = await getRangoliEntries(sort);
    const voterId = getVoterId(req);
    const userVotedIds = await getVotedEntryIds(voterId);

    return NextResponse.json({
      success: true,
      entries,
      userVotedIds,
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
    const { full_name, email, phone, address, title, description, image_url } = body;

    if (!full_name || !phone || !address || !title || !image_url) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: Name, Phone, Address, Title, and Rangoli Photo are required.",
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
