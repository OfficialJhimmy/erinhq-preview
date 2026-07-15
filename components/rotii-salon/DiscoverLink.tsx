export default function DiscoverLink({ label }: { label: string }) {
  return (
    <a href="#booking" className="group inline-flex items-center gap-2">
      <span className="font-rotii-sans text-xs font-medium uppercase tracking-widest text-rotii-rosewood transition-transform duration-300 group-hover:-translate-y-0.5">
        {label}
      </span>
      <span className="relative flex items-center">
        <span className="h-px w-8 bg-rotii-rosewood/40 transition-all duration-500 ease-out group-hover:w-14 group-hover:bg-rotii-rosewood" />
        <span className="ml-1 text-rotii-rosewood transition-transform duration-300 group-hover:translate-x-1.5">
          →
        </span>
      </span>
    </a>
  );
}