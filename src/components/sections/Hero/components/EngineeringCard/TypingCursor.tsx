import { motion } from "framer-motion";

export default function TypingCursor() {
  return (
    <motion.span
      animate={{
        opacity: [1, 0, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="ml-1 inline-block h-5 w-[2px] bg-blue-400 align-middle"
    />
  );
}