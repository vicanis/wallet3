"use client";

import Loading from "@/features/loading";
import { useEffect } from "react";
import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthSignoutPage() {
    const router = useRouter();

    useEffect(() => {
        (async () => {
            try {
                const session = await getSession();

                if (session !== null) {
                    await signOut();
                }

                router.push("/");
            } catch (e) {
                const url = new URL("/auth/error");
                url.searchParams.set("error", (e as Error).message);
                router.push(url.toString());
            }
        })();
    });

    return <Loading text="Logging out ..." />;
}
