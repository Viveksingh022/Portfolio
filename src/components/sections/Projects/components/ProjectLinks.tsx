import MagneticButton from "../../../common/MagneticButton";

type Props = {
  github: string;
};

export default function ProjectLinks({
  github,
}: Props) {
  return (
    <div className="flex gap-4">

      <MagneticButton
        href={github}
        target="_blank"
      >
        GitHub
      </MagneticButton>


    </div>
  );
}