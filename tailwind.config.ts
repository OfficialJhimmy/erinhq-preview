import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        // Scoped to Damilola Balogun.
        "damilola-display": ["var(--font-damilola-display)", "serif"],
        "damilola-sans": ["var(--font-damilola-sans)", "sans-serif"],
        "damilola-signature": ["var(--font-damilola-signature)", "cursive"],
        "damilola-mono": ["var(--font-damilola-mono)", "monospace"],
        // Scoped to Spick & Span.
        "spicknspan-display": ["var(--font-spicknspan-display)", "serif"],
        "spicknspan-sans": ["var(--font-spicknspan-sans)", "sans-serif"],
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
        // Damilola Balogun brand palette. Both modes coexist as fixed
        // tokens; components pair them with the dark: variant rather
        // than relying on CSS custom properties.
        damilola: {
          graphite: "#111111", // dark mode background / light mode primary text
          bone: "#FAF8F4", // light mode background
          "gold-dark": "#D4AF6A", // accent in dark mode, brighter for contrast
          "bronze-light": "#B68A35", // accent in light mode
        },
        // Spick & Span brand palette. Single-mode (no light/dark toggle
        // requested); "dark" is available as a background for specific
        // sections that want contrast, not a global theme switch.
        spicknspan: {
          bg: "#F7F4EE", // primary background, refined warm cream
          dark: "#231F1B", // primary text color; also usable as a dark section background
          card: "#FCFAF7", // near-white card surface, distinct from the page background
          cream: "#F5E3D4", // secondary light surface, cards and alternating sections
          oxblood: "#8D4A28", // primary accent, refined warm terracotta-brown
          "oxblood-bright": "#C2542E", // brighter accent tint, used only against the dark background
          champagne: "#E8C9B8", // secondary/softer accent, badges and small highlights
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeIn: "fadeIn 0.6s ease-out",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;