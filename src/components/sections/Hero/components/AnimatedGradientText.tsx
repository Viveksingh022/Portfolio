import { motion } from "framer-motion";

type AnimatedGradientTextProps = {
  children: React.ReactNode;
};

export default function AnimatedGradientText({
  children,
}: AnimatedGradientTextProps) {
  return (
    <motion.span
      animate={{
        backgroundPosition: [
          "0% 50%",
          "100% 50%",
          "0% 50%",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        bg-[linear-gradient(90deg,#60A5FA,#3B82F6,#8B5CF6,#60A5FA)]
        bg-[length:300%_300%]
        bg-clip-text
        text-transparent
      "
    >
      {children}
    </motion.span>
  );
}