import { authOptions } from "@/entities/auth/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const ok = await checkIfAuthorized();
    redirect(ok ? "/dashboard" : "/welcome");
    return null;
}

async function checkIfAuthorized() {
    const session = await getServerSession(authOptions);
    return !!session;
}
