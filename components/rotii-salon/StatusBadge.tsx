export default function StatusBadge() {
  return (
    <div className="mt-5 flex items-center gap-3 rounded-xl bg-rotii-blush/20 px-4 py-3">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rotii-rosewood opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-rotii-rosewood" />
      </span>
      <div>
        <p className="font-rotii-sans text-sm font-medium text-rotii-ink">Grand Opening Coming Soon</p>
        <p className="font-rotii-sans text-xs text-rotii-ink/50">Hours shown are illustrative</p>
      </div>
    </div>
  );
}