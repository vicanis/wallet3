import Button from "@/shared/button";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="grid gap-4 items-center justify-items-center h-full">
            <div className="text-center">
                To store your data you need to register on the site
            </div>

            <Link href="/register">
                <Button>Register</Button>
            </Link>

            <Link href="/login">
                <Button appearance="subtle">Login</Button>
            </Link>

            <div>OR</div>

            <div>Login with</div>

            <div className="flex gap-6">
                <Image
                    src="/assets/facebook.svg"
                    alt="Facebook"
                    width={45}
                    height={45}
                />
                <Image src="/assets/vk.svg" alt="VK" width={45} height={45} />
                <Image
                    src="/assets/google.svg"
                    alt="Google"
                    width={45}
                    height={45}
                />
            </div>

            <Link href="/login">
                <Button appearance="subtle">Continue without account</Button>
            </Link>
        </div>
    );
}
