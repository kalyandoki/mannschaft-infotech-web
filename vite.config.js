import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// // https://vite.dev/config/
export default defineConfig({
  // plugins: [react()],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-x": "scrollX 30s linear infinite",
      },
      fontFamily: {
        roboto: ['"Roboto Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
