type Props = {
  tech: string[];
};

export default function ProjectTech({
  tech,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">

      {tech.map((item) => (

        <span
          key={item}
          className="
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-blue-300
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-blue-400
            hover:bg-blue-500/20
          "
        >
          {item}
        </span>

      ))}

    </div>
  );
}