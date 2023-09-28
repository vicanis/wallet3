import Overlay from "@/shared/overlay";
import { mdiLoading } from "@mdi/js";
import Icon from "@mdi/react";

export default function Loading({ text = "Loading ..." }: { text?: string }) {
    return (
        <Overlay centered>
            <div className="grid justify-center gap-3 px-8 py-4 rounded-md border-[1px] border-solid border-gray-200">
                <div className="w-14 h-14 animate-spin mx-auto">
                    <Icon path={mdiLoading} size={2.3} />
                </div>
                <div>{text}</div>
            </div>
        </Overlay>
    );
}
