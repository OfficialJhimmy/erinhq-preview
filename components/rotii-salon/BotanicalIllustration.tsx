export default function BotanicalIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="160"
      height="200"
      viewBox="0 0 160 200"
      className={`pointer-events-none text-rotii-rosewood/25 ${className}`}
    >
      <path d="M40 190 L90 40" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="92" cy="48" rx="12" ry="6" transform="rotate(-25 92 48)" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="80" cy="75" rx="11" ry="5.5" transform="rotate(-5 80 75)" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="70" cy="110" rx="10" ry="5" transform="rotate(15 70 110)" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="58" cy="145" rx="9" ry="4.5" transform="rotate(35 58 145)" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}