import type { HTMLAttributes, ReactNode } from "react";

interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export function Display({
  children,
  className = "",
  ...props
}: TextProps) {
  return (
    <h1
      className={`text-5xl font-black tracking-tight lg:text-7xl xl:text-8xl ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export function Heading({
  children,
  className = "",
  ...props
}: TextProps) {
  return (
    <h2
      className={`text-3xl font-bold tracking-tight lg:text-5xl ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}

export function SubHeading({
  children,
  className = "",
  ...props
}: TextProps) {
  return (
    <h3
      className={`text-xl font-semibold lg:text-2xl ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function Paragraph({
  children,
  className = "",
  ...props
}: TextProps) {
  return (
    <p
      className={`text-base leading-8 text-slate-400 lg:text-lg ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}