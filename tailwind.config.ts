import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        colors: {
            "blue-main": "#1F93CE",
            "blue-dark": "#0084C8",
            "white-main": "#F6FCFF",
            "gray-main": "#D9D9D9",
        },
    },
    plugins: [],
};
export default config;
