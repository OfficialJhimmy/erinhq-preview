import { services } from "./serviceData";

export default function ServiceProgress({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="sticky top-1/2 hidden -translate-y-1/2 flex-col items-center gap-6 lg:flex">
      {services.map((service, i) => (
        <span
          key={service.number}
          className={`font-rotii-sans text-xs transition-colors duration-500 ${
            i === activeIndex ? "font-medium text-rotii-rosewood" : "text-rotii-ink/25"
          }`}
        >
          {service.number}
        </span>
      ))}
    </div>
  );
}