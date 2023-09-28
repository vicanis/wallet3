import { Fragment, ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/entities/auth/options";

export default async function PrivateServerPage({
    children,
}: {
    children: ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
        return null;
    }

    return <Fragment>{children}</Fragment>;
}
