import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import type { Project } from "../../../../../types/projects";

interface ProjectSwitcherProps {
  projects: Project[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProjectSwitcher({
  projects,
  selectedIndex,
  setSelectedIndex,
}: ProjectSwitcherProps) {
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((current) => (current + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [projects.length, setSelectedIndex]);

  const project = projects[selectedIndex];

  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
      <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-slate-500">
        Current Project
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-lg font-bold text-white">
            {project.title}
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            {project.subtitle}
          </p>

          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"
              initial={{ width: 0 }}
              animate={{ width: `${project.progress}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}