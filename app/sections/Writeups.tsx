"use client";

import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { SlideUp } from "../components/animations";

export default function Writeups() {
  return (
    <SectionWrapper id="writeups">
      <SectionHeader
        title="Writeups"
        path="/writeups/"
        hop={6}
        subtitle="Writeups de máquinas y explicaciones técnicas de redes y seguridad."
      />

      <SlideUp className="flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-end md:justify-between">
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          Estoy preparando los primeros: ARP y DNS spoofing, y cómo se detectan desde el lado defensivo.
        </p>
        <p className="label-mono text-muted-foreground">
          estado: <span className="text-foreground">en desarrollo</span>
        </p>
      </SlideUp>
    </SectionWrapper>
  );
}
