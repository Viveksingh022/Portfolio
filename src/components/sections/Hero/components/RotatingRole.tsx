import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { ROTATING_ROLES } from "../../../../constants/roles";
import AnimatedGradientText from "./AnimatedGradientText";

const ROTATE_INTERVAL_MS = 2000;

export default function RotatingRole() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const currentRole = ROTATING_ROLES[index];

  return (
    <span className="block">

      <span className="sr-only">
        {ROTATING_ROLES.join(", ")}
      </span>

      {/* Height is locked to exactly 2 lines using an em unit, so it
          scales with font-size and never leaves leftover empty space */}
      <span
        aria-hidden="true"
        className="
          relative
          block
          w-full
          h-[2.1em]
          overflow-hidden
          text-6xl
          font-black
          leading-[1.05]
          xl:text-[5.5rem]
        "
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentRole}
            initial={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 18 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -18 }
            }
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              inset-0
              block
              break-words
            "
          >
            <AnimatedGradientText>
              {currentRole}
            </AnimatedGradientText>
          </motion.span>
        </AnimatePresence>
      </span>

    </span>
  );
}