"use client";

import { SlideUp, TextReveal } from "./animations";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  /** Ruta mono de la sección, p. ej. "/sobre-mí/". */
  path?: string;
  /** Salto de la traza: posición de la sección en la ruta del navbar. */
  hop?: number;
  totalHops?: number;
  className?: string;
  titleClassName?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function SectionHeader({
  title,
  subtitle,
  path,
  hop,
  totalHops = 7,
  className = "",
  titleClassName = "",
}: SectionHeaderProps) {
  return (
    <header className={`mb-14 md:mb-20 ${className}`}>
      <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between md:gap-10">
        <h2
          className={`font-display text-[clamp(1.85rem,7vw,5.5rem)] text-foreground ${titleClassName}`}
        >
          <TextReveal text={title} />
        </h2>
        {(path || hop !== undefined) && (
          <p className="label-mono flex shrink-0 items-center gap-3 text-muted-foreground md:pb-2">
            {hop !== undefined && (
              <span>
                hop {pad(hop)}/{pad(totalHops)}
              </span>
            )}
            {path && <span className="text-foreground">{path}</span>}
          </p>
        )}
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
