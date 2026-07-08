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
        // Scoped to Ebele's World.
        "ebele-display": ["var(--font-ebele-display)", "serif"],
        "ebele-sans": ["var(--font-ebele-sans)", "sans-serif"],
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
        // Ebele's World brand palette.
        ebele: {
          plum: "#2E1F2B", // ink plum, primary dark background
          brass: "#B98B4E", // primary accent, a nod to the founder's flute
          rose: "#C97B86", // secondary accent, beauty/style pillar
          moss: "#7C8B6F", // secondary accent, health/fitness pillar
          parchment: "#EDE6DE", // light neutral for light-surface sections
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeIn: "fadeIn 0.6s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;