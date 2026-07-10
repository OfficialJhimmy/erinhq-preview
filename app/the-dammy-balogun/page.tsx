import Header from "@/components/the-dammy-balogun/Header";
import Hero from "@/components/the-dammy-balogun/Hero";
import ImpactStats from "@/components/the-dammy-balogun/ImpactStats";
import PressRecognition from "@/components/the-dammy-balogun/PressRecognition/PressRecognition";
import Ventures from "@/components/the-dammy-balogun/Ventures";
import GlobalStages from "@/components/the-dammy-balogun/GlobalStages/GlobalStages";
import type { Metadata } from "next";
import Academic from "@/components/the-dammy-balogun/Academic/Academic";
import GlobalFootprint from "@/components/the-dammy-balogun/GlobalFootprint/GlobalFootprint";
import Contact from "@/components/the-dammy-balogun/Contact/Contact";
import Footer from "@/components/the-dammy-balogun/Footer";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Damilola Hamid Balogun",
    description:
      "Entrepreneur. Energy Transition & Infrastructure. Forbes 30 Under 30.",
    images: ["/damilola-balogun/og-image.jpg"],
  },
};

export default function DamilolaBalogunPage() {
  return (
    <main>
      <Header />
      <Hero />
      <ImpactStats />
      <Ventures />
      <PressRecognition />
      <GlobalStages />
      <Academic />
      <GlobalFootprint/>
      <Contact/>
      <Footer/>
    </main>
  );
}
