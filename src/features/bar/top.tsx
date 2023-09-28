"use client";

import { usePathname } from "next/navigation";

export default function TopBar() {
    const pathname = usePathname();

    const titles: {
        regex: RegExp;
        title: string;
    }[] = [
        {
            regex: /\/dashboard/,
            title: "Dashboard",
        },
        {
            regex: /\/expense\/?.*/,
            title: "Expense operation",
        },
        {
            regex: /\/income\/?.*/,
            title: "Income operation",
        },
        {
            regex: /\/stats\/?.*/,
            title: "Statistics",
        },
        {
            regex: /\/exchange/,
            title: "Currency exchange",
        },
    ];

    let pageTitle = pathname;

    for (const { regex, title } of titles) {
        if (regex.test(pathname)) {
            pageTitle = title;
            break;
        }
    }

    return (
        <div className="absolute top-0 left-0 z-10 w-full h-12 flex items-center justify-between p-3 bg-white">
            <span>{pageTitle}</span>
        </div>
    );
}
