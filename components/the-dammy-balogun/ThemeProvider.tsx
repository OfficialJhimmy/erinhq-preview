"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "damilola-theme";
const ROOT_ID = "damilola-root";

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialized from whatever class the inline script (in layout.tsx)
  // already applied to the wrapper before hydration, so this doesn't
  // cause a mismatch or a flash of the wrong theme.
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const root = document.getElementById(ROOT_ID);
    if (root?.classList.contains("dark")) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.getElementById(ROOT_ID);
    if (root) {
      root.classList.remove("dark", "light");
      root.classList.add(next);
    }
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}