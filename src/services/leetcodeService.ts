import type { LeetcodeStats } from "../types/leetcode";
import { LEETCODE_USERNAME } from "../constants/profile";

export async function getLeetcodeStats(): Promise<LeetcodeStats> {
  const response = await fetch(
    `https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch LeetCode stats");
  }

  const json = await response.json();

  return {
    solved: json.totalSolved,
  };
}