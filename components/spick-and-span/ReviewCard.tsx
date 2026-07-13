function StarRow() {
  return (
    <div className="flex gap-0.5 text-spicknspan-oxblood" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.3 6.9.9-5 4.8 1.3 6.8L12 17.6l-6.1 3.2 1.3-6.8-5-4.8 6.9-.9L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCard({ text }: { text: string }) {
  return (
    <div className="w-72 shrink-0 rounded-2xl bg-spicknspan-card p-6 shadow-[0_10px_30px_rgba(35,31,27,0.06)]">
      <StarRow />
      <p className="mt-3 font-spicknspan-sans text-sm leading-relaxed text-spicknspan-dark/70">
        {text}
      </p>
    </div>
  );
}