"use client";

import { useState } from "react";
import PaperTexture from "./PaperTexture";
import SectionIntro from "./SectionIntro";
import ServiceProgress from "./ServiceProgress";
import ServiceSection from "./ServiceSection";
import LuxuryDivider from "./LuxuryDivider";
import EditorialQuote from "./EditorialQuote";
import { services } from "./serviceData";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="relative overflow-hidden bg-rotii-blush/10 py-8 md:py-28">
      <PaperTexture />

      <div className="relative">
        <SectionIntro />

        <div className="mx-auto grid gap-8 px-6 lg:grid-cols-[40px_1fr]">
          <ServiceProgress activeIndex={activeIndex} />

          <div>
            {services.map((service, i) => (
              <div key={service.number}>
                <ServiceSection
                  service={service}
                  reversed={i % 2 === 1}
                  onInView={() => setActiveIndex(i)}
                />
                {/* {i === 2 && <EditorialQuote />} */}
                {i < services.length - 1 && i !== 2 && <LuxuryDivider />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}