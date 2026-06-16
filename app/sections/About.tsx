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
          subtitle="Profesional en formación especializado en hacking ético y pruebas de penetración."
        />

        <div className="max-w-3xl">
          <SlideUp delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Profesional en formación especializado en hacking ético y pruebas de penetración, con sólidos 
              conocimientos en reconocimiento, explotación de vulnerabilidades, escalada de privilegios y 
              elaboración de informes.
            </p>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Experiencia práctica demostrada mediante la resolución de más de 20 máquinas en plataformas CTF 
              (Hack The Box, VulnHub) cubriendo técnicas como OWASP Top 10, buffer overflow, escalada de 
              privilegios y post-explotación, complementada con proyectos personales de seguridad ofensiva 
              y defensiva.
            </p>
          </SlideUp>
          <SlideUp delay={0.3}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Comprometido con el aprendizaje continuo y la aplicación ética de las técnicas de ataque para 
              fortalecer la postura de seguridad de las organizaciones.
            </p>
          </SlideUp>
        </div>
      </div>
    </SectionWrapper>
  );
}
