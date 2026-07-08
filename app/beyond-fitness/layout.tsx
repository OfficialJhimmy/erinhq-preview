import { fraunces, hankenGrotesk } from "./fonts";

export default function BeyondFitnessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${fraunces.variable} ${hankenGrotesk.variable} font-beyond-sans min-h-screen`}>
      {children}
    </div>
  );
}