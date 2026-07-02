"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import CptsRoadmap from "../components/CptsRoadmap";
import { Shield, Terminal } from "lucide-react";

const TOTAL_MODULES = 28;
const COMPLETED_MODULES = 0;
const PROGRESS_PERCENTAGE = Math.round(
  (COMPLETED_MODULES / TOTAL_MODULES) * 100
);

export default function RoadmapCPTS() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.18, 0.18, 0]);

  return (
    <SectionWrapper
      id="roadmap-cpts"
      ref={sectionRef}
      className="relative overflow-hidden bg-secondary/30"
    >
      {/* Fondo: badge CPTS difuminado que se mueve con el scroll */}
      <motion.div
        style={{ y: backgroundY, rotate: backgroundRotate, opacity: backgroundOpacity }}
        className="pointer-events-none absolute -right-32 top-1/4 z-0 hidden size-[500px] md:block lg:size-[700px]"
      >
        <div className="absolute inset-0 rounded-full bg-[#9D4EDD]/25 blur-3xl" />
        <Image
          src="/images/cpts-badge.png"
          alt=""
          fill
          className="object-contain opacity-70 blur-[2px]"
          aria-hidden="true"
        />
      </motion.div>

      {/* Fondo móvil: versión más sutil */}
      <motion.div
        style={{ opacity: backgroundOpacity }}
        className="pointer-events-none absolute -right-16 top-1/3 z-0 size-72 md:hidden"
      >
        <div className="absolute inset-0 rounded-full bg-[#9D4EDD]/15 blur-2xl" />
        <Image
          src="/images/cpts-badge.png"
          alt=""
          fill
          className="object-contain opacity-30 blur-sm"
          aria-hidden="true"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <SectionHeader
            title="Roadmap CPTS"
            subtitle="Mi camino hacia la certificación HTB Certified Penetration Testing Specialist."
            titleClassName="text-gradient-cpts"
          />

          {/* Barra de progreso e info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto w-full max-w-2xl rounded-xl border border-[#9D4EDD]/20 bg-card/50 p-5 backdrop-blur-sm"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-sm text-[#9D4EDD]">
                <Terminal className="size-4" />
                <span>~/cpts-roadmap/progress.txt</span>
              </div>
              <span className="font-mono text-sm text-muted-foreground">
                {COMPLETED_MODULES}/{TOTAL_MODULES} módulos
              </span>
            </div>

            <div className="relative h-2 overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${PROGRESS_PERCENTAGE}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-primary via-[#9D4EDD] to-[#7B2CBF]"
              />
            </div>

            <p className="mt-3 text-center text-sm text-muted-foreground">
              Progreso actual:{" "}
              <span className="font-semibold text-foreground">
                {PROGRESS_PERCENTAGE}%
              </span>
              . Para ser elegible al examen es necesario completar el{" "}
              <span className="text-[#9D4EDD]">Penetration Tester Job-Role Path</span>{" "}
              al 100%.
            </p>
          </motion.div>
        </div>

        {/* Disclaimer introductorio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto flex max-w-3xl items-start gap-3 rounded-lg border border-[#9D4EDD]/20 bg-[#9D4EDD]/5 px-4 py-3 text-sm text-muted-foreground"
        >
          <Shield className="mt-0.5 size-4 shrink-0 text-[#9D4EDD]" />
          <p>
            Este roadmap sigue la estructura oficial de{" "}
            <a
              href="https://academy.hackthebox.com/preview/certifications/htb-certified-penetration-testing-specialist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9D4EDD] underline-offset-2 hover:underline"
            >
              Hack The Box Academy
            </a>
            . Cada módulo enlaza a su preview correspondiente para facilitar el
            seguimiento.
          </p>
        </motion.div>

        {/* Roadmap visual */}
        <CptsRoadmap />
      </div>
    </SectionWrapper>
  );
}
