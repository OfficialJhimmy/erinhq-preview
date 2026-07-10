"use client";

import { motion, useReducedMotion } from "framer-motion";
import FeaturedArticle from "./FeaturedArticle";
import LogoStrip from "./LogoStrip";
import PublicationCard from "./PublicationCard";
import PullQuote from "./PullQuote";
import SectionHeader from "./SectionHeader";

export interface PressArticle {
  publication: string;
  logo: string;
  category: string;
  headline: string;
  excerpt: string;
  year: string;
  url: string;
  featured?: boolean;
}

const articles: PressArticle[] = [
  { publication: "Forbes Africa", logo: "/images/the-dammy-balogun/new-forbes.svg", category: "Social impact", headline: "Forbes Africa 30 Under 30 — Social Impact", excerpt: "Recognised among the 2025 Forbes Africa 30 Under 30 class for building practical pathways for young people and communities to shape a more sustainable future.", year: "2025", url: "https://chronicleclub.in/storage/uploads/1749402826-forbes-africa.pdf", featured: true },
  { publication: "The Guardian", logo: "/images/the-dammy-balogun/new-guardian.svg", category: "Climate & energy", headline: "A pledge for Africa's energy breakthrough", excerpt: "A look at the work connecting grassroots climate action with the energy transition.", year: "2025", url: "https://guardian.ng/features/climate-crisis-forbes-30-under-30-honouree-balogun-pledges-africas-energy-breakthrough/" },
  { publication: "Vanguard", logo: "/images/the-dammy-balogun/new-vanguard.svg", category: "Policy", headline: "Value-driven U.S.–West Africa energy partnerships", excerpt: "A call for purposeful energy collaboration at the Powering Africa Summit.", year: "2026", url: "https://www.vanguardngr.com/2026/03/balogun-calls-for-value-driven-u-s-west-africa-energy-partnerships-at-powering-africa-summit/amp/" },
  { publication: "THISDAY", logo: "/images/the-dammy-balogun/new-thisday.svg", category: "Clean energy", headline: "New evidence for cleaner urban SMEs", excerpt: "Research and practical routes to more productive energy use in Lagos.", year: "2026", url: "https://www.thisdaylive.com/2026/01/20/powering-lagos-smes-new-evidence-highlights-pathways-to-cleaner-more-productive-energy-use-in-urban-nigeria/" },
];

export default function PressRecognition() {
  const reduceMotion = useReducedMotion();
  const featured = articles.find((article) => article.featured);
  const supporting = articles.filter((article) => !article.featured);
  if (!featured) return null;
  return (
    <section id="press" aria-labelledby="press-heading" className="relative overflow-hidden bg-[#f8f6f2] px-6 py-24 text-damilola-graphite md:px-12 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(17,17,17,.75)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.75)_1px,transparent_1px)] [background-size:72px_72px]" />
      <motion.div aria-hidden="true" animate={reduceMotion ? undefined : { x: [0, 20, 0], y: [0, -10, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(182,138,53,0.11),transparent_68%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#111_0.6px,transparent_0.6px)] [background-size:6px_6px]" />
      <div aria-hidden="true" className="pointer-events-none absolute left-6 right-6 top-[39%] h-px bg-damilola-bronze-light/20 md:left-12 md:right-12" />
      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeader />
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.28fr_0.72fr] lg:items-start">
          <div><FeaturedArticle article={featured} /><PullQuote /></div>
          <div className="grid gap-5">{supporting.map((article, index) => <PublicationCard key={article.publication} article={article} index={index} />)}</div>
        </div>
        {/* <LogoStrip articles={articles} /> */}
      </div>
    </section>
  );
}
