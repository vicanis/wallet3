"use client";

import { Fragment } from "react";
import { usePathname, useRouter } from "next/navigation";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import SideMenuButton from "./side/button";

export default function TopBar() {
    const pathname = usePathname();
    const router = useRouter();

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

    if (pathname === "/") {
        return null;
    }

    return (
        <Fragment>
            <div className="absolute top-0 left-0 z-10 w-full h-12 flex items-center gap-2 p-3 bg-white">
                {pathname !== "/dashboard" && (
                    <button onClick={() => router.back()}>
                        <Icon path={mdiChevronLeft} size={1} />
                    </button>
                )}
                <span>{pageTitle}</span>
            </div>

            <SideMenuButton />
        </Fragment>
    );
}
