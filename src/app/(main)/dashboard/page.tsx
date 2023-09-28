"use client";

import SideMenuButton from "@/features/menu/side/button";
import PrivateClientPage from "@/shared/private/client/page";

export default function DashboardPage() {
    return (
        <PrivateClientPage>
            <div className="m-4">
                <div>Dashboard contents</div>
                <SideMenuButton />
            </div>
        </PrivateClientPage>
    );
}
