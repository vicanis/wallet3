import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Wallet3",
    description: "Personal accounting app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
