export default function FloatingBadge() {
  return (
    <div
      aria-hidden="true"
      className="absolute right-4 top-4 hidden h-28 w-28 items-center justify-center rounded-full border border-spicknspan-bg/50 bg-spicknspan-bg/10 backdrop-blur-sm sm:flex md:right-6 md:top-6"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <path
            id="badge-circle"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text fill="#F7F4EE" fontSize="7.2" letterSpacing="2">
          <textPath href="#badge-circle" startOffset="2%">
            WHERE BEAUTY MEETS WELLNESS ✦
          </textPath>
        </text>
      </svg>
      <span className="absolute font-spicknspan-display text-lg text-spicknspan-bg">
        S&amp;S
      </span>
    </div>
  );
}