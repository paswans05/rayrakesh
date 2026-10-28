import { NextResponse } from "next/server";
import { getTursoClient } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const start = Date.now();
  try {
    const rawUrl = (process.env.TURSO_DATABASE_URL || "").trim();
    if (!rawUrl) {
      return NextResponse.json(
        {
          connected: false,
          status: "Not Configured",
          database: "Turso Cloud libSQL",
          error: "TURSO_DATABASE_URL is missing in environment.",
        },
        { status: 503 }
      );
    }

    // Extract hostname for clean display without leaking full token
    let host = "turso.io";
    try {
      const parsed = new URL(rawUrl.replace(/^libsql:\/\//, "https://"));
      host = parsed.hostname;
    } catch {
      host = rawUrl.split("/")[2] || "turso.io";
    }

    const client = getTursoClient();
    await client.execute("SELECT 1 as ping;");
    const latencyMs = Date.now() - start;

    return NextResponse.json({
      connected: true,
      status: "Connected & Online",
      database: "Turso Cloud (libSQL)",
      host,
      latencyMs,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const latencyMs = Date.now() - start;
    const message = error instanceof Error ? error.message : "Failed to connect to database.";
    console.error("[/api/admin/db-status] Ping failed:", message);

    return NextResponse.json(
      {
        connected: false,
        status: "Connection Failed",
        database: "Turso Cloud (libSQL)",
        error: message,
        latencyMs,
      },
      { status: 503 }
    );
  }
}
