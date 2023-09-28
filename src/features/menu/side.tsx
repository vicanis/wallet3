import Link from "next/link";
import { getServerSession } from "next-auth";
import UserCard from "@/features/user/card";
import { authOptions } from "@/entities/auth/options";
import Image from "next/image";

export default async function SideMenu() {
    const session = await getServerSession(authOptions);

    return (
        <div className="absolute right-0 top-0 z-10 overflow-auto bg-[#0084C8] text-white max-h-[100%] max-w-[80%] min-w-[50%] rounded-l-xl">
            <div className="grid gap-6 p-4 items-start font-medium">
                <div className="grid gap-2">
                    <UserCard {...session?.user!} />
                    <div className="flex items-center gap-2">Остаток: ???</div>
                </div>

                <div className="w-full py-4 mb-1 border-[1px] text-center">
                    <Link href="/settings/share">Совместный доступ</Link>
                </div>

                <hr />

                <Link href="/settings/category">
                    <Item
                        icon="/assets/menu/side/category.svg"
                        text="Категории"
                    />
                </Link>

                <Link href="/settings/wallet">
                    <Item icon="/assets/menu/side/moneybag.svg" text="Счета" />
                </Link>

                <Link href="/history">
                    <Item
                        icon="/assets/menu/side/history.svg"
                        text="История операций"
                    />
                </Link>

                <Link href="/settings/payment">
                    <Item
                        icon="/assets/menu/side/bills.svg"
                        text="Регулярные платежи"
                    />
                </Link>

                <Link href="/settings/notification">
                    <Item
                        icon="/assets/menu/side/bell.svg"
                        text="Уведомления"
                    />
                </Link>

                <Link href="/settings/currency">
                    <Item icon="/assets/menu/side/currency.svg" text="Валюта" />
                </Link>

                <Link href="/settings/other">
                    <Item icon="/assets/menu/side/cog.svg" text="Настройки" />
                </Link>

                <hr />

                <Link href="/api/auth/signout">
                    <Item
                        icon="/assets/menu/side/logout.svg"
                        text="Выход из аккаунта"
                    />
                </Link>
            </div>
        </div>
    );
}

function Item({ icon, text }: { icon: string; text: string }) {
    return (
        <div className="flex items-center gap-3">
            <Image src={icon} alt="icon" width={24} height={24} />
            <div>{text}</div>
        </div>
    );
}
