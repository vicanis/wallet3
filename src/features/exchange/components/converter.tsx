import Icon from "@mdi/react";
import { mdiSwapVertical } from "@mdi/js";
import Rate from "./rate";
import RoundValue from "./rounded";
import { useGetRateQuery } from "@/store/service/exchange";
import CurrencySelector from "@/features/currency/selector/selector";

export default function Converter({
    value,
    from,
    to,
    onChangeCurrency,
}: {
    value: number;
    from: string;
    to: string;
    onChangeCurrency: (arg: { from: string; to: string }) => void;
}) {
    const { data, isError } = useGetRateQuery({ from, to });

    if (isError) {
        return <div>Exchange rate fetching failed</div>;
    }

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
                    <Rate from={from} to={to} />
                )}
            </div>

            <CurrencySelector
                currency={to}
                value={
                    typeof data !== "undefined"
                        ? RoundValue({
                              value: data.rate * value,
                              strict: true,
                          })
                        : undefined
                }
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
