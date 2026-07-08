"use client";

import Image from "next/image";
import { useState } from "react";

interface ServicePanel {
  id: string;
  label: string;
  image: string;
  description: string;
  cta: { label: string; href: string };
}

// Descriptions draw on BEYOND's real confirmed positioning language
// ("personalised fitness solutions for individuals and corporations
// alike"), not invented copy. Image paths are placeholders until real
// photography from Instagram is dropped in at each path.
const services: ServicePanel[] = [
  {
    id: "in-studio",
    label: "In-Studio",
    image: "/images/beyond-fitness/beyond-new-room.jpeg",
    description:
      "Train inside our Victoria Island studio, with expert coaches, real equipment, and a full weekly class schedule.",
    cta: { label: "View Classes", href: "#classes" },
  },
  {
    id: "at-home",
    label: "At-Home",
    image: "/images/beyond-fitness/baare.jpg",
    description:
      "The same coaching, brought directly to your space, for the days the studio isn't where you need to be.",
    cta: { label: "Learn More", href: "#pricing" },
  },
  {
    id: "corporate",
    label: "Private & Corporate",
    image: "/images/beyond-fitness/beyond-corporate.jpeg",
    description:
      "Personalised fitness solutions built for teams, private events, and organisations, not just individuals.",
    cta: { label: "Enquire", href: "#contact" },
  },
];

export default function ServiceOffering() {
  const [activeId, setActiveId] = useState(services[0].id);

  return (
    <section id="services" className="bg-beyond-dark px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-beyond-sans text-sm uppercase tracking-widest text-beyond-gold">
          How You Train
        </p>
        <h2 className="max-w-2xl font-beyond-display text-3xl text-white md:text-5xl">
          Three Ways Into BEYOND
        </h2>

        {/* Desktop: expanding panel accordion, hover or click to expand */}
        <div className="mt-12 hidden gap-2 md:flex md:h-[520px]">
          {services.map((service) => {
            const isActive = activeId === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveId(service.id)}
                onMouseEnter={() => setActiveId(service.id)}
                aria-expanded={isActive}
                className={`relative overflow-hidden rounded-2xl border border-beyond-olive/30 text-left transition-[flex] duration-700 ease-out ${
                  isActive ? "flex-[3]" : "flex-[1]"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.label}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 bg-beyond-dark transition-opacity duration-700 ${
                    isActive ? "opacity-50" : "opacity-70"
                  }`}
                />

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="font-beyond-display text-2xl text-white md:text-3xl">
                    {service.label}
                  </h3>
                  <p
                    className={`mt-3 max-w-sm font-beyond-sans text-white/80 transition-all duration-500 motion-reduce:transition-none ${
                      isActive
                        ? "translate-y-0 opacity-100 delay-200"
                        : "pointer-events-none translate-y-2 opacity-0"
                    }`}
                  >
                    {service.description}
                  </p>
                  <span
                    role="link"
                    tabIndex={-1}
                    className={`mt-5 inline-block w-max rounded-full bg-beyond-gold px-5 py-2 text-sm font-semibold text-beyond-dark transition-all duration-500 motion-reduce:transition-none ${
                      isActive
                        ? "translate-y-0 opacity-100 delay-300"
                        : "pointer-events-none translate-y-2 opacity-0"
                    }`}
                  >
                    {service.cta.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile: stacked accordion, tap to expand since hover doesn't exist on touch */}
        <div className="mt-10 flex flex-col gap-3 md:hidden">
          {services.map((service) => {
            const isActive = activeId === service.id;
            return (
              <div
                key={service.id}
                className="overflow-hidden rounded-2xl border border-beyond-olive/30"
              >
                <button
                  onClick={() => setActiveId(isActive ? "" : service.id)}
                  aria-expanded={isActive}
                  className="relative flex h-40 w-full items-end p-6 text-left"
                >
                  <Image
                    src={service.image}
                    alt={service.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-beyond-dark/60" />
                  <h3 className="relative font-beyond-display text-xl text-white">
                    {service.label}
                  </h3>
                </button>
                <div
                  className={`grid transition-all duration-500 motion-reduce:transition-none ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-6">
                    <p className="font-beyond-sans text-white/80">
                      {service.description}
                    </p>
                    <a
                      href={service.cta.href}
                      className="mt-4 inline-block rounded-full bg-beyond-gold px-5 py-2 text-sm font-semibold text-beyond-dark"
                    >
                      {service.cta.label}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}