import { useEffect, useState } from "react";

export default function useLiveMetrics() {
  const [metrics, setMetrics] = useState({
    workers: 4,
    queue: 17,
    latency: 12,
    retries: 2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        workers: 4,
        queue: Math.floor(Math.random() * 15) + 10,
        latency: Math.floor(Math.random() * 8) + 8,
        retries: Math.floor(Math.random() * 3),
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return metrics;
}