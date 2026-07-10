"use client";

import { Building2, Flag, Globe2, Handshake, Leaf, Sun, UsersRound } from "lucide-react";
import SectionHeader from "./SectionHeader";
import VentureCard from "./VentureCard";
import QuoteSection from "./QuoteSection";

function DottedWorldMap() {
  return (
    <svg aria-hidden="true" viewBox="0 0 800 390" className="absolute right-[-90px] top-[-40px] hidden w-[620px] opacity-[0.09] lg:block">
      <defs>
        <pattern id="venture-dots" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.15" fill="currentColor" />
        </pattern>
      </defs>
      <g fill="url(#venture-dots)">
        <path d="M39 107 78 79l78-16 57 17 19 31-23 24-29-4-23 31-31 7-9-26-39-7-39 13-34-17z" />
        <path d="m186 176 37 12 33 40-15 62-28 63-26-11-16-58 11-38-22-37z" />
        <path d="m278 104 47-31 45-7 31 16 37-3 25 20-13 26-37 8-23 29-36-7-29 15-38-19z" />
        <path d="m369 172 41 11 31 53-13 83-36 25-31-49 9-42-23-42z" />
        <path d="m443 103 55-37 89-4 34 21 59-1 65 30-22 25-70-3-33 26-72-1-34-20-47-2z" />
        <path d="m650 201 51 14 29 45-34 20-42-19-18-35z" />
      </g>
    </svg>
  );
}

export default function Ventures() {
  return (
    <section id="ventures" className="relative overflow-hidden bg-damilola-bone px-6 py-24 dark:bg-damilola-graphite md:px-12 lg:py-28">
      <DottedWorldMap />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-52 -left-44 h-[470px] w-[470px] rounded-full border border-damilola-bronze-light/20" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-44 -left-32 h-[410px] w-[410px] rounded-full border border-damilola-bronze-light/15" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-36 -left-20 h-[350px] w-[350px] rounded-full border border-damilola-bronze-light/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-[210px] h-[550px] w-[550px] rounded-full border border-damilola-bronze-light/25" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-[242px] h-[470px] w-[470px] rounded-full border border-damilola-bronze-light/20" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-[274px] h-[390px] w-[390px] rounded-full border border-damilola-bronze-light/15" />

      <div className="relative mx-auto max-w-[1110px]">
        <SectionHeader />
        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          <VentureCard
            index={0}
            name="YSDN"
            eyebrow="Youth Sustainable Development Network"
            role="Co-Founder & CEO"
            description="Empowering young people with the knowledge, skills, and opportunities to drive sustainable development worldwide."
            image="/images/the-dammy-balogun/IMG_6208.jpg"
            imageAlt="Damilola Balogun speaking at a sustainable energy summit"
            LogoIcon={Leaf}
            metrics={[
              { Icon: UsersRound, value: "12,000+", label: "Youth Trained" },
              { Icon: Globe2, value: "50+", label: "Countries Reached" },
              { Icon: Flag, value: "20+", label: "Nations Impacted" },
              { Icon: Leaf, value: "6,600+", label: "Tonnes CO2e Emissions Reduced" },
            ]}
            ctaLabel="Explore YSDN"
            ctaHref="#contact"
          />
          <VentureCard
            index={1}
            name="POWERING\nLAGOS SMEs"
            eyebrow="Clean Energy Initiative"
            role="Project Lead"
            description="Driving clean energy adoption for small and medium businesses through solar demand aggregation across Lagos market clusters."
            image="/images/the-dammy-balogun/hero-formal-3.jpg"
            imageAlt="Damilola Balogun at a sustainable development meeting"
            LogoIcon={Sun}
            metrics={[
              { Icon: Sun, value: "$150K+", label: "Funding Secured for Solar Projects" },
              { Icon: Building2, value: "Solar", label: "Demand Aggregation Model" },
              { Icon: Handshake, value: "ZE-Gen", label: "IKEA Foundation Backed" },
              { Icon: Flag, value: "SMEs", label: "Across Lagos Market Clusters" },
            ]}
            ctaLabel="Explore Powering Lagos SMEs"
            ctaHref="#contact"
          />
        </div>
        <QuoteSection />
      </div>
    </section>
  );
}
