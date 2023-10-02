"use client";

import Loading from "@/shared/loading";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function PrivateClientPage({
    children,
}: {
    children: ReactNode;
}) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        getSession().then((session) => {
            if (!session) {
                router.push("/welcome");
            } else {
                setLoading(false);
            }
        });
    }, [router]);

    if (loading) {
        return <Loading />;
    }

    return <div>{children}</div>;
}
