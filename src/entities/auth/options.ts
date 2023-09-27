// import Email from "next-auth/providers/email";
import Facebook from "next-auth/providers/facebook";
import VK from "next-auth/providers/vk";
import Google from "next-auth/providers/google";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
    providers: [
        // Email({}),
        Facebook({
            clientId: process.env.FACEBOOK_ID!,
            clientSecret: process.env.FACEBOOK_SECRET!,
        }),
        VK({
            clientId: process.env.VK_ID!,
            clientSecret: process.env.VK_SECRET!,
        }),
        Google({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
};
