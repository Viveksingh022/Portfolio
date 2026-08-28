import { Moon, Sun } from "lucide-react";
import useTheme from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, cycleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      onClick={cycleTheme}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.2)] transition-colors hover:border-sky-400/40 hover:text-sky-400"
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
