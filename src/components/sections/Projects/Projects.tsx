import { PROJECTS } from "../../../constants/project";

import { H2 } from "../../common/Typography";
import Section from "../../layout/Section";

import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  return (
    <Section
      id="projects"
      spacing="sm"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
        FEATURED WORK
      </p>

      <H2 className="mb-14">
        Projects
      </H2>

      <div className="space-y-10">

        {PROJECTS.map((project) => (

          <ProjectCard
            key={project.title}
            project={project}
          />

        ))}

      </div>

    </Section>
  );
}