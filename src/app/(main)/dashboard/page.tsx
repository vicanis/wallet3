"use client";

import Dashboard from "@/features/dashboard/dashboard";
import PrivateClientPage from "@/shared/private/client/page";

export default function DashboardPage() {
    return (
        <PrivateClientPage>
            <Dashboard />
        </PrivateClientPage>
    );
}
