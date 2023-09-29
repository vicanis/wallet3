export default function Value({ amount }: { amount: number }) {
    return (
        <span>
            {amount.toLocaleString("en-US", {
                useGrouping: true,
            })}
        </span>
    );
}
