import { useEffect, useState } from "react";
import { getLeetcodeStats } from "../services/leetcodeService";
import { PROFILE } from "../constants/profile";

export default function useLeetcodeStats() {
  const [solved, setSolved] = useState(PROFILE.dsaSolved);

  useEffect(() => {
    async function load() {
      try {
        const stats = await getLeetcodeStats();

        if (stats.solved > 0) {
          setSolved(stats.solved);
        }
      } catch {
        // Keep the fallback value from PROFILE
      }
    }

    load();
  }, []);

  return {
    solved,
  };
}