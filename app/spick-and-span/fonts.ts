import { Italiana, Jost } from "next/font/google";

export const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-spicknspan-display",
  weight: ["400"],
  display: "swap",
});

export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-spicknspan-sans",
  weight: ["400", "500"],
  display: "swap",
});