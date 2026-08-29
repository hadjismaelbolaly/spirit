import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0F",
        violet: {
          DEFAULT: "#2B124C",
          deep: "#180A2E",
          light: "#3E1B69",
        },
        gold: {
          DEFAULT: "#D4AF37",
          soft: "#E9CE7C",
          muted: "#9C812C",
        },
        ivory: "#F7F3EA",
        emerald: "#064E3B",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "seal-radial":
          "radial-gradient(circle at center, rgba(212,175,55,0.14) 0%, rgba(212,175,55,0) 70%)",
        "violet-fade":
          "linear-gradient(180deg, #0B0B0F 0%, #180A2E 45%, #2B124C 100%)",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
export default config;
