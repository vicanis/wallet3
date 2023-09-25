import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
    children?: ReactNode;
    appearance?: "normal" | "subtle";
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

    if (appearance === "normal") {
        list.push(
            "border-[1px]",
            "border-solid",
            "rounded-2xl",
            "bg-blue-main",
            "text-white-main",
            "font-bold"
        );
    }

    if (disabled) {
        list.push("opacity-50");
    }

    return list.join(" ");
}
