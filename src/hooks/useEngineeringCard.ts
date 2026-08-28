import { useEffect, useState } from "react";
import { engineeringProjects } from "../constants/engineeringCard";

export default function useEngineeringCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % engineeringProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return engineeringProjects[index];
}