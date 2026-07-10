import Image from "next/image";
import { timelineNodes } from "../data";

export default function Timeline() {
  return (
    <div className="relative mt-16 border-t border-white/15 pt-8">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {timelineNodes.map((node) => (
          <div key={node.year} className="text-center sm:text-left">
            <p className="font-damilola-mono text-sm font-semibold text-damilola-gold-dark">
              {node.year}
            </p>
            <p className="mt-2 font-damilola-sans text-xs font-semibold uppercase tracking-wide text-damilola-bone">
              {node.country}
            </p>
            <p className="mt-1 font-damilola-sans text-xs leading-snug text-white/50">
              {node.project}
            </p>
            <div className="relative mx-auto mt-3 h-14 w-14 overflow-hidden rounded-full border border-white/15 sm:mx-0">
              {/* PLACEHOLDER: small circular photo per milestone */}
              <Image
                src={node.image}
                alt={`${node.country}, ${node.year}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}