"use client";

import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { ScrollWords, SlideUp } from "../components/animations";

const manifesto =
  "Aprendo la red desde abajo: cómo se enruta un paquete, cómo se segmenta una LAN y por dónde entra un atacante. Hoy preparo el CCNA 200-301 con una ruta de estudio trazada con Hermes AI, y construyo aplicaciones con IA agéntica, Claude Code incluido. Redes, seguridad e IA: tres capas del mismo oficio.";

const facts = [
  { term: "Foco", detail: "CCNA 200-301, en curso" },
  { term: "Cisco NetAcad", detail: "7 certificaciones en Credly" },
  { term: "Hack4u", detail: "4 diplomas de seguridad y Linux" },
  { term: "Universidad", detail: "Ing. en Informática, UAH · semestre 01" },
  { term: "IA", detail: "Apps con agentes: Claude Code y Hermes AI" },
];

export default function About() {
  return (
    <SectionWrapper id="sobre-mi">
      <SectionHeader title="Sobre mí" section="sobre-mi" />

      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-24">
        <ScrollWords
          text={manifesto}
          highlight={["red", "CCNA", "IA", "agéntica,", "seguridad"]}
          className="max-w-[34ch] text-[clamp(1.6rem,3.6vw,2.75rem)] font-medium leading-[1.2] tracking-[-0.02em] text-foreground"
        />

        <SlideUp delay={0.1} className="self-end">
          <dl className="divide-y divide-border border-y border-border">
            {facts.map((fact) => (
              <div key={fact.term} className="flex flex-col gap-1 py-4">
                <dt className="label-mono text-muted-foreground">{fact.term}</dt>
                <dd className="text-foreground">{fact.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Formación práctica en hacking ético, pentesting web y seguridad defensiva con Wazuh, siempre
            orientada a entender y proteger la red.
          </p>
        </SlideUp>
      </div>
    </SectionWrapper>
  );
}
