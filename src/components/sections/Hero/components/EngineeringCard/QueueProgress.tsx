import { motion } from "framer-motion";
import useLiveMetrics from "../../../../../hooks/useLiveMetrics";

export default function QueueProgress() {
  const { queue } = useLiveMetrics();

  const percentage = Math.min((queue / 25) * 100, 100);

  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">

      <div className="mb-4 flex items-center justify-between">

        <h3 className="text-sm font-semibold text-white">
          Queue Utilization
        </h3>

        <span className="text-xs text-slate-400">
          {queue} / 25 Tasks
        </span>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-800">

        <motion.div
          animate={{
            width: `${percentage}%`,
          }}
          transition={{
            duration: 0.5,
          }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500"
        />

      </div>

      <div className="mt-3 flex justify-between text-xs text-slate-500">

        <span>Waiting</span>

        <span>{percentage.toFixed(0)}%</span>

      </div>

    </div>
  );
}