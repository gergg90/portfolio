"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { ScrambleText, SlideUp, StaggerContainer, StaggerItem } from "../components/animations";
import {
  CURRENT_SEMESTER,
  DEGREE,
  PENSUM_URL,
  TOTAL_SEMESTERS,
  UNIVERSITY,
  completedSemesters,
  currentSubjects,
  upcomingHighlights,
} from "@/lib/formacion";

const pad = (n: number) => String(n).padStart(2, "0");
const semesters = Array.from({ length: TOTAL_SEMESTERS }, (_, i) => i + 1);

export default function Formacion() {
  return (
    <SectionWrapper id="formacion">
      <SectionHeader
        title="Formación"
        section="formacion"
        subtitle={`${DEGREE} en la ${UNIVERSITY}. Empiezo el primer semestre y la carrera se suma a mi perfil de redes y seguridad.`}
      />

      {/* Traza de semestres */}
      <SlideUp>
        <ol
          aria-label={`Semestres de ${DEGREE}`}
          className="grid grid-cols-5 gap-x-3 gap-y-8 md:grid-cols-10"
        >
          {semesters.map((n) => {
            const done = completedSemesters.includes(n);
            const current = n === CURRENT_SEMESTER;
            const status = done ? "hecho" : current ? "en curso" : "futuro";
            return (
              <li
                key={n}
                aria-current={current ? "step" : undefined}
                className={cn(
                  "border-t pt-3",
                  done ? "border-signal" : current ? "border-primary" : "border-border",
                )}
              >
                <p
                  className={cn(
                    "label-mono",
                    done ? "text-signal" : current ? "text-primary-ink" : "text-muted-foreground",
                  )}
                >
                  S{pad(n)}
                </p>
                <p className="label-mono mt-1 text-[10px] tracking-normal text-muted-foreground">
                  <ScrambleText text={status} />
                </p>
              </li>
            );
          })}
        </ol>
      </SlideUp>

      <div className="mt-20 grid gap-16 md:mt-28 lg:grid-cols-2 lg:gap-24">
        <div>
          <h3 className="label-mono mb-4 text-foreground">
            <ScrambleText text={`semestre ${pad(CURRENT_SEMESTER)} · en curso`} />
          </h3>
          <StaggerContainer
            className="grid border-y border-border md:grid-cols-2 md:gap-x-12"
            staggerDelay={0.05}
          >
            {currentSubjects.map((name, i) => (
              <StaggerItem key={name}>
                <div className="row-link flex items-baseline justify-between gap-6 py-4">
                  <span className="text-lg text-foreground">{name}</span>
                  <span className="label-mono shrink-0 text-muted-foreground">{pad(i + 1)}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div>
          <h3 className="label-mono mb-4 text-foreground">
            <ScrambleText text="más adelante en la carrera" />
          </h3>
          <StaggerContainer className="border-b border-border" staggerDelay={0.05}>
            {upcomingHighlights.map((s) => (
              <StaggerItem key={s.name}>
                <div className="row-link flex items-baseline justify-between gap-6 py-4">
                  <span className="text-lg text-muted-foreground">{s.name}</span>
                  <span className="label-mono shrink-0 text-foreground">S{pad(s.semester)}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <a
            href={PENSUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono link-draw mt-6 inline-flex items-center gap-2 text-foreground"
          >
            pensum oficial
            <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
