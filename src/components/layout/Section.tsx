import type { HTMLAttributes, ReactNode } from "react";
import Container from "../common/Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  id?: string;

  spacing?: "none" | "sm" | "md" | "lg";
}

export default function Section({
  children,
  className = "",
  id,
  spacing = "md",
  ...props
}: SectionProps) {
  const spacingClasses = {
    none: "",
    sm: "py-12 lg:py-16",
    md: "py-16 lg:py-20",
    lg: "py-24 lg:py-32",
  };

  return (
    <section
      id={id}
      className={`${spacingClasses[spacing]} ${className}`}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}