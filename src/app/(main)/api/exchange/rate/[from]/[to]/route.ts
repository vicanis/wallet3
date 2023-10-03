import { GetExchangeRate } from "@/features/exchange/api/getrates";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    context: { params: { from: string; to: string } }
) {
    const { from, to } = context.params;

    const rate = await GetExchangeRate({ src: from, dst: to });
    return NextResponse.json({ rate });
}
