import Currency from "@/shared/currency/currency";

export default function CurrencySlider({
    list,
    selected,
}: {
    list: string[];
    selected: string;
}) {
    return (
        <span className="flex gap-3 pt-2 pb-3 justify-center">
            {list.map((type) => (
                <span
                    key={type}
                    className={selected !== type ? "opacity-50" : ""}
                >
                    <Currency currency={type} />
                </span>
            ))}
        </span>
    );
}
