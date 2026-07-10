import localFont from "next/font/local";
import { Alex_Brush, Geist_Mono } from "next/font/google";

// Canela, self-hosted from licensed .otf files. Only Regular and Medium
// exist right now, no Bold, no Italic. Every place that used to reach
// for font-bold or italic on this font has been switched to font-medium
// instead, since synthetic bold/italic on a high-contrast serif like
// this tends to look worse than just using a real weight.
//
// ASSUMED PATH: public/fonts/canela/, matching the same folder pattern
// used for General Sans below. Move the files here if they're not
// already, or tell me the real path and I'll adjust.
export const canela = localFont({
  variable: "--font-damilola-display",
  display: "swap",
  src: [
    {
      path: "./fonts/canela/Canela-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/canela/Canela-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

// General Sans, self-hosted. Path adjusted for this file's actual
// location (app/damilola-balogun/fonts.ts is one level deeper than
// wherever the original snippet's "../public/..." path assumed).
export const generalSans = localFont({
  variable: "--font-damilola-sans",
  display: "swap",
  src: [
    {
      path: "./fonts/general-sans/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/general-sans/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/general-sans/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/general-sans/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

// Small decorative script for the signature-style flourish on the hero
// photo. Not a real scanned signature, an approximation.
export const alexBrush = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-damilola-signature",
  weight: ["400"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-damilola-mono",
  weight: ["400", "500"],
  display: "swap",
});