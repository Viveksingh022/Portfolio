type ProjectStatusProps = {
  status: "Completed" | "Active" | "Deployed" | "In-Progress";
};

export default function ProjectStatus({
  status,
}: ProjectStatusProps) {
  const styles = {
    Completed:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",

    Active:
      "border-blue-500/20 bg-blue-500/10 text-blue-400",

    Deployed:
      "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
    
      "In-Progress":
    "border-amber-500/20 bg-amber-500/10 text-amber-400",
  };

  return (
    <div
      className={`
        rounded-full
        border
        px-4
        py-2
        text-xs
        font-semibold
        uppercase
        tracking-[0.22em]
        ${styles[status]}
      `}
    >
      {status}
    </div>
  );
}