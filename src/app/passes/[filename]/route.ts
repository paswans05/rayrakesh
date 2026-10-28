import { NextRequest } from "next/server";
import { GET as handlePass } from "@/app/api/marathon-pass/[id]/route";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ filename: string }> }
) {
  const { filename } = await context.params;
  return handlePass(req, {
    params: Promise.resolve({ id: filename }),
  });
}

