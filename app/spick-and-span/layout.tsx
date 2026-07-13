import { italiana, jost } from "./fonts";

export default function SpickAndSpanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${italiana.variable} ${jost.variable} font-spicknspan-sans min-h-screen bg-spicknspan-bg text-spicknspan-dark`}
    >
      {children}
    </div>
  );
}