import { mdiAccountCircle } from "@mdi/js";
import Icon from "@mdi/react";
import { DefaultSession } from "next-auth";

export default function UserCard(
    info: Exclude<DefaultSession["user"], undefined>
) {
    return (
        <div className="flex gap-3 items-center p-2 border-[1px] border-solid rounded-md bg-white">
            {typeof info.image === "string" && (
                <div className="rounded-[50%] overflow-hidden">
                    <ImageProxy
                        src={info.image}
                        alt="avatar"
                        width={48}
                        height={48}
                    />
                </div>
            )}
            <div>
                <div className="text-black">{info.name}</div>
                <div className="text-gray-500">{info.email}</div>
            </div>
        </div>
    );
}

function ImageProxy(props: {
    src: string;
    alt: string;
    height: number;
    width: number;
}) {
    if (props.src === "") {
        // eslint-disable-next-line
        return <Icon path={mdiAccountCircle} size={2} />;
    }

    // eslint-disable-next-line
    return <img {...props} />;
}
