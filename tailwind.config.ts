import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        primary: "#213F7D",
        secondary: "#545F7D",
        teal: "#39CDCC",
        customActiveColor: "#1a73e8", // Set this to your preferred active background color
        customHoverColor: "#f0f0f0", // Set this to your preferred hover background color
        customTextColor: "#333333",
        customYellow: "#E9B200",
        customPink: "#fce8ff",
        customPurple: "#eee8ff",
        customOrange: "#feefec",
        customGray: "#a3a8b8",
        customLightYellow: "#fdf7e5",
        customLightRed: "#fce6eb",
        customLightGreen: "#f3fcf6",
        customLightGray: "#e6e7ec",
        customGreen: "#39CD62",
        customRed: "#E4033B"
      },
    },
  },
  plugins: [],
};
export default config;
