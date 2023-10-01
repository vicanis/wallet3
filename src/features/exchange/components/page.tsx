"use client";

import { useContext, useMemo, useState } from "react";
import Keyboard from "./keyboard";
import { ExchangeRates } from "@/entities/exchange/rates";
import { ExchangeRatesContext } from "../context/rates";
import { CurrencyListContext } from "@/features/currency/context/currencylist";
import { CurrencyList } from "@/entities/currency/list";
import { KeyboardContext, KeyboardContextType } from "../context/keyboard";
import useExchangeRate from "../hooks/useexchangerate";
import Converter from "./converter";

export default function Page({
    currencyList,
    rates,
}: {
    currencyList: CurrencyList;
    rates: ExchangeRates;
}) {
    const [value, setValue] = useState<number>(0);

    const keyboardContextData = useMemo<KeyboardContextType>(
        () => ({
            value,
            dispatch: (arg) => {
                switch (arg.type) {
                    case "digit":
                        setValue((value) => value * 10 + arg.digit);
                        break;

                    case "backspace":
                        setValue((value) => {
                            if (value === 0) {
                                return value;
                            }

                            if (value < 10) {
                                return 0;
                            }

                            return Math.trunc(value / 10);
                        });
                        break;

                    case "comma":
                        break;
                }
            },
        }),
        [value]
    );

    return (
        <CurrencyListContext.Provider value={currencyList}>
            <ExchangeRatesContext.Provider value={rates}>
                <KeyboardContext.Provider value={keyboardContextData}>
                    <Container />
                </KeyboardContext.Provider>
            </ExchangeRatesContext.Provider>
        </CurrencyListContext.Provider>
    );
}

export function Container() {
    const { value } = useContext(KeyboardContext);

    const [currencyFrom, setCurrencyFrom] = useState<string>("RUB");
    const [currencyTo, setCurrencyTo] = useState<string>("USD");

    const rate = useExchangeRate(currencyFrom, currencyTo);

    return (
        <div className="grid gap-4">
            <Converter
                value={value}
                from={currencyFrom}
                to={currencyTo}
                rate={rate}
                onChangeCurrency={({
                    from,
                    to,
                }: {
                    from: string;
                    to: string;
                }) => {
                    setCurrencyFrom(from);
                    setCurrencyTo(to);
                }}
            />
            <Keyboard />
        </div>
    );
}
