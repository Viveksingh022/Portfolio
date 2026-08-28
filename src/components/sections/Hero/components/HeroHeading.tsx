import RotatingRole from "./RotatingRole";

export default function HeroHeading() {
  return (
    <div className="space-y-5">
      <h1 className="leading-[1.05] tracking-[-0.05em]">
        <RotatingRole />
      </h1>
    </div>
  );
}
