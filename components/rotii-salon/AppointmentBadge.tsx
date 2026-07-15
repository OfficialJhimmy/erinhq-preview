export default function AppointmentBadge() {
  return (
    <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rotii-rosewood opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-rotii-rosewood" />
      </span>
      <span className="font-rotii-sans text-xs font-medium uppercase tracking-wide text-rotii-ink">
        Grand Opening Coming Soon
      </span>
    </div>
  );
}