import ClassesSchedule from "@/components/beyond-fitness/ClassesSchedule";
import ContactLocation from "@/components/beyond-fitness/ContactLocation";
import FinalCta from "@/components/beyond-fitness/FinalCTA";
import Footer from "@/components/beyond-fitness/Footer";
import GiftCard from "@/components/beyond-fitness/GiftCard";
import Header from "@/components/beyond-fitness/Header";
import Hero from "@/components/beyond-fitness/Hero";
import Pricing from "@/components/beyond-fitness/Pricing";
import ServiceOffering from "@/components/beyond-fitness/ServiceOffering";
import Workouts from "@/components/beyond-fitness/Workouts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "BEYOND Fitness",
    description: "Premium boutique fitness in Victoria Island, Lagos.",
    images: ["/beyond-fitness/og-image.jpg"],
  },
};

export default function BeyondFitnessPage() {
  return (
    <main>
      <Header />
      <Hero />
      <ClassesSchedule />
      <Workouts />
      <ServiceOffering />
      <Pricing />
      <GiftCard />
      <ContactLocation />
      <FinalCta />
      <Footer />
    </main>
  );
}
