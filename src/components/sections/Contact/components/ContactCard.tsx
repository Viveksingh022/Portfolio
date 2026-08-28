type Props = {
  children: React.ReactNode;
};

export default function ContactCard({
  children,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-800/60
      bg-slate-900/60
      p-8
      backdrop-blur-xl
      shadow-lg
      "
    >
      {children}
    </div>
  );
}