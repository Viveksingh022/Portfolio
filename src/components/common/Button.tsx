import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20",

  secondary:
    "bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/20",

  outline:
    "border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-100",
};

export default function Button({
  children,
  variant = "primary",
  loading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled = false,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-6
        py-3
        font-semibold
        transition-all
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${variants[variant]}
        ${className}
      `}
    >
      {loading ? (
        "Loading..."
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </motion.button>
  );
}