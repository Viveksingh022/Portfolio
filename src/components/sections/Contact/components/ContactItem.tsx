import type { ReactNode } from "react";

type ContactItemProps = {
  icon: ReactNode;
  title: string;
  value: string;
  href: string;
};

export default function ContactItem({
  icon,
  title,
  value,
  href,
}: ContactItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
      flex
      items-center
      gap-5
      rounded-2xl
      border
      border-slate-800/60
      bg-slate-900/60
      p-5
      transition-all
      duration-300

      hover:-translate-y-1
      hover:border-blue-500/40
      hover:bg-slate-900/80
      "
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 text-2xl">
        {icon}
      </div>

      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          {title}
        </p>

        <p className="mt-1 font-medium text-white">
          {value}
        </p>
      </div>
    </a>
  );
}