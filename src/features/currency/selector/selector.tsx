import { useMemo } from "react";
import { ObjectId } from "mongodb";
import CurrencyItem from "./item";
import BlurredSelector from "@/shared/blurredselector";
import { useGetCurrencyListQuery } from "@/store/service/currency";

export default function CurrencySelector({
    currency,
    value,
    onChange,
    mini,
}: {
    currency?: string;
    value?: number;
    onChange: (code: string) => void;
    mini?: boolean;
}) {
    const {
        data: currencyList,
        isLoading,
        isError,
    } = useGetCurrencyListQuery({});

    const currencies = useMemo<
        {
            _id: ObjectId;
            currency: string;
            title: string;
            value?: number;
        }[]
    >(() => {
        if (typeof currencyList === "undefined") {
            return [];
        }

        const items: {
            _id: ObjectId;
            currency: string;
            title: string;
            value?: number;
        }[] = [];

        for (const currency of Object.keys(currencyList.list)) {
            items.push({
                _id: currency as unknown as ObjectId,
                currency,
                title: currencyList.list[currency],
                value,
            });
        }

        return items;
    }, [value, currencyList]);

    if (isError) {
        return null;
    }

    if (isLoading) {
        return (
            <div className="h-10 flex items-center px-4">
                Loading currency list ...
            </div>
        );
    }

    return (
        <BlurredSelector
            header="Choose a currency"
            items={currencies}
            selected={currency as unknown as ObjectId}
            onChange={(code) => onChange(code as unknown as string)}
            renderer={({ item, picker }) => (
                <CurrencyItem {...item} {...{ picker, mini }} />
            )}
        />
    );
}
