import { useContext } from "react";
import { ExchangeRatesContext } from "../context/rates";

export default function useExchangeRate(from: string, to: string) {
    const rates = useContext(ExchangeRatesContext);
    return rates[from][to];
}
