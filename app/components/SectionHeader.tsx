"use client";

import { ScrambleText, SlideUp } from "./animations";
import { hopOf, type SectionId } from "@/lib/traza";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  /** Id de la sección en `lib/traza.ts`: de él salen el número de hop y la ruta. */
  section: SectionId;
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  section,
  className = "",
  titleClassName = "",
}: SectionHeaderProps) {
  const { tag, path } = hopOf(section);

  return (
    <header className={`mb-14 md:mb-20 ${className}`}>
      <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between md:gap-10">
        <h2
          className={`font-display text-[clamp(1.85rem,7vw,5.5rem)] text-foreground ${titleClassName}`}
        >
          <ScrambleText text={title} />
        </h2>
        <p className="label-mono flex shrink-0 items-center gap-3 text-muted-foreground md:pb-2">
          <ScrambleText text={tag} />
          <ScrambleText text={path} className="text-foreground" />
        </p>
      </div>
      {subtitle && (
        <SlideUp delay={0.15} className="mt-6 md:ml-[40%]">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {subtitle}
          </p>
        </SlideUp>
      )}
    </header>
  );
}
