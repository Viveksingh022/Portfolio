import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Background Grid */}
      <div
        className="
          absolute inset-0
          -z-30
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:42px_42px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]
        "
      />

      {/* Blue Orb */}
      <motion.div
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-52
          top-20
          -z-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/20
          blur-[140px]
        "
      />

      {/* Purple Orb */}
      <motion.div
        animate={{
          x: [0, -70, 20, 0],
          y: [0, 60, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-180px]
          bottom-[-120px]
          -z-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-600/20
          blur-[150px]
        "
      />

      {/* Radial Fade */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_center,transparent_0%,#020617_90%)]
        "
      />
    </>
  );
}