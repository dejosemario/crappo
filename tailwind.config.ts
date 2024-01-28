import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "7%",
      center: true,
    },
    screens: {
      xs: "450px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1024px",
      xxl: "1280px",
      "@desktop": "1440px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      backgroundColor: {
        "white-10": "rgba(255, 255, 255, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
