import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        sand: "#F6F3ED",
        graphite: "#1F1F22",
        amber: "#FFD580",
        mint: "#C7FFDB"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "sans-serif"],
        display: ["var(--font-jura)", "Jura", "sans-serif"],
        glitch: ["var(--font-rubik-glitch)", "Rubik Glitch", "cursive"],
        mono: ["JetBrains Mono", "monospace"]
      },
      backgroundImage: {
        "gradient-soft-future": "radial-gradient(circle at 20% 20%, rgba(255,213,128,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(199,255,219,0.25), transparent 55%), linear-gradient(135deg, #0f0f0f 0%, #1f1f22 100%)"
      },
      boxShadow: {
        glow: "0 0 25px rgba(255,213,128,0.3)",
        "glow-mint": "0 0 25px rgba(199,255,219,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
