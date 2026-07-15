import { bodoniModa, manrope } from "./fonts";

export default function RotiiSalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${bodoniModa.variable} ${manrope.variable} font-rotii-sans min-h-screen bg-white text-rotii-ink`}
    >
      {children}
    </div>
  );
}