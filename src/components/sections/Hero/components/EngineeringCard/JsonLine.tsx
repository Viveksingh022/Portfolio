type JsonLineProps = {
  keyName: string;
  value: string;
};

export default function JsonLine({
  keyName,
  value,
}: JsonLineProps) {
  return (
    <div className="group flex items-center rounded-lg px-3 py-2 transition-all duration-200 hover:bg-white/[0.03]">

      <span className="mr-6 w-6 text-right text-xs text-slate-600">
        :
      </span>

      <span className="text-sky-400">
        "{keyName}"
      </span>

      <span className="mx-3 text-slate-500">
        :
      </span>

      <span
        className={`${
          value.startsWith('"')
            ? "text-emerald-400"
            : "text-violet-400"
        }`}
      >
        {value}
      </span>

    </div>
  );
}