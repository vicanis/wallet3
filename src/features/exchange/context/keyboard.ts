import { createContext } from "react";

export const KeyboardContext = createContext<KeyboardContextType>({
    value: 0,
    dispatch: () => {},
});

export type KeyboardContextType = {
    value: number;
    dispatch: (
        arg: KeyboardDigitButtonHandler | KeyboardSpecialButtonHandler
    ) => void;
};

interface KeyboardDigitButtonHandler {
    type: "digit";
    digit: number;
}

interface KeyboardSpecialButtonHandler {
    type: "comma" | "backspace";
}
