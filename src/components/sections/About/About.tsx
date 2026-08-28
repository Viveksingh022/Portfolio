import Section from "../../layout/Section";

import AboutContent from "./components/AboutContent";
import AboutCard from "./components/AboutCard";

export default function About() {
  return (
    <Section
    id="about"
    spacing="sm"
>
      <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <AboutContent />

        <AboutCard />
      </div>
    </Section>
  );
}