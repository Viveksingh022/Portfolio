import type { ProjectMetric } from "../../../../types/project";

type Props = {
  metrics: ProjectMetric[];
};

export default function ProjectStats({
  metrics,
}: Props) {
  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: `repeat(${metrics.length}, minmax(0, 1fr))`,
      }}
    >

      {metrics.map((metric) => (

        <div
          key={metric.label}
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-5
            text-center
          "
        >

          <h4 className="text-3xl font-bold text-white">
            {metric.value}
          </h4>

          <p className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-500">
            {metric.label}
          </p>

        </div>

      ))}

    </div>
  );
}