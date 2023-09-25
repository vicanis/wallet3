import { InputHTMLAttributes, ReactNode } from "react";

type RadioProps = {
    children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Radio({
    children,
    checked,
    disabled,
    ...rest
}: RadioProps) {
    return (
        <div>
            <div className={buildStyle({ disabled })} {...rest}>
                {checked && (
                    <div className="w-5 h-5 bg-blue-dark rounded-[50%]" />
                )}
            </div>
            <div>{children}</div>
        </div>
    );
}

function buildStyle({ disabled }: RadioProps) {
    const list: string[] = [
        "w-10",
        "h-10",
        "rounded-[50%]",
        "bg-gray-main",
        "flex",
        "items-center",
        "justify-center",
    ];

    if (disabled) {
        list.push("opacity-50");
    }

    return list.join(" ");
}
