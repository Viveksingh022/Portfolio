import { motion, useMotionValue, useSpring } from "framer-motion";
import type {
  MouseEvent,
  ReactNode,
  ButtonHTMLAttributes,
} from "react";

type MagneticButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";

  href?: string;
  target?: string;
  download?: string;

  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function MagneticButton({
  children,
  variant = "primary",

  href,
  target,
  download,

  onClick,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, {
    stiffness: 150,
    damping: 12,
  });

  const mouseY = useSpring(y, {
    stiffness: 150,
    damping: 12,
  });

  function handleMove(
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) {
    if (disabled) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const classes = `
relative
overflow-hidden
rounded-2xl
px-8
py-4
text-base
font-semibold
transition-all
duration-300
cursor-pointer

hover:-translate-y-1
hover:scale-[1.02]

disabled:opacity-60
disabled:cursor-not-allowed

${
  variant === "primary"
    ? "bg-blue-600 text-white shadow-[0_15px_40px_rgba(37,99,235,0.35)] hover:bg-blue-500"
    : "border border-white/10 bg-white/5 text-white backdrop-blur-md hover:border-blue-500/60 hover:bg-white/10"
}
`;

  const content = (
    <>
      {!disabled && (
        <motion.div
          className="absolute inset-0 bg-white/10"
          initial={{ x: "-120%" }}
          whileHover={{ x: "120%" }}
          transition={{ duration: 0.7 }}
          style={{
            skewX: "-25deg",
          }}
        />
      )}

      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        download={download}
        style={{
          x: mouseX,
          y: mouseY,
        }}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        whileTap={{ scale: 0.97 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        x: mouseX,
        y: mouseY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}