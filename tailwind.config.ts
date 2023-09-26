import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/app/**/*.tsx", "./src/shared/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                black: {
                    DEFAULT: "#1B1919",
                },
                blue: {
                    DEFAULT: "#1F93CE",
                    dark: "#0084C8",
                },
                white: {
                    DEFAULT: "#F6FCFF",
                },
                gray: {
                    DEFAULT: "#D9D9D9",
                    dark: "#7B8083",
                },
            },
        },
    },
    plugins: [],
};
export default config;
