import ApiCall, { ApiLayerExchangeData } from "./api";

export default async function GetExchangeRates(): Promise<
    {
        rates: ApiLayerExchangeData["quotes"];
    } & Omit<ApiLayerExchangeData, "quotes">
> {
    const { quotes, source, timestamp } = await ApiCall<ApiLayerExchangeData>(
        "live"
    );

    return { rates: quotes, source, timestamp };
}
