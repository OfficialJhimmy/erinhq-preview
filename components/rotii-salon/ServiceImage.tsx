"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function ServiceImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative aspect-[1/1] overflow-hidden rounded-[20px]"
    >
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? false : { scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
        />
      </motion.div>
    </motion.div>
  );
}