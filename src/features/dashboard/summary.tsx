import Amount from "@/shared/currency/amount";
import { DashboardBalance } from "./dashboard";
import Image from "next/image";
import { ReactNode } from "react";
import { CurrencyAmount } from "@/entities/currency/amount";

export default function Summary({ balance }: { balance: DashboardBalance }) {
    return (
        <div className="text-center text-white rounded-b-2xl py-4 grid gap-4 bg-[#0084C8]">
            <div className="grid grid-cols-2 px-4">
                <BalanceItem
                    title="Total income"
                    data={{
                        amount: balance.income,
                        currency: balance.currency,
                    }}
                    icon={
                        <Image
                            src="/assets/arrow_up.svg"
                            alt="up"
                            width={35}
                            height={35}
                        />
                    }
                />

                <BalanceItem
                    title="Total expense"
                    data={{
                        amount: balance.expense,
                        currency: balance.currency,
                    }}
                    icon={
                        <Image
                            src="/assets/arrow_down.svg"
                            alt="up"
                            width={35}
                            height={35}
                        />
                    }
                />
            </div>
        </div>
    );
}

function BalanceItem({
    title,
    icon,
    data,
}: {
    title: string;
    icon: ReactNode;
    data: CurrencyAmount;
}) {
    return (
        <div className="flex items-center gap-x-2 text-white">
            <div className="w-max">{icon}</div>
            <div className="text-sm text-left">
                <div>{title}</div>
                <Amount {...data} />
            </div>
        </div>
    );
}
