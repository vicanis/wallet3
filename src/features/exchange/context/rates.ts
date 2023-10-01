import { ExchangeRates } from "@/entities/exchange/rates";
import { createContext } from "react";

export const ExchangeRatesContext = createContext<ExchangeRates>({});
