import BottomBar from "@/features/bar/bottom";
import TopBar from "@/features/bar/top";
import PrivateServerComponent from "@/shared/private/server/component";

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
                    {children}
                </div>
                <PrivateServerComponent>
                    <TopBar />
                    <BottomBar />
                </PrivateServerComponent>
            </div>
        </div>
    );
}
