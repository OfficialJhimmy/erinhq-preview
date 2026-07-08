import { instrumentSerif, schibstedGrotesk } from "./fonts";

export default function EbelesWorldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${instrumentSerif.variable} ${schibstedGrotesk.variable} font-ebele-sans min-h-screen`}
    >
      {children}
    </div>
  );
}