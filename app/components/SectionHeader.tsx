"use client";

import { SlideUp } from "./animations";

export default function SectionHeader({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 mb-12 ${className}`}>
      <SlideUp>
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl tracking-tight">
            <span className="text-primary">#</span> {title}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </div>
      </SlideUp>
      {subtitle && (
        <SlideUp delay={0.1}>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {subtitle}
          </p>
        </SlideUp>
      )}
    </div>
  );
}
