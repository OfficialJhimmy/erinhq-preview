import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function FooterCTA() {
  return (
    <div className="mt-10 flex flex-col items-start justify-between gap-8 border-t border-white/15 pt-8 sm:mt-16 sm:flex-row sm:items-end sm:gap-10 sm:pt-10">
      <p className="max-w-xs font-damilola-display text-2xl font-medium leading-tight text-damilola-bone">
        Every destination expanded{" "}
        <span className="text-damilola-gold-dark">the mission.</span>
      </p>

      <div className="sm:text-right">
        <p className="font-damilola-sans text-[10px] uppercase tracking-widest text-white/40">
          Next
        </p>
        <Link
          href="#contact"
          className="mt-1 flex items-center gap-3 font-damilola-display text-xl font-medium text-damilola-bone transition-colors hover:text-damilola-gold-dark"
        >
          Contact
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-damilola-gold-dark/40">
            <ArrowDown size={16} strokeWidth={1.5} />
          </span>
        </Link>
      </div>
    </div>
  );
}