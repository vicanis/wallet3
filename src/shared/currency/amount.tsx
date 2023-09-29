import { CurrencyAmount } from "@/entities/currency/amount";
import Value from "./value";
import Currency from "./currency";
import { HTMLAttributes } from "react";

export default function Amount({
    amount,
    currency,
    ...rest
}: CurrencyAmount & HTMLAttributes<HTMLSpanElement>) {
    if (["USD", "EUR"].includes(currency)) {
        return (
            <span {...rest}>
                <Currency currency={currency} /> <Value amount={amount} />
            </span>
        );
    }

    return (
        <span {...rest}>
            <Value amount={amount} /> <Currency currency={currency} />
        </span>
    );
}
