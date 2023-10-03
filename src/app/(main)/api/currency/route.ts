import getCurrencyList from "@/features/currency/api/getcurrencylist";
import { NextResponse } from "next/server";

export async function GET() {
    const currencyList = await getCurrencyList();
    return NextResponse.json({ list: currencyList });
}
