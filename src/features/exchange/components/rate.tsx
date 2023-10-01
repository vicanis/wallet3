import RoundValue from "./rounded";

export default function Rate({
    from,
    to,
    rate,
}: {
    from: string;
    to: string;
    rate: number;
}) {
    return (
        <span>
            1 {from} = <span>{RoundValue({ value: rate })}</span> {to}
        </span>
    );
}
