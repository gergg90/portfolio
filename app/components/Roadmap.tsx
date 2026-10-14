"use client";

import { CSSProperties, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrambleText } from "./animations";
import type { RoadmapDomain } from "@/lib/roadmaps/ccna";

interface RoadmapProps {
  domains: RoadmapDomain[];
  completedIds: string[];
  /** Color de la traza y del nodo en curso, como valor CSS. */
  accent: string;
  boss: { title: string; description: string; completed: boolean };
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Ruta vertical por dominios y módulos. La traza se dibuja con el scroll. */
export default function Roadmap({ domains, completedIds, accent, boss }: RoadmapProps) {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const traceScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // El primer módulo sin completar es el que está en curso
  const currentId =
    domains.flatMap((d) => d.modules).find((m) => !completedIds.includes(m.id))?.id ?? null;

  return (
    <ol ref={listRef} className="relative" style={{ "--accent": accent } as CSSProperties}>
      <div aria-hidden className="absolute inset-y-0 left-[0.6rem] w-px bg-border" />
      <motion.div
        aria-hidden
        style={{ scaleY: traceScale }}
        className="absolute inset-y-0 left-[0.6rem] w-px origin-top bg-[var(--accent)]"
      />

      {domains.map((d) => {
        const doneCount = d.modules.filter((m) => completedIds.includes(m.id)).length;
        const domainDone = doneCount === d.modules.length;
        const domainCurrent = d.modules.some((m) => m.id === currentId);
        const status = domainDone ? "completado" : domainCurrent ? "en curso" : "pendiente";

        return (
          <li
            key={d.id}
            className="relative grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-6 py-12 md:py-16"
          >
            <span
              aria-hidden
              className={cn(
                "relative z-10 mt-2 flex size-5 items-center justify-center rounded-full border bg-background",
                domainDone && "border-signal bg-signal text-background",
                domainCurrent && "border-[var(--accent)] shadow-[0_0_0_4px_var(--background)]",
                !domainDone && !domainCurrent && "border-border",
              )}
            >
              {domainDone && <Check className="size-3" strokeWidth={2.5} />}
            </span>

            <div className="md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] md:gap-16">
              <div className="flex flex-col gap-4">
                <p className="label-mono flex items-center gap-3 text-muted-foreground">
                  <span>{pad(d.id)}</span>
                  <span aria-hidden className="h-px w-6 bg-border" />
                  <span>{d.weight}% del examen</span>
                </p>
                <h3 className="font-display text-[clamp(1.75rem,4vw,3.25rem)] text-foreground">
                  {d.title}
                </h3>
                <p className="max-w-prose text-lg leading-relaxed text-muted-foreground">
                  {d.description}
                </p>

                <ol className="mt-2 divide-y divide-border border-y border-border">
                  {d.modules.map((m) => {
                    const done = completedIds.includes(m.id);
                    const current = m.id === currentId;
                    return (
                      <li key={m.id} className="flex items-baseline gap-4 py-3">
                        <span
                          className={cn(
                            "label-mono w-10 shrink-0",
                            done ? "text-signal" : current ? "text-cisco" : "text-muted-foreground",
                          )}
                        >
                          {m.id}
                        </span>
                        <span
                          className={cn(
                            "min-w-0 flex-1",
                            done || current ? "text-foreground" : "text-muted-foreground",
                          )}
                        >
                          {m.title}
                        </span>
                        {done && (
                          <>
                            <Check className="size-3.5 shrink-0 self-center text-signal" strokeWidth={2.5} aria-hidden />
                            <span className="sr-only">completado</span>
                          </>
                        )}
                        {current && (
                          <span className="label-mono shrink-0 text-cisco">en curso</span>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>

              <p
                className={cn(
                  "label-mono mt-6 md:mt-0 md:self-start md:pt-2 md:text-right",
                  domainDone && "text-signal",
                  domainCurrent && "text-cisco",
                  !domainDone && !domainCurrent && "text-muted-foreground",
                )}
              >
                <ScrambleText text={`${status} · ${doneCount}/${d.modules.length}`} />
              </p>
            </div>
          </li>
        );
      })}

      {/* Examen final */}
      <li className="relative grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-6 pt-12 md:pt-16">
        <span
          aria-hidden
          className={cn(
            "relative z-10 mt-2 flex size-5 items-center justify-center rounded-full border bg-background",
            boss.completed ? "border-signal bg-signal text-background" : "border-foreground",
          )}
        >
          {boss.completed && <Check className="size-3" strokeWidth={2.5} />}
        </span>

        <div className="md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] md:gap-16">
          <div className="flex flex-col gap-4 border-t border-border pt-8">
            <p className="label-mono text-muted-foreground">examen final</p>
            <h3 className="font-display text-[clamp(1.75rem,4vw,3.25rem)] text-foreground">
              {boss.title}
            </h3>
            <p className="max-w-prose text-lg leading-relaxed text-muted-foreground">
              {boss.description}
            </p>
          </div>
          <p
            className={cn(
              "label-mono mt-6 border-t border-border pt-8 md:mt-0 md:self-end md:border-t-0 md:pt-0 md:text-right",
              boss.completed ? "text-signal" : "text-muted-foreground",
            )}
          >
            {boss.completed ? "aprobado" : "pendiente"}
          </p>
        </div>
      </li>
    </ol>
  );
}
