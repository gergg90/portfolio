"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { RotatingWord } from "../components/animations";

const verbs = ["conecta redes", "asegura sistemas", "construye con IA"];
const ease = [0.16, 1, 0.3, 1] as const;

const lines = ["Germain Gutierrez", "es analista de", "ciberseguridad que"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-svh w-full flex-col justify-end overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="mx-auto w-full max-w-7xl px-4 pb-10 pt-32 sm:px-6 md:pb-14 lg:px-10"
      >
        <h1 className="font-display text-[clamp(2rem,8.4vw,6rem)] text-foreground">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.25 + i * 0.1, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block text-primary-ink"
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.55, ease }}
            >
              <RotatingWord words={verbs} />.
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 grid gap-6 border-t border-border pt-6 md:mt-16 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-12"
        >
          <p className="label-mono flex items-center gap-3 text-foreground">
            <span className="live-dot" aria-hidden />
            estudiando CCNA 200-301
          </p>
          <nav aria-label="Accesos rápidos" className="flex flex-wrap gap-x-8 gap-y-3">
            <a href="#roadmap-ccna" className="label-mono link-draw text-foreground">
              /ccna/
            </a>
            <a href="/docs/CV.pdf" download className="label-mono link-draw inline-flex items-center gap-1.5 text-foreground">
              /cv/ <ArrowDown className="size-3" strokeWidth={1.5} aria-hidden />
            </a>
            <a href="#contacto" className="label-mono link-draw text-foreground">
              /contacto/
            </a>
          </nav>
          <a
            href="#sobre-mi"
            className="label-mono group hidden items-center gap-3 text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            desplázate despacio
            <span className="relative block h-8 w-px overflow-hidden bg-border" aria-hidden>
              <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-cue_2s_ease-in-out_infinite] bg-foreground motion-reduce:animate-none" />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
