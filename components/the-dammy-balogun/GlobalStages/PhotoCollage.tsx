"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type CollageImage = { src: string; alt: string; className: string };

const photos: CollageImage[] = [
  { src: "/images/the-dammy-balogun/IMG_6209.jpg", alt: "Damilola Balogun contributing to a summit panel", className: "left-0 top-4 h-[48%] w-[56%]" },
  { src: "/images/the-dammy-balogun/IMG_6203.jpg", alt: "Damilola Balogun at a boardroom session", className: "right-0 top-0 h-[43%] w-[42%]" },
  { src: "/images/the-dammy-balogun/IMG_6207.jpg", alt: "Damilola Balogun speaking on stage in Ghana", className: "bottom-0 left-[7%] h-[43%] w-[50%]" },
  { src: "/images/the-dammy-balogun/nigeria.jpg", alt: "Damilola Balogun at an international energy event", className: "bottom-0 right-0 h-[50%] w-[39%]" },
];

export default function PhotoCollage() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={{ hidden: {}, show: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } } }} className="relative mx-auto h-[430px] w-full max-w-[540px] sm:h-[520px] lg:mt-2">
      {photos.map((photo) => (
        <motion.div key={photo.src} variants={{ hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, ease: "easeOut" }} className={`group absolute overflow-hidden rounded-[18px] border border-damilola-bronze-light/45 bg-[#151515] shadow-[0_15px_35px_rgba(0,0,0,0.18)] transition-all duration-500 hover:z-10 hover:-translate-y-2 hover:scale-[1.025] hover:shadow-[0_22px_48px_rgba(0,0,0,0.3)] dark:border-damilola-gold-dark/45 ${photo.className}`}>
          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1023px) 70vw, 30vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </motion.div>
      ))}
    </motion.div>
  );
}
