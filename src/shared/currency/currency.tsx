export default function Currency({ currency }: { currency: string }) {
    if (currency === "USD") {
        return <span>{"$"}</span>;
    }

    if (currency === "EUR") {
        return <span>{"€"}</span>;
    }

    return <span>{currency}</span>;
}
