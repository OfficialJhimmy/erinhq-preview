const benefits = [
  {
    label: "Personal Attention",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
        <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "Premium Products",
    icon: (
      <path
        d="M12 4c-3 3-6 5-6 9a6 6 0 0012 0c0-4-3-6-6-9z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    label: "Complimentary Refreshments",
    icon: (
      <path
        d="M6 3h12l-1.5 12a2 2 0 01-2 1.8H9.5a2 2 0 01-2-1.8L6 3zM8 21h8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    label: "Private Experience",
    icon: (
      <path
        d="M6 10V8a6 6 0 1112 0v2M5 10h14v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export default function BenefitStrip() {
  return (
    <div className="mt-14 border-t border-rotii-ink/10 pt-8">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
        {benefits.map((benefit) => (
          <div key={benefit.label} className="flex flex-col items-center gap-3 text-center md:flex-row md:text-left">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-rotii-rosewood/25 text-rotii-rosewood">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                {benefit.icon}
              </svg>
            </span>
            <p className="font-rotii-sans text-xs font-medium uppercase tracking-wide text-rotii-ink">
              {benefit.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}