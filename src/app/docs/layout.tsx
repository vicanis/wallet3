export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="m-5 max-w-lg mx-auto">{children}</div>;
}
