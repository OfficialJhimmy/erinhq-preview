"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

export type VentureMetric = {
  Icon: LucideIcon;
  value: string;
  label: string;
};

type VentureCardProps = {
  index: number;
  eyebrow: string;
  name: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
  LogoIcon: LucideIcon;
  metrics: VentureMetric[];
  ctaLabel: string;
  ctaHref: string;
};

export default function VentureCard({
  index,
  eyebrow,
  name,
  role,
  description,
  image,
  imageAlt,
  LogoIcon,
  metrics,
  ctaLabel,
  ctaHref,
}: VentureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="overflow-hidden rounded-[20px] bg-white shadow-[0_18px_42px_rgba(29,24,17,0.08)] dark:bg-white/[0.06]"
    >
      <div className="relative h-[252px] overflow-hidden sm:h-[300px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/15" />

        <div className="absolute left-7 top-7 flex items-start gap-3 text-white">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/70 bg-black/10">
            <LogoIcon size={23} strokeWidth={1.35} />
          </span>
          <div className="pt-0.5">
            <p className="whitespace-pre-line font-damilola-sans text-[19px] font-medium leading-[0.95] tracking-[0.02em]">
              {name}
            </p>
            <p className="mt-1 font-damilola-sans text-[9px] font-medium uppercase tracking-[0.08em] text-white/85">
              {eyebrow}
            </p>
          </div>
        </div>

        <span className="absolute bottom-6 left-7 rounded-full border border-damilola-gold-dark/80 px-4 py-2 font-damilola-sans text-[10px] font-medium uppercase tracking-[0.12em] text-damilola-gold-dark">
          {role}
        </span>
      </div>

      <div className="px-7 pb-6 pt-6 sm:px-8 sm:pb-7">
        <p className="min-h-[70px] max-w-[480px] font-damilola-sans text-[15px] leading-[1.55] text-damilola-graphite/75 dark:text-damilola-bone/70">
          {description}
        </p>

        <div className="mt-6 grid grid-cols-2 border-y border-damilola-graphite/10 py-5 dark:border-damilola-bone/10 sm:grid-cols-4">
          {metrics.map(({ Icon, value, label }, metricIndex) => (
            <div
              key={`${value}-${label}`}
              className={`min-h-[90px] px-3 first:pl-0 sm:px-4 ${
                metricIndex > 0 ? "border-l border-damilola-graphite/8 dark:border-damilola-bone/10" : ""
              } ${metricIndex === 2 ? "max-sm:border-l-0 max-sm:pt-5" : ""} ${metricIndex === 3 ? "max-sm:pt-5" : ""}`}
            >
              <Icon size={23} strokeWidth={1.25} className="text-damilola-bronze-light dark:text-damilola-gold-dark" />
              <p className="mt-3 font-damilola-sans text-[18px] font-medium leading-none tracking-[-0.04em] text-damilola-graphite dark:text-damilola-bone">
                {value}
              </p>
              <p className="mt-1.5 font-damilola-sans text-[10px] leading-[1.45] text-damilola-graphite/65 dark:text-damilola-bone/60">
                {label}
              </p>
            </div>
          ))}
        </div>

        <Link
          href={ctaHref}
          className="mt-6 inline-flex items-center gap-3 rounded-full border border-damilola-bronze-light/75 px-4 py-2.5 font-damilola-sans text-[12px] font-medium text-damilola-graphite transition-colors hover:bg-damilola-bronze-light hover:text-white dark:border-damilola-gold-dark/75 dark:text-damilola-bone dark:hover:bg-damilola-gold-dark dark:hover:text-damilola-graphite"
        >
          {ctaLabel}
          <ArrowRight size={16} strokeWidth={1.25} />
        </Link>
      </div>
    </motion.article>
  );
}
