import { motion } from "framer-motion";

const focus = [
  "FastAPI",
  "React",
  "Jenkins",
  "Docker",
  "SQL",
  "AWS",
  "DSA",
  "System Design",
];

export default function CurrentFocus() {
  return (
    <section>
      <h3 className="mb-6 text-2xl font-bold text-white">
        Current Focus
      </h3>

      <div className="flex flex-wrap gap-4">
        {focus.map((item, index) => (
          <motion.div
            key={item}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.05,
            }}
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-sm font-medium text-blue-300 transition-all"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}