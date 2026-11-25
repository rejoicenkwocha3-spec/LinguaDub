import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#101B3F", electric: "#2463EB", purple: "#7047EB",
        lavender: "#F0EDFF", coral: "#FF786B", surface: "#F7F8FC",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: { card: "0 1px 2px rgba(16,27,63,.06), 0 4px 16px rgba(16,27,63,.06)" },
    },
  },
  plugins: [],
} satisfies Config;
