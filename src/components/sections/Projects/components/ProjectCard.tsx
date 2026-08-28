import type { Project } from "../../../../types/project";

import Card from "../../../common/Card";

import ProjectHeader from "./ProjectHeader";
import ProjectStats from "./ProjectStats";
import ProjectTech from "./ProjectTech";
import ProjectLinks from "./ProjectLinks";

type Props = {
  project: Project;
};

export default function ProjectCard({
  project,
}: Props) {
  return (
    <Card className="group p-8">

      <ProjectHeader
        title={project.title}
        subtitle={project.subtitle}
        status={project.status}
      />

      <p className="mt-8 leading-8 text-slate-400">
        {project.description}
      </p>

      <div className="mt-8">

        <h4 className="mb-4 text-lg font-semibold text-white">
          Key Features
        </h4>

        <div className="grid grid-cols-2 gap-3">

          {project.features.map((feature) => (

            <div
              key={feature}
              className="flex items-center gap-3 text-slate-300"
            >
              <div className="h-2 w-2 rounded-full bg-blue-500" />

              {feature}

            </div>

          ))}

        </div>

      </div>

      <div className="mt-10">
        <ProjectTech tech={project.tech} />
      </div>

      {project.metrics.length > 0 && (
        <div className="mt-10">
          <ProjectStats metrics={project.metrics} />
        </div>
      )}

      <div className="mt-10">
        <ProjectLinks
          github={project.github}
        />
      </div>

    </Card>
  );
}