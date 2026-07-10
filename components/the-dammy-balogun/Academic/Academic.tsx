"use client";

import SectionHeader from "./SectionHeader";
import FeaturedDegree from "./FeaturedDegree";
import EducationItem from "./EducationItem";
import Quote from "./Quote";
import type { Education } from "../types";

// PLACEHOLDER logo paths throughout. None of these are real official
// institutional logos, since I don't have access to source or fabricate
// them. Drop real files at these exact paths once available; the
// InstitutionLogo component falls back to initials until then.
const linnaeus: Education = {
  institution: "Linnaeus University",
  logo: "/images/the-dammy-balogun/linnaeus.png",
  degree: "Master of Philosophy, Entrepreneurship, Sustainability and Social Change",
  period: "Aug 2023 – May 2025",
  description:
    "Completed a rigorous 120 ECTS program focused on sustainability-driven innovation, impact entrepreneurship, and systems thinking. Developed expertise in sustainable business models, stakeholder co-creation, and regenerative leadership.",
  achievements: [
    'Authored "The CoolCycle Project: Fusing Entrepreneurship, Sustainable Energy and Climate Resilience."',
    "Awarded the Swedish Institute Scholarship for Global Professionals.",
    "Participated in the Swedish Institute Self-Leadership Program.",
    "Completed projects in circular economy, clean energy, and inclusive enterprise.",
    'Authored the master\'s thesis "Sustainable Entrepreneurship as a Path to Emancipation: Exploring Economic and Social Autonomy through a Case Study in Nigeria."',
  ],
  skills: [
    "Entrepreneurship",
    "Social Entrepreneurship",
    "Sustainability",
    "Systems Thinking",
    "Climate Innovation",
  ],
  featured: true,
};

const supporting: Education[] = [
  {
    institution: "Università degli Studi di Firenze",
    logo: "/images/the-dammy-balogun/firenze.png",
    degree: "Postgraduate Diploma",
    period: "Nov 2024 – Mar 2025",
    description:
      "Completed a certified Blended Intensive Program (BIP) on climate policy, sustainability, and international cooperation. Co-authored and presented a policy brief on energy and water security.",
  },
  {
    institution: "Nigerian Law School",
    logo: "/images/the-dammy-balogun/lawschool.png",
    degree: "Law",
    period: "2020 – 2021",
  },
  {
    institution: "University of Lagos",
    logo: "/images/the-dammy-balogun/unilag.jpg",
    degree: "LL.B, Bachelor of Law",
    period: "2014 – 2019",
  },
];

// Subtle paper-grain texture, pure SVG noise, no image file.
const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function Academic() {
  return (
    <section
      id="academic"
      className="relative overflow-hidden bg-damilola-bone px-6 py-28 dark:bg-damilola-graphite md:px-16"
    >
      {/* Faint editorial grid + grain, restrained per the brief */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.02] dark:invert"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(17,17,17,0.03) 0, rgba(17,17,17,0.03) 1px, transparent 1px, transparent 8.33%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.85fr_1fr] lg:gap-16">
          <FeaturedDegree education={linnaeus} />

          <div className="flex flex-col divide-y divide-damilola-graphite/8 dark:divide-damilola-bone/10">
            {supporting.map((edu, i) => (
              <EducationItem key={edu.institution} education={edu} index={i} />
            ))}
          </div>
        </div>

        {/* <Quote /> */}
      </div>
    </section>
  );
}