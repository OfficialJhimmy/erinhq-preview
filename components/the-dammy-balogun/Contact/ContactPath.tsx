import type { ReactNode } from "react";

export interface ContactPathProps {
  number: string;
  icon: ReactNode;
  heading: ReactNode;
  copy: string;
}

export default function ContactPath({ number, icon, heading, copy }: ContactPathProps) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="font-damilola-mono text-sm text-damilola-gold-dark">
          {number}
        </span>
        <span className="h-px w-6 bg-white/20" />
        <span className="text-damilola-gold-dark/70">{icon}</span>
      </div>

      <h3 className="mt-4 font-damilola-display text-3xl font-medium leading-tight text-damilola-bone">
        {heading}
      </h3>

      <p className="mt-3 max-w-xs font-damilola-sans text-sm leading-relaxed text-white/55">
        {copy}
      </p>

      <a href="#contact-form" className="group mt-6 inline-block w-full">
        <span className="flex items-center gap-2">
          <span className="h-px w-16 bg-damilola-gold-dark/40 transition-all duration-300 group-hover:w-24 group-hover:bg-damilola-gold-dark" />
          <span className="font-damilola-sans text-sm text-white/70 transition-colors duration-300 group-hover:text-damilola-gold-dark">
            Learn more
          </span>
          <span className="text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-damilola-gold-dark">
            →
          </span>
        </span>
      </a>
    </div>
  );
}