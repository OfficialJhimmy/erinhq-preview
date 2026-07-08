import { Fraunces, Hanken_Grotesk } from "next/font/google";

// Display face for headlines. Variable optical-size axis lets it flex
// from warm and soft to sharp and editorial depending on size.
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-beyond-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body and UI face. Clean geometric grotesk, legible at small sizes,
// distinct enough from Inter/Poppins to avoid the generic template look.
export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-beyond-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});