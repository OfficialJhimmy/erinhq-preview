export default function LocationBotanicalDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="160"
      height="180"
      viewBox="0 0 160 180"
      className={`pointer-events-none text-rotii-rosewood/25 ${className}`}
    >
      <path d="M20 170 L120 20" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="100" cy="35" rx="12" ry="6" transform="rotate(-25 100 35)" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="80" cy="65" rx="11" ry="5.5" transform="rotate(-5 80 65)" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="60" cy="100" rx="10" ry="5" transform="rotate(15 60 100)" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="40" cy="135" rx="9" ry="4.5" transform="rotate(35 40 135)" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}