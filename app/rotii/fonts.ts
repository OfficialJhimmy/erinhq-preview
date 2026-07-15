import { Bodoni_Moda, Manrope } from "next/font/google";

export const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-rotii-display",
  weight: ["500", "600"],
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-rotii-sans",
  weight: ["400", "500"],
  display: "swap",
});