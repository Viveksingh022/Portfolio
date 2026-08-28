import { motion } from "framer-motion";

const logs = [
  {
    type: "SUCCESS",
    message: "Worker-02 completed task #143",
  },
  {
    type: "INFO",
    message: "Priority queue reordered",
  },
  {
    type: "SUCCESS",
    message: "Task #144 assigned",
  },
  {
    type: "INFO",
    message: "Database connection healthy",
  },
];

export default function LiveLogs() {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03]">

      <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">

        <h3 className="text-sm font-semibold text-white">
          Live Logs
        </h3>

        <div className="flex items-center gap-2">

          <motion.div
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
            }}
            className="h-2 w-2 rounded-full bg-emerald-400"
          />

          <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">
            Streaming
          </span>

        </div>

      </div>

      <div className="space-y-3 p-5">

        {logs.map((log, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.12,
            }}
            className="flex gap-4 rounded-xl border border-white/5 bg-black/20 px-4 py-3"
          >

            <div
              className={`mt-1 h-2 w-2 rounded-full ${
                log.type === "SUCCESS"
                  ? "bg-emerald-400"
                  : "bg-sky-400"
              }`}
            />

            <div>

              <p className="font-mono text-sm text-slate-200">
                {log.message}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Just now
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}