"use client";

import BottomBar from "@/features/bar/bottom";
import TopBar from "@/features/bar/top";
import PrivateClientComponent from "@/shared/private/client/component";
import PrivateClientPage from "@/shared/private/client/page";
import PrivateServerComponent from "@/shared/private/server/component";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <div className="w-[360px] h-screen max-h-[800px] border-[1em] border-solid border-[#d8eaff] rounded-2xl relative">
                <div
                    className="my-12 h-full box-border overflow-auto"
                    style={{
                        maxHeight: "calc(100% - 6rem)",
                    }}
                >
                    <Provider store={store}>{children}</Provider>
                </div>
                <PrivateClientComponent>
                    <TopBar />
                    <BottomBar />
                </PrivateClientComponent>
            </div>
        </div>
    );
}
