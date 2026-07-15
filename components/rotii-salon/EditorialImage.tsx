"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Experience } from "./bookingData";

export default function EditorialImage({ experience }: { experience: Experience }) {
  return (
    <div className="relative h-full min-h-[420px] w-full overflow-hidden">
      <motion.div
        key={experience.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image src={experience.image} alt={experience.alt} fill priority className="object-cover" />
      </motion.div>
    </div>
  );
}