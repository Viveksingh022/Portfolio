import { useRef } from "react";

import useSelectedProject from "../../../../hooks/useSelectedProject";

import CardBackground from "./EngineeringCard/CardBackground";
import CardHeader from "./EngineeringCard/CardHeader";
import JsonViewer from "./EngineeringCard/JsonViewer";
import MetricsGrid from "./EngineeringCard/MetricsGrid";
import MouseGlow from "./EngineeringCard/MouseGlow";
import ProjectSwitcher from "./EngineeringCard/ProjectSwitcher";

export default function HeroEngineeringCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const {
    project,
    projects,
    selectedIndex,
    setSelectedIndex,
  } = useSelectedProject();

  return (
    <div
      ref={cardRef}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-[#0B1220]/90
        shadow-[0_20px_80px_rgba(0,0,0,0.40)]
        backdrop-blur-xl
        transition-all
        duration-500
        group-hover:scale-[1.01]
        group-hover:border-blue-500/20
      "
    >
      <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-white/5" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent" />

      <CardBackground />

      <MouseGlow containerRef={cardRef} />

      <div className="relative z-10">
        <CardHeader project={project} />

        <div className="space-y-1.5 p-2.5">
          <ProjectSwitcher
            projects={projects}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />

          <JsonViewer project={project} />

          <MetricsGrid />
        </div>
      </div>
    </div>
  );
}