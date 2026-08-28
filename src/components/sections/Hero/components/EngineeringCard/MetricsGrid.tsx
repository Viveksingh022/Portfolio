import { AnimatePresence, motion } from "framer-motion";
import { PROFILE } from "../../../../../constants/profile";
import useLeetcodeStats from "../../../../../hooks/useLeetcodeStats";

export default function MetricsGrid() {
  const { solved } = useLeetcodeStats();

  const cards = [
    {
      label: "Projects",
      value: PROFILE.projects,
    },
    {
      label: "DSA Solved",
      value: solved,
    },
    {
      label: "Certifications",
      value: PROFILE.certifications,
    },
    {
      label: "Research Papers",
      value: PROFILE.researchPapers,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-2xl border border-white/5 bg-white/[0.03] p-5"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            {card.label}
          </p>

          <AnimatePresence mode="wait">
            <motion.h3
              key={String(card.value)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-3 text-3xl font-bold text-white"
            >
              {card.value}
            </motion.h3>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}