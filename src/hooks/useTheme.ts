import { useEffect, useState } from "react";

export type Theme = "default" | "dark" | "light";

const STORAGE_KEY = "portfolio-theme";
const THEME_ORDER: Theme[] = ["default", "dark", "light"];

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "default";

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (stored === "default" || stored === "dark" || stored === "light") {
    return stored;
  }

  return "default";
}

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => {
      const currentIndex = THEME_ORDER.indexOf(prev);
      const nextIndex = (currentIndex + 1) % THEME_ORDER.length;
      return THEME_ORDER[nextIndex];
    });
  };

  return {
    theme,
    cycleTheme,
  };
}