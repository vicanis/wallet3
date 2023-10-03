import {
    ApiLayerExchangeData,
    ExchangeApiCall,
} from "@/features/exchange/apilayer";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    context: { params: { from: string; to: string } }
) {
    const { from, to } = context.params;

    const { rates } = await ExchangeApiCall<ApiLayerExchangeData>("latest", {
        base: from,
        symbols: to,
    });

    return NextResponse.json({ rate: rates[to] });
}
