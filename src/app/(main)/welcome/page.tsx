import Button from "@/shared/button";
import Image from "next/image";
import Link from "next/link";

export default function WelcomePage() {
    return (
        <div className="grid gap-4 items-center justify-items-center h-full">
            <h1 className="text-3xl">Welcome</h1>
            <Image
                src="/assets/piggybank.svg"
                alt="Piggy bank"
                width={112}
                height={110}
            />
            <div className="text-center">
                This is an application to handle your own personal accounting
            </div>

            <Link href="/login">
                <Button>Start</Button>
            </Link>
        </div>
    );
}
