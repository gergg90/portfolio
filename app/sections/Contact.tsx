"use client";

import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { Marquee, ScrambleText, SlideUp } from "../components/animations";
import { hopOf } from "@/lib/traza";

const contactHop = hopOf("contacto");

const links = [
  {
    label: "email",
    value: "germain.gg90@gmail.com",
    href: "mailto:germain.gg90@gmail.com",
    external: false,
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/gergg90",
    href: "https://www.linkedin.com/in/gergg90/",
    external: true,
  },
  {
    label: "github",
    value: "github.com/gergg90",
    href: "https://github.com/gergg90",
    external: true,
  },
  {
    label: "cv",
    value: "descargar CV.pdf",
    href: "/docs/CV.pdf",
    external: false,
    download: true,
  },
];

const profile = ["redes", "ciberseguridad", "IA agéntica", "CCNA 200-301", "Hack4u"];

export default function Contact() {
  return (
    <SectionWrapper id="contacto" className="pb-16 md:pb-24">
      <p className="label-mono mb-8 flex items-center gap-3 text-muted-foreground">
        <span>{contactHop.tag}</span>
        <span aria-hidden className="h-px w-8 bg-border" />
        <span className="text-foreground">{contactHop.path}</span>
      </p>

      <h2 className="font-display text-[clamp(3.5rem,16vw,13rem)] leading-[0.85] text-foreground">
        <ScrambleText text="Hablemos." />
      </h2>

      <SlideUp delay={0.1} className="mt-10 md:mt-14">
        <a
          href="mailto:germain.gg90@gmail.com"
          className="link-draw inline-flex max-w-full items-center gap-3 break-all font-display text-[clamp(1.4rem,4.2vw,3.25rem)] text-foreground"
        >
          germain.gg90@gmail.com
          <ArrowUpRight className="size-[0.7em] shrink-0" strokeWidth={1.5} aria-hidden />
        </a>
      </SlideUp>

      <ul className="mt-16 border-t border-border md:mt-20">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
              {...(link.download && { download: true })}
              className="row-link group grid grid-cols-[5rem_minmax(0,1fr)_auto] items-baseline gap-4 py-5 md:grid-cols-[8rem_minmax(0,1fr)_auto] md:py-6"
            >
              <span className="label-mono text-muted-foreground">{link.label}</span>
              <span className="truncate text-lg text-foreground md:text-xl">{link.value}</span>
              <ArrowUpRight className="row-arrow size-4 text-muted-foreground" strokeWidth={1.5} aria-hidden />
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-20 border-y border-border py-5 md:mt-28">
        <Marquee duration={36} className="label-mono text-muted-foreground">
          <div className="flex shrink-0 items-center gap-8 pr-8">
            {profile.map((item) => (
              <span key={item} className="flex items-center gap-8">
                <span className="text-foreground">{item}</span>
                <span aria-hidden className="text-primary-ink">/</span>
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      <footer className="label-mono mt-8 flex flex-col gap-3 text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Germain Gutierrez</span>
        <a href="#inicio" className="link-draw w-fit text-foreground">
          volver arriba ↑
        </a>
      </footer>
    </SectionWrapper>
  );
}
