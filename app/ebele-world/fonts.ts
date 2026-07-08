import { Instrument_Serif, Schibsted_Grotesk } from "next/font/google";

// Display face for the wordmark and major headlines only, used with
// restraint. Italic-first since that's where this face earns its keep.
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-ebele-display",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body and UI face, does the actual reading work.
export const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-ebele-sans",
  weight: ["400", "500"],
  display: "swap",
});