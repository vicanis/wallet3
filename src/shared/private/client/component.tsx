"use client";

import { getSession } from "next-auth/react";
import { Fragment, ReactNode, useEffect, useState } from "react";

export default function PrivateClientComponent({
    children,
}: {
    children: ReactNode;
}) {
    const [ok, setOk] = useState(false);

    useEffect(() => {
        getSession().then((session) => {
            setOk(!!session);
        });
    }, []);

    if (!ok) {
        return null;
    }

    return <Fragment>{children}</Fragment>;
}
