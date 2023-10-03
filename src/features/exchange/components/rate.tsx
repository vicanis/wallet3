import { useGetRateQuery } from "@/store/service/exchange";
import RoundValue from "./rounded";

export default function Rate({ from, to }: { from: string; to: string }) {
    const { data, isLoading, isError } = useGetRateQuery({ from, to });

    if (isError) {
        return <span>Exchange rate fetch error</span>;
    }

    return (
        <span>
            1 {from} ={" "}
            <span>
                {!isLoading && typeof data !== "undefined" ? (
                    <span>{RoundValue({ value: data.rate })}</span>
                ) : (
                    <span>?</span>
                )}{" "}
                {to}
            </span>
        </span>
    );
}
