import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import SideMenu from "./menu";

export default function SideMenuButton() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(true)}>
                <Icon path={mdiMenu} size={1.5} />
            </button>

            {isVisible && <SideMenu onClick={() => setIsVisible(false)} />}
        </div>
    );
}
