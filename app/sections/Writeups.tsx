"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { FileText, Clock } from "lucide-react";

export default function Writeups() {
  return (
    <SectionWrapper id="writeups">
      <div className="flex flex-col gap-6">
        <SectionHeader 
          title="Writeups" 
          subtitle="Writeups de HackTheBox y explicaciones técnicas de conceptos de ciberseguridad."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="flex flex-col items-center gap-6 py-16"
        >
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
            <FileText className="size-10 text-primary/50" />
          </div>
          
          <div className="flex flex-col items-center gap-2 text-center max-w-md">
            <h3 className="text-xl font-semibold text-foreground">
              Próximamente
            </h3>
            <p className="text-muted-foreground">
              Estoy preparando writeups detallados de máquinas de HackTheBox y explicaciones técnicas de 
              técnicas de ataque como Buffer Overflow, Man-in-the-Middle y DNS Spoofing.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <Clock className="size-4" />
              <span>Contenido en desarrollo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
