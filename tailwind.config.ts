import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2145",
          light: "#1B3A6E",
        },
        gold: {
          DEFAULT: "#F5C000",
        },
        warm: {
          white: "#FFFDF5",
          surface: "#F4F3EE",
        },
        alert: "#D32F2F",
        muted: "#6B6B6B",
        body: "#1E1E1E",
      },
      spacing: {
        "space-1": "8px",
        "space-2": "16px",
        "space-3": "24px",
        "space-4": "32px",
        "space-5": "48px",
        "space-6": "64px",
        "space-7": "80px",
        "space-8": "96px",
        "space-9": "128px",
        "space-10": "160px",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
