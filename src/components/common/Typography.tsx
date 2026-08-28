import type { HTMLAttributes, ReactNode } from "react";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export function H1({
  children,
  className = "",
  ...props
}: TypographyProps) {
  return (
    <h1
      className={`text-5xl font-bold tracking-tight lg:text-7xl ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className = "",
  ...props
}: TypographyProps) {
  return (
    <h2
      className={`text-4xl font-bold tracking-tight lg:text-5xl ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}

export function Body({
  children,
  className = "",
  ...props
}: TypographyProps) {
  return (
    <p
      className={`text-base leading-8 text-slate-300 lg:text-lg ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}