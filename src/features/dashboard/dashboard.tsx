import { useState } from "react";
import Balance from "./balance";
import Summary from "./summary";

export default function Dashboard() {
    const [index, setIndex] = useState(0);

    return (
        <div>
            <Balance items={currentBalance} onChangeIndex={setIndex} />
            <Summary balance={currentBalance[index]} />
        </div>
    );
}

export enum BalanceActionKind {
    PREV = "prev",
    NEXT = "next",
}

export interface BalanceAction {
    type: BalanceActionKind;
}

export interface DashboardItem {
    currency: string;
    value: number;
}

export interface DashboardBalance {
    currency: string;
    expense: number;
    income: number;
}

const currentBalance: (DashboardItem & DashboardBalance)[] = [
    {
        currency: "RUB",
        value: 100000,
        expense: 20000,
        income: 80000,
    },
    {
        currency: "USD",
        value: 8500,
        expense: 1500,
        income: 10000,
    },
    {
        currency: "KZT",
        value: 800000,
        expense: 400000,
        income: 1200000,
    },
];
