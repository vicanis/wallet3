import { useEffect, useMemo, useReducer } from "react";
import { DashboardItem, BalanceAction, BalanceActionKind } from "./dashboard";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import Currency from "@/shared/currency/currency";
import Amount from "@/shared/currency/amount";
import CurrencySlider from "./slider";

export default function Balance({
    items,
    onChangeIndex,
}: {
    items: DashboardItem[];
    onChangeIndex: (index: number) => void;
}) {
    const currencyList = useMemo(() => {
        return items.map((item) => item.currency);
    }, [items]);

    const [dashboard, dispatch] = useReducer(
        (
            state: {
                current: number;
                previous: number;
                next: number;
            },
            action: BalanceAction
        ) => {
            let current: number = -1;

            for (let i = 0; i < items.length; i++) {
                if (items[i].currency === items[state.current].currency) {
                    current = i;
                    break;
                }
            }

            if (current === -1) {
                return state;
            }

            switch (action.type) {
                case BalanceActionKind.PREV:
                    if (current === 0) {
                        current = items.length - 1;
                    } else {
                        current--;
                    }
                    break;

                case BalanceActionKind.NEXT:
                    if (current === items.length - 1) {
                        current = 0;
                    } else {
                        current++;
                    }
                    break;
            }

            const previous = current === 0 ? items.length - 1 : current - 1;
            const next = current === items.length - 1 ? 0 : current + 1;

            return {
                current,
                previous,
                next,
            };
        },
        {
            current: 0,
            next: Math.min(0, items.length - 1),
            previous: items.length - 1,
        }
    );

    useEffect(() => {
        onChangeIndex(dashboard.current);
    }, [dashboard.current]);

    if (!items.length) {
        return null;
    }

    const current = items[dashboard.current];

    return (
        <div
            className="text-center text-white"
            style={{ backgroundColor: "#0084C8" }}
        >
            <CurrencySlider list={currencyList} selected={current.currency} />

            <div>
                <div className="flex items-center justify-between px-2">
                    <div
                        className="flex gap-1 items-center justify-start w-16"
                        onClick={() => {
                            dispatch({ type: BalanceActionKind.PREV });
                        }}
                    >
                        <Icon path={mdiChevronLeft} size={1} />
                        <Currency
                            currency={items[dashboard.previous].currency}
                            className="opacity-50"
                        />
                    </div>

                    <Amount
                        amount={current.value}
                        currency={current.currency}
                        className="text-xl font-medium leading-4"
                    />

                    <div
                        className="flex gap-1 items-center justify-end w-16"
                        onClick={() => {
                            dispatch({ type: BalanceActionKind.NEXT });
                        }}
                    >
                        <Currency
                            currency={items[dashboard.next].currency}
                            className="opacity-50"
                        />
                        <Icon path={mdiChevronRight} size={1} />
                    </div>
                </div>

                <div className="text-xs text-white mt-2">Current balance</div>
            </div>
        </div>
    );
}
