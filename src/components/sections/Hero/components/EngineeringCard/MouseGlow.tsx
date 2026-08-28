import { motion, useMotionValue, useSpring } from "framer-motion";
import type { RefObject } from "react";

type Props = {
  containerRef: RefObject<HTMLDivElement | null>;
};

export default function MouseGlow({ containerRef }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, {
    stiffness: 250,
    damping: 35,
  });

  const mouseY = useSpring(y, {
    stiffness: 250,
    damping: 35,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  return (
    <div
      onMouseMove={handleMove}
      className="absolute inset-0 z-0"
    >
      <motion.div
        style={{
          left: mouseX,
          top: mouseY,
        }}
        className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[90px]"
      />
    </div>
  );
}