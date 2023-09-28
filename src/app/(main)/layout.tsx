import BottomBar from "@/features/menu/bottom";
import PrivateServerComponent from "@/shared/private/server/component";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <div className="w-[360px] h-screen max-h-[800px] border-[1em] border-solid border-[#d8eaff] rounded-2xl relative">
                {children}
                <PrivateServerComponent>
                    <BottomBar />
                </PrivateServerComponent>
            </div>
        </div>
    );
}
