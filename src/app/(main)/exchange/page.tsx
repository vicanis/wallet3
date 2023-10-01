import ExchangePage, { getExchangeData } from "@/features/exchange";

export default async function Exchange() {
    const data = await getExchangeData();
    return <ExchangePage {...data} />;
}
