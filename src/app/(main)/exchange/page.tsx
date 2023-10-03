"use client";

import { useMemo, useState } from "react";
import {
    KeyboardContext,
    KeyboardContextType,
} from "@/features/exchange/context/keyboard";
import Converter from "@/features/exchange/components/converter";
import Keyboard from "@/features/exchange/components/keyboard";

export default function Page() {
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

    const [currencyFrom, setCurrencyFrom] = useState<string>("RUB");
    const [currencyTo, setCurrencyTo] = useState<string>("USD");

    return (
        <KeyboardContext.Provider value={keyboardContextData}>
            <div className="grid gap-4">
                <Converter
                    value={value}
                    from={currencyFrom}
                    to={currencyTo}
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
        </KeyboardContext.Provider>
    );
}
