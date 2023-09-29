"use client";

import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import SideMenu from "./menu";
import { SessionProvider } from "next-auth/react";

export default function SideMenuButton() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <SessionProvider>
            <button
                onClick={() => setIsVisible(true)}
                className="absolute top-1 right-2 z-20"
            >
                <Icon path={mdiMenu} size={1.5} />
            </button>

            {isVisible && <SideMenu onClick={() => setIsVisible(false)} />}
        </SessionProvider>
    );
}
