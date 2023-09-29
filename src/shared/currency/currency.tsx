import { HTMLAttributes } from "react";

export default function Currency({
    currency,
    ...rest
}: { currency: string } & HTMLAttributes<HTMLSpanElement>) {
    if (currency === "USD") {
        return <span {...rest}>{"$"}</span>;
    }

    if (currency === "EUR") {
        return <span {...rest}>{"€"}</span>;
    }

    return <span {...rest}>{currency}</span>;
}
