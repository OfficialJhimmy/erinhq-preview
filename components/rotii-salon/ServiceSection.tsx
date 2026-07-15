"use client";

import { useEffect, useRef } from "react";
import ServiceImage from "./ServiceImage";
import ServiceContent from "./ServiceContent";
import type { ServiceEntry } from "./serviceData";

export default function ServiceSection({
  service,
  reversed,
  onInView,
}: {
  service: ServiceEntry;
  reversed: boolean;
  onInView: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onInView();
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden py-8 md:py-4">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-rotii-display text-[18vw] font-semibold leading-none text-rotii-rosewood opacity-[0.02]"
      >
        {service.bgWord}
      </p>

      <div
        className={`relative grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center md:gap-16 md:px-16 ${
          reversed ? "md:[direction:rtl]" : ""
        }`}
      >
        <div className={reversed ? "md:[direction:ltr]" : ""}>
          <ServiceImage src={service.image} alt={service.alt} />
        </div>
        <div className={reversed ? "md:[direction:ltr]" : ""}>
          <ServiceContent service={service} />
        </div>
      </div>
    </div>
  );
}