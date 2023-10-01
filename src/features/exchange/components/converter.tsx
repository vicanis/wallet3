import Icon from "@mdi/react";
import { mdiSwapVertical } from "@mdi/js";
import Rate from "./rate";
import { CurrencySelector } from "@/features/currency";
import RoundValue from "./rounded";

export default function Converter({
    value,
    from,
    to,
    rate,
    onChangeCurrency,
}: {
    value: number;
    from: string;
    to: string;
    rate: number;
    onChangeCurrency: (arg: { from: string; to: string }) => void;
}) {
    return (
        <div
            className="rounded-xl py-4 grid gap-4 text-white"
            style={{
                backgroundColor: "#0A90D5",
            }}
        >
            <CurrencySelector
                currency={from}
                value={value}
                onChange={(code) => {
                    onChangeCurrency({
                        from: code,
                        to,
                    });
                }}
            />

            <div className="text-center relative">
                <div
                    className="absolute left-10"
                    onClick={() => {
                        onChangeCurrency({ from: to, to: from });
                    }}
                >
                    <Icon path={mdiSwapVertical} size={1} />
                </div>
                {typeof from !== "undefined" && typeof to !== "undefined" && (
                    <Rate from={from} to={to} rate={rate} />
                )}
            </div>

            <CurrencySelector
                currency={to}
                value={RoundValue({
                    value: rate * value,
                    strict: true,
                })}
                onChange={(code) => {
                    onChangeCurrency({
                        from,
                        to: code,
                    });
                }}
            />
        </div>
    );
}
