"use client";

import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import Roadmap from "../components/Roadmap";
import { SlideUp } from "../components/animations";
import {
  BOSS_COMPLETED,
  COMPLETED_MODULE_IDS,
  ccnaDomains,
  ccnaModuleCount,
} from "@/lib/roadmaps/ccna";

export default function RoadmapCCNA() {
  const completed = COMPLETED_MODULE_IDS.length;
  const percent = Math.round((completed / ccnaModuleCount) * 100);

  return (
    <SectionWrapper id="roadmap-ccna">
      <SectionHeader
        title="Roadmap CCNA"
        section="roadmap-ccna"
        subtitle={`Mi camino hacia el CCNA 200-301: seis dominios del examen y ${ccnaModuleCount} módulos de estudio.`}
      />

      <SlideUp className="mb-16 grid gap-5 border-y border-border py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:items-center md:gap-12">
        <p className="label-mono text-muted-foreground">
          progreso{" "}
          <span className="text-foreground">
            {completed}/{ccnaModuleCount} módulos
          </span>
        </p>
        <div className="flex items-center gap-5">
          <div className="relative h-px flex-1 bg-border" role="presentation">
            <div
              className="absolute inset-y-0 left-0 bg-signal"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="label-mono w-12 text-right text-foreground">{percent}%</span>
        </div>
      </SlideUp>

      <Roadmap
        domains={ccnaDomains}
        completedIds={COMPLETED_MODULE_IDS}
        accent="var(--cisco)"
        boss={{
          title: "Examen CCNA 200-301",
          description:
            "El examen oficial de Cisco, que cubre los seis dominios anteriores. Lo presento cuando complete la ruta.",
          completed: BOSS_COMPLETED,
        }}
      />

      <p className="label-mono mt-10 text-muted-foreground">
        fuente: blueprint CCNA 200-301 v1.1 · base provisional, se ajustará con mi ruta de Hermes AI
      </p>
    </SectionWrapper>
  );
}
