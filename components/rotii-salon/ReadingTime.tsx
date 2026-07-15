export default function ReadingTime({ time }: { time: string }) {
  return (
    <span className="flex items-center gap-1.5 font-rotii-sans text-xs uppercase tracking-wide text-rotii-ink/45">
      {time}
    </span>
  );
}