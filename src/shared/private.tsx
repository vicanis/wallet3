import { getServerSession } from "next-auth";
import { Fragment, ReactNode } from "react";

export default async function Private({ children }: { children: ReactNode }) {
    const session = await getServerSession();

    if (!session) {
        return null;
    }

    return <Fragment>{children}</Fragment>;
}
