import {
    ApiLayerCurrencyList,
    CurrencyApiCall,
} from "@/features/exchange/apilayer";
import { NextResponse } from "next/server";

export async function GET() {
    const { currencies: list } = await CurrencyApiCall<ApiLayerCurrencyList>(
        "list"
    );
    return NextResponse.json({ list });
}
