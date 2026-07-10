"use client";

import Image from "next/image";
import { useState } from "react";

export default function InstitutionLogo({
  src,
  alt,
  institution,
  size = 40,
}: {
  src: string;
  alt: string;
  institution: string;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // Honest fallback, not a fake logo: institution initials in a plain
    // bordered box until the real official logo file is provided.
    const initials = institution
      .split(" ")
      .filter((w) => w.length > 2 || w === w.toUpperCase())
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();

    return (
      <div
        style={{ width: size, height: size }}
        className="flex items-center justify-center rounded-md border border-damilola-graphite/15 font-damilola-sans text-xs font-semibold text-damilola-graphite/50 dark:border-damilola-bone/15 dark:text-damilola-bone/50"
      >
        {initials}
      </div>
    );
  }

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        unoptimized
        className="object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}