import MagneticButton from "../../../common/MagneticButton";

export default function HeroActions() {


  return (
    <div className="flex items-center gap-5 pt-3">

      <MagneticButton href="#projects">
      View Projects
    </MagneticButton>

      <MagneticButton
  href="/vivekSinghSikarwar resume final.pdf"
  download="vivek-singh-resume.pdf"
  variant="secondary"
>
  Download Resume
</MagneticButton>

    </div>
  );
}