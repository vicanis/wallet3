"use client";

import { CurrencyList } from "@/entities/currency/list";
import { createContext } from "react";

export const CurrencyListContext = createContext<CurrencyList>({});
