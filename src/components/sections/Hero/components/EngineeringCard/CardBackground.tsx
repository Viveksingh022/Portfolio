import { motion } from "framer-motion";

export default function CardBackground() {
  return (
    <>
      {/* Blue Glow */}

      <motion.div
        animate={{
          x: [-30, 40, -30],
          y: [-20, 30, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-500/15 blur-[120px]"
      />

      {/* Purple Glow */}

      <motion.div
        animate={{
          x: [30, -40, 30],
          y: [20, -30, 20],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]"
      />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Top Reflection */}

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
    </>
  );
}