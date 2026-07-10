// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const outlets = [
//   {
//     name: "Forbes Africa",
//     file: "forbes.png",
//     width: 160,
//     height: 42,
//     className: "h-10",
//   },
//   {
//     name: "The Guardian Nigeria",
//     file: "guardian.webp",
//     width: 120,
//     height: 32,
//     className: "h-7",
//   },
//   {
//     name: "ThisDay",
//     file: "this-day.png",
//     width: 150,
//     height: 42,
//     className: "h-10",
//   },
//   {
//     name: "Vanguard",
//     file: "vanguard.png",
//     width: 110,
//     height: 32,
//     className: "h-7",
//   },
// ];

// export default function QuoteSection() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 16 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-60px" }}
//       transition={{ duration: 0.65, ease: "easeOut" }}
//       className="mt-11 grid gap-9 lg:grid-cols-[1.45fr_0.9fr] lg:items-center"
//     >
//       <div className="flex gap-5">
//         <span className="-mt-3 font-damilola-display text-[74px] leading-none text-damilola-bronze-light dark:text-damilola-gold-dark">
//           &ldquo;
//         </span>
//         <div>
//           <p className="max-w-[540px] font-damilola-display text-[21px] italic leading-[1.3] text-damilola-graphite dark:text-damilola-bone sm:text-[24px]">
//             Enterprises that solve real problems at the grassroots create the
//             most enduring change.
//           </p>
//           <p className="mt-3 text-right font-damilola-signature text-[27px] text-damilola-bronze-light dark:text-damilola-gold-dark">
//             Damilola Hamid Balogun
//           </p>
//         </div>
//       </div>

//       <div className="border-l border-damilola-graphite/15 pl-7 dark:border-damilola-bone/15">
//         <p className="mb-4 font-damilola-sans text-[9px] uppercase tracking-[0.16em] text-damilola-graphite/50 dark:text-damilola-bone/50">
//           Featured In
//         </p>
//         <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
//           {outlets.map((outlet) => (
//             <Image
//               key={outlet.name}
//               src={`/images/the-dammy-balogun/${outlet.file}`}
//               alt={outlet.name}
//               width={outlet.width}
//               height={outlet.height}
//               className={`${outlet.className} w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:opacity-100 dark:brightness-0 dark:invert`}
//             />
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const outlets = [
  {
    name: "Forbes Africa",
    file: "new-forbes.svg",
  },
  {
    name: "The Guardian Nigeria",
    file: "new-guardian.svg",
  },
  {
    name: "ThisDay",
    file: "new-thisday.svg",
  },
  {
    name: "Vanguard",
    file: "new-vanguard.svg",
  },
];

export default function QuoteSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="mt-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Quote */}
        <div className="flex gap-5">
          <span className="-mt-3 shrink-0 font-damilola-display text-[74px] leading-none text-damilola-bronze-light dark:text-damilola-gold-dark">
            &ldquo;
          </span>

          <div className="flex-1">
            <p className="max-w-3xl font-damilola-display text-[28px] italic leading-[1.35] text-damilola-graphite dark:text-damilola-bone">
              Enterprises that solve real problems at the grassroots create the
              most enduring change.
            </p>

            <p className="mt-8 text-right font-damilola-signature text-[30px] text-damilola-bronze-light dark:text-damilola-gold-dark">
              Damilola Hamid Balogun
            </p>
          </div>
        </div>

        {/* Featured In */}
        <div className="mt-16">
          <p className="mb-7 text-center font-damilola-sans text-[11px] uppercase tracking-[0.35em] text-damilola-graphite/45 dark:text-damilola-bone/45">
            Featured In
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {outlets.map((outlet) => (
              <div
                key={outlet.name}
                className="flex h-10 w-40 items-center justify-center"
              >
                <Image
                  src={`/images/the-dammy-balogun/${outlet.file}`}
                  alt={outlet.name}
                  width={180}
                  height={48}
                  className="h-9 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:scale-105 hover:opacity-100 dark:brightness-0 dark:invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}