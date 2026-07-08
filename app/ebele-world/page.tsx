import Hero from "@/components/ebele-world/Hero";
import Header from "@/components/ebele-world/Header";
import type { Metadata } from "next";
import Pillars from "@/components/ebele-world/Pillars";
import Founder from "@/components/ebele-world/Founder";
import NewDawn from "@/components/ebele-world/NewDawn";
import Contact from "@/components/ebele-world/Contact";
import Footer from "@/components/ebele-world/Footer";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Ebele's World",
    description: "Health, Fitness, Beauty, and Style, from Ebele Ezeamakam.",
    images: ["/ebeles-world/og-image.jpg"],
  },
};

export default function EbelesWorldPage() {
  return (
    <main>
      <Header />
      <Hero />
      <Pillars />
      <Founder />
      <NewDawn />
      <Contact />
      <Footer />
    </main>
  );
}
