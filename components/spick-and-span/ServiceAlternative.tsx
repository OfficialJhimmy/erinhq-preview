"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    index: "01",
    name: "Hair Styles",
    description:
      "Considered styling for every texture and occasion, finished with real attention to detail.",
    src: "/images/spick-and-span/stylist.jpg",
    alt: "A finished hair styling look at Spick & Span Beauty Studio",
  },
  {
    index: "02",
    name: "Haircuts",
    description:
      "Precision cuts shaped around your natural texture and how you actually live day to day.",
    src: "/images/spick-and-span/haircut.jpg",
    alt: "A stylist giving a haircut in-studio at Spick & Span Beauty Studio",
  },
  {
    index: "03",
    name: "Nails",
    description:
      "Manicures and nail art finished with a steady hand and genuine care for the details.",
    src: "/images/spick-and-span/nails.jpg",
    alt: "Finished nail work at Spick & Span Beauty Studio",
  },
  {
    index: "04",
    name: "Massage",
    description:
      "A quiet space to properly unwind, away from the pace of the city outside.",
    src: "/images/spick-and-span/massage.jpg",
    alt: "A massage treatment room at Spick & Span Beauty Studio",
  },
  {
    index: "05",
    name: "Lashes",
    description:
      "Natural or dramatic, lash work built to hold its shape and flatter your features.",
    src: "/images/spick-and-span/service-lashes.jpg",
    alt: "A finished lash set at Spick & Span Beauty Studio",
  },
  {
    index: "06",
    name: "Mani-Pedi",
    description:
      "The complete hand and foot treatment, done properly, start to finish.",
    src: "/images/spick-and-span/manicure.jpg",
    alt: "A manicure and pedicure session at Spick & Span Beauty Studio",
  },
  {
    index: "07",
    name: "Pedicure",
    description:
      "Restorative foot care that goes well beyond a quick polish.",
    src: "/images/spick-and-span/service-pedicure.jpeg",
    alt: "A pedicure treatment at Spick & Span Beauty Studio",
  },
];

export default function ServiceAlternative() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <section id="services" className="bg-spicknspan-bg px-6 py-20 md:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="font-spicknspan-sans text-sm uppercase tracking-[0.2em] text-spicknspan-oxblood">
          Our Services
        </p>
        <h2 className="mt-4 max-w-lg font-spicknspan-display text-4xl text-spicknspan-dark md:text-5xl">
          Considered Care, From Head to Toe
        </h2>
        <p className="mt-4 max-w-lg font-spicknspan-sans text-spicknspan-dark/60">
          Every treatment at Spick &amp; Span, in one place, so you know
          exactly what to book.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
          <ul className="border-y border-spicknspan-dark/10">
            {services.map((service, i) => (
              <li key={service.name} className="border-b border-spicknspan-dark/10 last:border-b-0">
                <button
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  aria-current={i === activeIndex}
                  className={`flex w-full items-baseline gap-4 py-4 text-left transition-colors ${
                    i === activeIndex
                      ? "text-spicknspan-oxblood"
                      : "text-spicknspan-dark/70 hover:text-spicknspan-dark"
                  }`}
                >
                  <span className="font-spicknspan-sans text-xs">
                    {service.index}
                  </span>
                  <span className="font-spicknspan-display text-2xl">
                    {service.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="rounded-[32px] bg-spicknspan-cream p-3 md:p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-[16/10]">
              {services.map((service, i) => (
                <Image
                  key={service.name}
                  src={service.src}
                  alt={service.alt}
                  fill
                  priority={i === 0}
                  className={`object-cover transition-opacity duration-500 motion-reduce:transition-none ${
                    i === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            <div className="p-4" aria-live="polite">
              <p className="font-spicknspan-sans text-spicknspan-dark/65">
                {active.description}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-block rounded-full border border-spicknspan-oxblood px-6 py-2.5 font-spicknspan-sans text-sm font-medium text-spicknspan-oxblood transition-colors hover:bg-spicknspan-oxblood hover:text-spicknspan-bg"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}