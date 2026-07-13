// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";

// // Descriptions are original copy, general and honest, no invented
// // pricing, techniques, or product claims.
// const services = [
//   {
//     index: "01",
//     name: "Hair Styles",
//     description:
//       "Considered styling for every texture and occasion, finished with real attention to detail.",
//     src: "/images/spick-and-span/service-hair-styles.jpg",
//     alt: "A finished hair styling look at Spick & Span Beauty Studio",
//   },
//   {
//     index: "02",
//     name: "Haircuts",
//     description:
//       "Precision cuts shaped around your natural texture and how you actually live day to day.",
//     src: "/images/spick-and-span/service-haircut.jpg",
//     alt: "A stylist giving a haircut in-studio at Spick & Span Beauty Studio",
//   },
//   {
//     index: "03",
//     name: "Nails",
//     description:
//       "Manicures and nail art finished with a steady hand and genuine care for the details.",
//     src: "/images/spick-and-span/service-nails.jpg",
//     alt: "Finished nail work at Spick & Span Beauty Studio",
//   },
//   {
//     index: "04",
//     name: "Massage",
//     description:
//       "A quiet space to properly unwind, away from the pace of the city outside.",
//     src: "/images/spick-and-span/service-massage.jpg",
//     alt: "A massage treatment room at Spick & Span Beauty Studio",
//   },
//   {
//     index: "05",
//     name: "Lashes",
//     description:
//       "Natural or dramatic, lash work built to hold its shape and flatter your features.",
//     src: "/images/spick-and-span/service-lashes.jpg",
//     alt: "A finished lash set at Spick & Span Beauty Studio",
//   },
//   {
//     index: "06",
//     name: "Mani-Pedi",
//     description:
//       "The complete hand and foot treatment, done properly, start to finish.",
//     src: "/images/spick-and-span/service-mani-pedi.jpg",
//     alt: "A manicure and pedicure session at Spick & Span Beauty Studio",
//   },
//   {
//     index: "07",
//     name: "Pedicure",
//     description:
//       "Restorative foot care that goes well beyond a quick polish.",
//     src: "/images/spick-and-span/service-pedicure.jpg",
//     alt: "A pedicure treatment at Spick & Span Beauty Studio",
//   },
// ];

// function ServiceRow({
//   service,
//   reversed,
// }: {
//   service: (typeof services)[number];
//   reversed: boolean;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;
//     if (prefersReducedMotion) {
//       setVisible(true);
//       return;
//     }
//     const node = ref.current;
//     if (!node) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );
//     observer.observe(node);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`grid items-center gap-6 border-b border-spicknspan-dark/10 py-6 transition-all duration-700 last:border-b-0 motion-reduce:transition-none md:grid-cols-[180px_1fr] md:gap-10 ${
//         visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
//       } ${reversed ? "md:[direction:rtl]" : ""}`}
//     >
//       <div
//         className={`rounded-2xl bg-spicknspan-cream p-2 ${reversed ? "md:[direction:ltr]" : ""}`}
//       >
//         <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
//           <Image src={service.src} alt={service.alt} fill className="object-cover" />
//         </div>
//       </div>

//       <div className={reversed ? "md:[direction:ltr]" : ""}>
//         <span className="font-spicknspan-sans text-xs text-spicknspan-oxblood">
//           {service.index}
//         </span>
//         <h3 className="mt-1 font-spicknspan-display text-3xl text-spicknspan-dark md:text-4xl">
//           {service.name}
//         </h3>
//         <p className="mt-2 max-w-md font-spicknspan-sans text-spicknspan-dark/65">
//           {service.description}
//         </p>
//         <a
//           href="#contact"
//           className="mt-4 inline-block rounded-full border border-spicknspan-oxblood px-6 py-2.5 font-spicknspan-sans text-sm font-medium text-spicknspan-oxblood transition-colors hover:bg-spicknspan-oxblood hover:text-spicknspan-bg"
//         >
//           Book Now
//         </a>
//       </div>
//     </div>
//   );
// }

// export default function Services() {
//   return (
//     <section
//       id="services"
//       className="relative overflow-hidden bg-spicknspan-bg px-6 py-20 md:px-16"
//     >
//       {/* Quiet vertical brand mark filling the side margins on wide
//           screens. Decorative only, not additional content. */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute bottom-0 left-6 top-0 hidden items-center gap-4 lg:flex"
//       >
//         <span className="h-2/3 w-px bg-spicknspan-dark/10" />
//         <span
//           className="whitespace-nowrap font-spicknspan-sans text-xs uppercase tracking-[0.3em] text-spicknspan-dark/15"
//           style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
//         >
//           Spick &amp; Span · Ikoyi, Lagos · Spick &amp; Span
//         </span>
//       </div>
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute bottom-0 right-6 top-0 hidden items-center gap-4 lg:flex"
//       >
//         <span
//           className="whitespace-nowrap font-spicknspan-sans text-xs uppercase tracking-[0.3em] text-spicknspan-dark/15"
//           style={{ writingMode: "vertical-rl" }}
//         >
//           Our Services · Book Now · Our Services
//         </span>
//         <span className="h-2/3 w-px bg-spicknspan-dark/10" />
//       </div>

//       <div className="relative mx-auto max-w-4xl">
//         <p className="font-spicknspan-sans text-sm uppercase tracking-[0.2em] text-spicknspan-oxblood">
//           Our Services
//         </p>
//         <h2 className="mt-4 max-w-lg font-spicknspan-display text-4xl text-spicknspan-dark md:text-5xl">
//           Considered Care, From Head to Toe
//         </h2>
//         <p className="mt-4 max-w-lg font-spicknspan-sans text-spicknspan-dark/60">
//           Every treatment at Spick &amp; Span, in one place, so you know
//           exactly what to book.
//         </p>

//         <div className="mt-8">
//           {services.map((service, i) => (
//             <ServiceRow key={service.name} service={service} reversed={i % 2 === 1} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Descriptions are original copy, general and honest, no invented
// pricing, techniques, or product claims.
const services = [
  {
    index: "01",
    name: "Hair Styles",
    description:
      "Considered styling for every texture and occasion, finished with real attention to detail.",
    src: "/images/spick-and-span/service-hair-styles.jpg",
    alt: "A finished hair styling look at Spick & Span Beauty Studio",
  },
  {
    index: "02",
    name: "Haircuts",
    description:
      "Precision cuts shaped around your natural texture and how you actually live day to day.",
    src: "/images/spick-and-span/service-haircut.jpg",
    alt: "A stylist giving a haircut in-studio at Spick & Span Beauty Studio",
  },
  {
    index: "03",
    name: "Nails",
    description:
      "Manicures and nail art finished with a steady hand and genuine care for the details.",
    src: "/images/spick-and-span/service-nails.jpeg",
    alt: "Finished nail work at Spick & Span Beauty Studio",
  },
  {
    index: "04",
    name: "Massage",
    description:
      "A quiet space to properly unwind, away from the pace of the city outside.",
    src: "/images/spick-and-span/service-massage.jpg",
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
    src: "/images/spick-and-span/service-mani-pedi.jpeg",
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

function ServiceRow({
  service,
  reversed,
}: {
  service: (typeof services)[number];
  reversed: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid items-center gap-6 border-b border-spicknspan-dark/10 py-6 transition-all duration-700 last:border-b-0 motion-reduce:transition-none md:grid-cols-[180px_1fr] md:gap-10 ${
        visible
          ? "translate-x-0 opacity-100"
          : reversed
            ? "translate-x-8 opacity-0"
            : "-translate-x-8 opacity-0"
      } ${reversed ? "md:[direction:rtl]" : ""}`}
    >
      <div
        className={`rounded-2xl bg-spicknspan-cream p-2 ${reversed ? "md:[direction:ltr]" : ""}`}
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
          <Image src={service.src} alt={service.alt} fill className="object-cover" />
        </div>
      </div>

      <div className={reversed ? "md:[direction:ltr]" : ""}>
        <span className="font-spicknspan-sans text-xs text-spicknspan-oxblood">
          {service.index}
        </span>
        <h3 className="mt-1 font-spicknspan-display text-3xl text-spicknspan-dark md:text-4xl">
          {service.name}
        </h3>
        <p className="mt-2 max-w-md font-spicknspan-sans text-spicknspan-dark/65">
          {service.description}
        </p>
        <a
          href="#contact"
          className="mt-4 inline-block rounded-full border border-spicknspan-oxblood px-6 py-2.5 font-spicknspan-sans text-sm font-medium text-spicknspan-oxblood transition-colors hover:bg-spicknspan-oxblood hover:text-spicknspan-bg"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-spicknspan-bg px-6 py-20 md:px-16"
    >
      {/* Quiet vertical brand mark filling the side margins on wide
          screens. Decorative only, not additional content. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-6 top-0 hidden items-center gap-4 lg:flex"
      >
        <span className="h-2/3 w-px bg-spicknspan-dark/10" />
        <span
          className="whitespace-nowrap font-spicknspan-sans text-xs uppercase tracking-[0.3em] text-spicknspan-dark/15"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Spick &amp; Span · Ikoyi, Lagos · Spick &amp; Span
        </span>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-6 top-0 hidden items-center gap-4 lg:flex"
      >
        <span
          className="whitespace-nowrap font-spicknspan-sans text-xs uppercase tracking-[0.3em] text-spicknspan-dark/15"
          style={{ writingMode: "vertical-rl" }}
        >
          Our Services · Book Now · Our Services
        </span>
        <span className="h-2/3 w-px bg-spicknspan-dark/10" />
      </div>

      <div className="relative mx-auto max-w-4xl">
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

        <div className="mt-8">
          {services.map((service, i) => (
            <ServiceRow key={service.name} service={service} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}