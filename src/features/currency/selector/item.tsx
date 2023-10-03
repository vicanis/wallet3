import Amount from "@/shared/currency/amount";
import Flag from "../flag";

export default function CurrencyItem({
    currency,
    value,
    title,
    picker,
    mini,
}: {
    currency: string;
    value?: number;
    title: string;
    picker?: boolean;
    mini?: boolean;
}) {
    if (mini && !picker) {
        return (
            <div className="flex items-center gap-2">
                <Flag currency={currency} />
                <span>{currency}</span>
            </div>
        );
    }

    return (
        <div
            className={`${
                picker ? "px-2" : "px-6"
            } h-10 flex gap-4 items-center justify-between`}
        >
            <Flag currency={currency} />
            <span className="flex-grow">{title}</span>
            {typeof value !== "undefined" &&
                (picker ? (
                    <span className="text-sm">{currency}</span>
                ) : (
                    <Amount currency={currency} amount={value} />
                ))}
        </div>
    );
}
