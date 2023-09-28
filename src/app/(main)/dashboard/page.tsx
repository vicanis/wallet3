import { authOptions } from "@/entities/auth/options";
import UserCard from "@/features/user/card";
import Button from "@/shared/button";
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
        <div className="m-4">
            <div>Dashboard contents</div>
        </div>
    );
}
