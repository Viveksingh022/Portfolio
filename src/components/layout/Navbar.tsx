import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Lightbulb,
  FolderKanban,
  FileText,
  MessageSquare,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useScrollPosition from "../../hooks/useScrollPosition";
import ThemeToggle from "../common/ThemeToggle";

// Har group ke beech thin divider aayega — jaise image me hai
type NavIcon = {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
};

const groups: NavIcon[][] = [
  [
    { id: "home", label: "Home", href: "#home", icon: <Home size={20} /> },
    { id: "about", label: "About", href: "#about", icon: <User size={20} /> },
  ],
  [
    {
      id: "skills",
      label: "Skills",
      href: "#skills",
      icon: <Lightbulb size={20} />,
    },
    {
      id: "projects",
      label: "Projects",
      href: "#projects",
      icon: <FolderKanban size={20} />,
    },
  ],
  [
    {
      id: "resume",
      label: "Resume",
      href: "/vivekSinghSikarwar resume final.pdf",
      icon: <FileText size={20} />,
    },
    {
      id: "contact",
      label: "Contact",
      href: "#contact",
      icon: <MessageSquare size={20} />,
    },
  ],
  [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/Viveksingh022",
      icon: <FaGithub size={20} />,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vivek-singh-sikarwar-8503822b5/",
      icon: <FaLinkedin size={20} />,
    },
  ],
];

export default function Navbar() {
  const scrolled = useScrollPosition();
  const [active, setActive] = useState<string | null>(null);

  return (
    <motion.header
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -40, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 pt-6 sm:px-8"
    >
      <a href="#home" className="hidden flex-col leading-tight sm:flex">
        <span className="text-3xl font-black text-white sm:text-2xl">
          Vivek Singh Sikarwar
        </span>

        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
          FullStack Developer
        </span>
      </a>

      <nav
        className={`flex items-center gap-1 rounded-2xl border px-3 py-3 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-slate-950/70 shadow-2xl backdrop-blur-2xl"
            : "border-white/5 bg-slate-950/40 backdrop-blur-xl"
        }`}
      >
        {groups.map((group, gIndex) => (
          <div key={gIndex} className="flex items-center">
            {group.map((item) => (
              <NavIcon
                key={item.id}
                item={item}
                isActive={active === item.id}
                onHover={() => setActive(item.id)}
                onLeave={() => setActive(null)}
              />
            ))}

            {gIndex < groups.length - 1 && (
              <div className="mx-2 h-8 w-px bg-white/10" />
            )}
          </div>
        ))}
      </nav>

      <div className="hidden sm:block">
        <ThemeToggle />
      </div>
    </motion.header>
  );
}

function NavIcon({
  item,
  isActive,
  onHover,
  onLeave,
}: {
  item: NavIcon;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div className="relative flex flex-col items-center">
      <motion.a
        href={item.href}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 ${
          isActive
            ? "border-sky-400/60 bg-sky-500/10 text-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.45)]"
            : "border-white/10 bg-white/5 text-sky-300/80 hover:border-sky-400/40 hover:text-sky-400"
        }`}
      >
        {item.icon}
      </motion.a>

      {/* Tooltip — icon ke neeche fade + slide ke saath */}
      <AnimatePresence>
        {isActive && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 6 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-1 whitespace-nowrap rounded-lg border border-white/10 bg-slate-900/95 px-3 py-1 text-xs font-medium text-white shadow-lg"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
