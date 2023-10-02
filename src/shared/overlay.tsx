import { ReactNode } from "react";

export default function Overlay({
    centered = true,
    onClick,
    children,
}: {
    centered?: boolean;
    onClick?: () => void;
    children: ReactNode;
}) {
    return (
        <div
            className={`absolute left-0 top-0 z-50 w-full h-full bg-white/50 backdrop-blur-sm flex ${
                centered ? "items-center justify-center" : ""
            }`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
