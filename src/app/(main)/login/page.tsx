"use client";

import Button from "@/shared/button";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginPage() {
    return (
        <div className="grid gap-4 items-center justify-items-center h-full">
            <div className="text-center">
                To save your data you need to register
            </div>

            <div className="grid gap-5 justify-items-center">
                <Link href="/register">
                    <Button appearance="primary">Register</Button>
                </Link>

                <Button appearance="normal" onClick={() => signIn("email")}>
                    Login
                </Button>
            </div>

            <Divider />

            <div className="grid gap-5 justify-items-center">
                <div>Login with</div>

                <div className="flex gap-6">
                    <button onClick={() => signIn("facebook")}>
                        <Image
                            src="/assets/facebook.svg"
                            alt="Facebook"
                            width={45}
                            height={45}
                        />
                    </button>
                    <button onClick={() => signIn("vk")}>
                        <Image
                            src="/assets/vk.svg"
                            alt="VK"
                            width={45}
                            height={45}
                        />
                    </button>
                    <button
                        onClick={() =>
                            signIn("google", {
                                callbackUrl: "http://localhost:3000",
                            })
                        }
                    >
                        <Image
                            src="/assets/google.svg"
                            alt="Google"
                            width={45}
                            height={45}
                        />
                    </button>
                </div>
            </div>

            <Divider />

            <Link href="/login">
                <Button appearance="subtle">
                    Continue without registration
                </Button>
            </Link>
        </div>
    );
}

function Divider() {
    return (
        <div className="flex w-full items-center gap-4 px-4 text-gray-dark">
            <div className="border-b-[1px] border-solid border-gray h-[1px] w-full" />
            <span>OR</span>
            <div className="border-b-[1px] border-solid border-gray h-[1px] w-full" />
        </div>
    );
}
