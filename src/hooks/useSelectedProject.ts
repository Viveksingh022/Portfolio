import { useState } from "react";
import { PROJECTS } from "../constants/engineeringProjects";

export default function useSelectedProject() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const project = PROJECTS[selectedIndex];

  return {
    project,
    selectedIndex,
    setSelectedIndex,
    projects: PROJECTS,
  };
}