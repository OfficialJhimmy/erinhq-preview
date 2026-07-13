import Blog from "@/components/spick-and-span/Blog";
import BookNow from "@/components/spick-and-span/BookNow";
import Footer from "@/components/spick-and-span/Footer";
import Header from "@/components/spick-and-span/Header";
import Hero from "@/components/spick-and-span/Hero";
import Location from "@/components/spick-and-span/Location";
import Pricing from "@/components/spick-and-span/Pricing";
import Reviews from "@/components/spick-and-span/Reviews";
import ServiceAlternative from "@/components/spick-and-span/ServiceAlternative";
import type { Metadata } from "next";


export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Spick & Span Beauty Studio",
    description:
      "Luxury Hair Salon | Nails | Massage | Lashes | Mani-Pedi — Awolowo Road, Ikoyi, Lagos.",
    images: ["/images/spick-and-span/og-image.jpg"],
  },
};

export default function SpickAndSpanPage() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <Services/> */}
      <ServiceAlternative/>
      <Pricing/>
      <Reviews/>
      <Blog/>
      <Location/>
      <BookNow/>
      <Footer/>
    </main>
  );
}