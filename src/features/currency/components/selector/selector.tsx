import { useContext, useMemo } from "react";
import { ObjectId } from "mongodb";
import CurrencyItem from "./item";
import { CurrencyListContext } from "../../context/currencylist";
import BlurredSelector from "@/shared/blurredselector";

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
    const currencyList = useContext(CurrencyListContext);

    const currencies = useMemo<
        {
            _id: ObjectId;
            currency: string;
            title: string;
            value?: number;
        }[]
    >(() => {
        const items: {
            _id: ObjectId;
            currency: string;
            title: string;
            value?: number;
        }[] = [];

        for (const currency of Object.keys(currencyList)) {
            items.push({
                _id: currency as unknown as ObjectId,
                currency,
                title: currencyList[currency],
                value,
            });
        }

        return items;
    }, [currency, value, currencyList]);

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
