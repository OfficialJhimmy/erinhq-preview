import { ThemeProvider } from "@/components/the-dammy-balogun/ThemeProvider";
import { canela, generalSans, alexBrush, geistMono } from "./fonts";

// Runs before hydration to avoid a flash of the wrong theme.
const noFlashScript = `
(function () {
  try {
    var stored = localStorage.getItem('damilola-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var root = document.getElementById('damilola-root');
    if (root) root.classList.add(theme);
  } catch (e) {}
})();
`;

export default function DamilolaBalogunLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="damilola-root"
      className={`${canela.variable} ${generalSans.variable} ${alexBrush.variable} ${geistMono.variable} font-damilola-sans min-h-screen bg-damilola-bone text-damilola-graphite dark:bg-damilola-graphite dark:text-damilola-bone`}
    >
      <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      <ThemeProvider>{children}</ThemeProvider>
    </div>
  );
}