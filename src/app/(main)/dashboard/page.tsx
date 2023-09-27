import { authOptions } from "@/entities/auth/options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
        return null;
    }

    return (
        <div>
            <div>Dashboard page</div>

            <div>You are logged in</div>

            <Link href="/api/auth/signout">Logout</Link>
        </div>
    );
}
