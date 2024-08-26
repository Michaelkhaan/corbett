import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f8bd01",
      },
      animation: {
        shake: "shake 0.5s ease-in-out infinite",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(-2px, 2px) rotate(-2deg)" },
          "50%": { transform: "translate(2px, -2px) rotate(2deg)" },
          "75%": { transform: "translate(-2px, 2px) rotate(-2deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Gotham: ["var(--Gotham)", "sans-serif"],
        GothamBook: ["var(--GothamBook)", "sans-serif"],
        frinkRio: ["var(--frinkRio)", "sans-serif"],
        FONTSpringDemo: ["FONTSpringDemo", "Arial", "sans-serif"],
        dejavu: ["var(--dejavu)", "sans-serif"],
        myriadPro: ["var(--myriadPro)", "sans-serif"],
      },
      boxShadow: {
        card: "0px 0px 4px 0px #00000040",
      },
    },
  },
  plugins: [],
};
export default config;
