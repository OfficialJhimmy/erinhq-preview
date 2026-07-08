import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Scoped to BEYOND Fitness. Other business routes should define
        // their own font-{slug}-display / font-{slug}-sans pair rather
        // than reusing these or the default font-sans/font-serif slots.
        "beyond-display": ["var(--font-beyond-display)", "serif"],
        "beyond-sans": ["var(--font-beyond-sans)", "sans-serif"],
      },
      colors: {
        // BEYOND Fitness brand palette. Prefixed so it doesn't collide
        // with other business routes added to this app later.
        beyond: {
          gold: "#F9D663", // main color, used for CTAs and accents
          dark: "#2A200D", // near-black, used for overlays and dark backgrounds
          olive: "#83723E", // mid-tone, used for hover states and borders
          text: "#222222", // body text on light backgrounds
          cream: "#E8D083", // lightest neutral available; still warm, not a true white
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;