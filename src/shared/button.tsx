import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
    children?: ReactNode;
    appearance?: "primary" | "normal" | "subtle";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: ButtonProps) {
    const { appearance, disabled } = rest;

    return (
        <button className={buildStyle({ appearance, disabled })} {...rest}>
            {children}
        </button>
    );
}

function buildStyle({ appearance = "normal", disabled }: ButtonProps): string {
    const list: string[] = ["py-4", "px-10"];

    if (appearance === "primary" || appearance === "normal") {
        list.push("border-[1px]", "border-solid", "border-gray", "rounded-2xl");

        if (appearance === "primary") {
            list.push("font-bold", "bg-blue", "text-white");
        }
    }

    if (disabled) {
        list.push("opacity-50");
    }

    return list.join(" ");
}
