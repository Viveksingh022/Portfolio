import Section from "../../layout/Section";

import SocialLinks from "../../common/SocialLinks";

import HeroBadge from "./components/HeroBadge";
import HeroHeading from "./components/HeroHeading";
import HeroDescription from "./components/HeroDescription";
import HeroActions from "./components/HeroActions";
import HeroTechRibbon from "./HeroTechRibbon";
import HeroEngineeringCard from "./components/HeroEngineeringCard";
import HeroParallax from "./components/HeroParallax";
import HeroBackground from "./components/HeroBackground";

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative overflow-hidden pt-36 pb-12 lg:pt-35"
    >
      <HeroBackground />

      <div className="grid items-start gap-14 lg:grid-cols-[1fr_0.95fr]">
        <div className="flex flex-col">
          <div className="space-y-7">
            <HeroBadge />

            <HeroHeading />

            <HeroDescription />

            <HeroActions />
          </div>

          <div className="mt-auto pt-10 space-y-8">
            <HeroTechRibbon />

            <SocialLinks />
          </div>
        </div>

        <div className="lg:ml-6">
          <HeroParallax>
            <HeroEngineeringCard />
          </HeroParallax>
        </div>
      </div>
    </Section>
  );
}
