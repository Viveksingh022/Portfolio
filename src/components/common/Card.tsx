import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-800/60
        bg-slate-900/60
        backdrop-blur-xl
        shadow-lg
        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-blue-500/30
        hover:bg-slate-900/80
        hover:shadow-[0_20px_60px_rgba(59,130,246,0.08)]

        ${className}
      `}
      {...props}
    >
      {/* Glow Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top Shine */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/[0.04] to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}