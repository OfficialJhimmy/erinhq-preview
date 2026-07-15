export default function FloatingInfoCard() {
  return (
    <div className="absolute bottom-6 left-6 max-w-[220px] rounded-2xl border border-white/30 bg-black/30 p-5 backdrop-blur-md">
      <ul className="space-y-3">
        <li>
          <p className="font-rotii-sans text-sm font-medium text-white">Private Suite</p>
          <p className="font-rotii-sans text-xs text-white/70">Your own serene space</p>
        </li>
        <li>
          <p className="font-rotii-sans text-sm font-medium text-white">Personal Touch</p>
          <p className="font-rotii-sans text-xs text-white/70">
            Consultation, refreshments and luxury care
          </p>
        </li>
      </ul>
    </div>
  );
}