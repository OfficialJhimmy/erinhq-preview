"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import DiscoverLink from "./DiscoverLink";
import type { ServiceEntry } from "./serviceData";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServiceContent({ service }: { service: ServiceEntry }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <motion.span
        variants={item}
        className="font-rotii-display text-xl italic text-rotii-rosewood"
      >
        {service.number}
      </motion.span>

      <motion.h3
        variants={item}
        className="mt-2 font-rotii-display text-5xl text-rotii-ink md:text-6xl"
      >
        {service.title}
      </motion.h3>

      <motion.p
        variants={item}
        className="mt-5 max-w-sm font-rotii-sans leading-relaxed text-rotii-ink/55"
      >
        {service.description}
      </motion.p>

      <motion.div variants={item} className="mt-7">
        <DiscoverLink label={`Discover ${service.title}`} />
      </motion.div>
    </motion.div>
  );
}