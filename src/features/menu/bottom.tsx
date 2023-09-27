"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BottomBar() {
    const pathname = usePathname();

    return (
        <div className="absolute bottom-0 left-0 flex items-center justify-around w-full py-3 bg-white">
            <Link href="/dashboard">
                <Icon
                    active={pathname === "/dashboard"}
                    image={
                        <Image
                            className="w-7"
                            src={"/assets/menu/bottom/home.svg"}
                            alt=""
                            width={32}
                            height={32}
                        />
                    }
                    color="#0A90D5"
                />
            </Link>
            <Link href="/expense">
                <Icon
                    active={pathname.startsWith("/expense")}
                    image={
                        <Image
                            className="w-6"
                            src={"/assets/menu/bottom/expense.svg"}
                            alt=""
                            width={32}
                            height={32}
                        />
                    }
                    color="#0A90D5"
                />
            </Link>
            <Link href="/income">
                <Icon
                    active={pathname.startsWith("/income")}
                    image={
                        <Image
                            className="w-6"
                            src={"/assets/menu/bottom/income.svg"}
                            alt=""
                            width={32}
                            height={32}
                        />
                    }
                    color="#0A90D5"
                />
            </Link>
            <Link href="/stats">
                <Icon
                    active={pathname.startsWith("/stats")}
                    image={
                        <Image
                            className="w-5"
                            src={"/assets/menu/bottom/stats.svg"}
                            alt=""
                            width={32}
                            height={32}
                        />
                    }
                    color="#0A90D5"
                />
            </Link>
            <Link href="/exchange">
                <Icon
                    active={pathname === "/exchange"}
                    image={
                        <Image
                            className="w-9"
                            src={"/assets/menu/bottom/exchange.svg"}
                            alt=""
                            width={32}
                            height={32}
                        />
                    }
                    color="#0A90D5"
                />
            </Link>
        </div>
    );
}

function Icon({
    active,
    image,
    color,
    onClick,
}: {
    active: boolean;
    image: ReactNode;
    color: string;
    onClick?: () => void;
}) {
    return (
        <div
            className={`w-full flex justify-center ${
                active ? "" : "opacity-40"
            }`}
            onClick={onClick}
        >
            {image}

            {active && (
                <div
                    className="border-b-2 absolute bottom-1.5 w-10"
                    style={{ borderColor: color }}
                >
                    &nbsp;
                </div>
            )}
        </div>
    );
}
