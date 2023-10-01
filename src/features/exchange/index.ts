import getCurrencyList from "../currency/api/getcurrencylist";
import { GetExchangeRates } from "./api/getrates";

export async function getExchangeData() {
    const rates = await GetExchangeRates();
    const currencyList = await getCurrencyList();

    return { rates, currencyList };
}

export { default } from "./components/page";
