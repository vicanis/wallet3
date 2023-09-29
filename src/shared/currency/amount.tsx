import { CurrencyAmount } from "@/entities/currency/amount";
import Value from "./value";
import Currency from "./currency";

export default function Amount({ amount, currency }: CurrencyAmount) {
    if (["USD", "EUR"].includes(currency)) {
        return (
            <span>
                <Currency currency={currency} /> <Value amount={amount} />
            </span>
        );
    }

    return (
        <span>
            <Value amount={amount} /> <Currency currency={currency} />
        </span>
    );
}
