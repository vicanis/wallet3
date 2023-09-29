import Link from "next/link";
import UserCard from "@/features/user/card";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Overlay from "@/shared/overlay";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import Amount from "@/shared/currency/amount";

export default function SideMenu({ onClick }: { onClick: () => void }) {
    const { data } = useSession();

    return (
        <Overlay centered={false} onClick={onClick}>
            <div
                className="absolute right-0 z-20 overflow-auto bg-[#0084C8] text-white max-h-[100%] w-[80%] rounded-l-xl"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex items-center justify-end p-3">
                    <button
                        onClick={onClick}
                        className="flex items-center gap-1"
                    >
                        <Icon path={mdiClose} size={1} />
                        <span>Hide</span>
                    </button>
                </div>

                <div className="grid gap-5 p-4 pt-0 items-start font-medium">
                    <div className="grid gap-2">
                        <UserCard user={data?.user!} />
                        <div className="flex items-center gap-2">
                            Balance: <Amount amount={5000} currency="USD" />
                        </div>

                        <div className="w-full py-3 border-[1px] text-center">
                            <Link href="/settings/share">Shared access</Link>
                        </div>
                    </div>

                    <hr />

                    <Link href="/settings/category">
                        <Item
                            icon="/assets/menu/side/category.svg"
                            text="Categories"
                        />
                    </Link>

                    <Link href="/settings/wallet">
                        <Item
                            icon="/assets/menu/side/moneybag.svg"
                            text="Wallets"
                        />
                    </Link>

                    <Link href="/history">
                        <Item
                            icon="/assets/menu/side/history.svg"
                            text="Operation history"
                        />
                    </Link>

                    <Link href="/settings/payment">
                        <Item icon="/assets/menu/side/bills.svg" text="Bills" />
                    </Link>

                    <Link href="/settings/notification">
                        <Item
                            icon="/assets/menu/side/bell.svg"
                            text="Notifications"
                        />
                    </Link>

                    <Link href="/settings/currency">
                        <Item
                            icon="/assets/menu/side/currency.svg"
                            text="Currency"
                        />
                    </Link>

                    <Link href="/settings/other">
                        <Item
                            icon="/assets/menu/side/cog.svg"
                            text="Settings"
                        />
                    </Link>

                    <hr />

                    <Link href="/api/auth/signout">
                        <Item
                            icon="/assets/menu/side/logout.svg"
                            text="Sign out"
                        />
                    </Link>
                </div>
            </div>
        </Overlay>
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
