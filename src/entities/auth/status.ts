import { Session } from "next-auth";

export type AuthStatus = {
    authenticated: boolean;
    session: Session;
};
