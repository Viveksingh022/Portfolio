import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        border-blue-500/20
        bg-blue-500/10
        px-3
        py-1
        text-sm
        font-medium
        text-blue-400
        backdrop-blur-md
        ${className}
      `}
    >
      {children}
    </span>
  );
}