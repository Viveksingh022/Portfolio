import type { Project } from "../../../../../types/projects";

interface CardHeaderProps {
  project: Project;
}

export default function CardHeader({ project }: CardHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 px-7 py-5">
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />

          <div className="h-3 w-3 rounded-full bg-yellow-400" />

          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <div>
          <p className="text-sm font-medium text-white">
            engineering.json
          </p>

          <p className="text-xs text-slate-500">
            {project.subtitle}
          </p>
        </div>
      </div>

      <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
          {project.status}
        </span>
      </div>
    </div>
  );
}