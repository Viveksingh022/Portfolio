import { motion } from "framer-motion";
import useLiveMetrics from "../../../../../hooks/useLiveMetrics";

export default function WorkerStatus() {
  const { workers } = useLiveMetrics();

  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">

      <div className="mb-5 flex items-center justify-between">

        <h3 className="text-sm font-semibold text-white">
          Worker Pool
        </h3>

        <motion.span
          key={workers}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-slate-500"
        >
          {workers} Online
        </motion.span>

      </div>

      <div className="space-y-3">

        {Array.from({ length: workers }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-4 py-3"
          >
            <span className="font-mono text-sm text-slate-300">
              Worker-{String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-2">

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-emerald-400"
              />

              <span className="text-xs font-semibold text-emerald-400">
                ACTIVE
              </span>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}