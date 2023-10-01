import { ReactNode, useContext } from "react";
import { mdiBackspace } from "@mdi/js";
import Icon from "@mdi/react";
import { KeyboardContext } from "../context/keyboard";

export default function Keyboard() {
    return (
        <div className="grid grid-cols-3 px-4">
            <Button
                char="7"
                borders={{
                    right: true,
                    bottom: true,
                }}
            />
            <Button
                char="8"
                borders={{
                    right: true,
                    bottom: true,
                }}
            />
            <Button
                char="9"
                borders={{
                    bottom: true,
                }}
            />
            <Button
                char="4"
                borders={{
                    right: true,
                    bottom: true,
                }}
            />
            <Button
                char="5"
                borders={{
                    right: true,
                    bottom: true,
                }}
            />
            <Button
                char="6"
                borders={{
                    bottom: true,
                }}
            />
            <Button
                char="1"
                borders={{
                    right: true,
                    bottom: true,
                }}
            />
            <Button
                char="2"
                borders={{
                    right: true,
                    bottom: true,
                }}
            />
            <Button
                char="3"
                borders={{
                    bottom: true,
                }}
            />
            <Button
                char="."
                borders={{
                    right: true,
                }}
            />
            <Button
                char="0"
                borders={{
                    right: true,
                }}
            />
            <Button char={<Icon path={mdiBackspace} size={1.25} />} />
        </div>
    );
}

function Button({
    char,
    borders,
}: {
    char: ReactNode;
    borders?: {
        right?: boolean;
        bottom?: boolean;
    };
}) {
    const { dispatch } = useContext(KeyboardContext);

    return (
        <div
            className={`py-6 text-2xl flex items-center justify-center ${
                borders?.right && "border-r-2"
            } ${
                borders?.bottom && "border-b-2"
            } border-gray-200 hover:bg-sky-200 hover:cursor-pointer select-none`}
            style={{
                fontWeight: 500,
            }}
            onClick={() => {
                if (typeof char === "string") {
                    if (char === ".") {
                        dispatch({
                            type: "comma",
                        });
                    } else {
                        dispatch({
                            type: "digit",
                            digit: Number(char),
                        });
                    }
                } else {
                    dispatch({
                        type: "backspace",
                    });
                }
            }}
        >
            {char}
        </div>
    );
}
