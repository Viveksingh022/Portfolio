import ProjectStatus from "./ProjectStatus";

type Props = {
  title: string;
  subtitle: string;
  status: "Completed" | "Active" | "Deployed" | "In-Progress";
};

export default function ProjectHeader({
  title,
  subtitle,
  status,
}: Props) {
  return (
    <div className="flex items-start justify-between gap-6">

      <div>

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-slate-400">
          {subtitle}
        </p>

      </div>

      <ProjectStatus status={status} />

    </div>
  );
}