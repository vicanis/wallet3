import { ReactNode } from "react";

export default function Overlay({ children }: { children: ReactNode }) {
    return (
        <div className="absolute left-0 top-0 w-full h-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
            <div className="relative bg-white">{children}</div>
        </div>
    );
}
