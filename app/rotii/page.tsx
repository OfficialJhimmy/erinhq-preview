import BookingSection from "@/components/rotii-salon/BookingSection";
import Footer from "@/components/rotii-salon/Footer";
import Header from "@/components/rotii-salon/Header";
import Hero from "@/components/rotii-salon/Hero";
import JournalSection from "@/components/rotii-salon/JourneySection";
import Pricing from "@/components/rotii-salon/Pricing";
import Services from "@/components/rotii-salon/Services";
import VisitStudioSection from "@/components/rotii-salon/VisitStudioSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Rotii Salon & Spa",
    description:
      "Luxury Beauty Studio in Lekki — Hair, Nails, Lashes, Pedicure, Spa.",
    images: ["/images/rotii-salon/og-image.jpg"],
  },
};

export default function RotiiSalonPage() {
  return (
    <main>
      <Header />
      <Hero/>
      <Services/>
      <Pricing/>
      <BookingSection/>
      <JournalSection/>
      <VisitStudioSection/>
      <Footer/>
    </main>
  );
}