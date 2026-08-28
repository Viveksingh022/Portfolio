import { motion } from "framer-motion";
import JourneyTimeline from "./JourneyTimeline";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-blue-400">
          About Me
        </p>

        <h2 className="max-w-xl text-5xl font-black leading-tight text-white">
          Building software
          <br />
          that scales with
          <br />
          quality & purpose.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
          I'm Vivek Singh Sikarwar, a Computer Science student passionate about backend
          engineering, distributed systems, cloud technologies and building
          production-ready applications. I enjoy solving difficult engineering
          problems and continuously learning modern technologies.
        </p>
      </div>

      <JourneyTimeline />
    </motion.div>
  );
}