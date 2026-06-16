"use client";

import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { SlideUp } from "../components/animations";

export default function About() {
  return (
    <SectionWrapper id="sobre-mi" className="bg-secondary/30">
      <div className="flex flex-col gap-6">
        <SectionHeader 
          title="Sobre Mí" 
          subtitle="Apasionado por la ciberseguridad, siempre aprendiendo y rompiendo cosas (éticamente)."
        />

        <div className="max-w-3xl">
          <SlideUp delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </SlideUp>
        </div>
      </div>
    </SectionWrapper>
  );
}
