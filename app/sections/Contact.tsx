"use client";

import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { buttonVariants } from "@/components/ui/button";
import { Mail, Globe, Download, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SlideUp, StaggerContainer, StaggerItem } from "../components/animations";

export default function Contact() {
  return (
    <SectionWrapper id="contacto" className="bg-secondary/30">
      <div className="flex flex-col gap-6">
        <SectionHeader 
          title="Contacto" 
          subtitle="Hablemos de ciberseguridad, colaboraciones o nuevos retos."
        />

        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <SlideUp className="flex flex-col gap-4 max-w-md">
            <p className="text-lg text-muted-foreground">
              ¿Tienes un proyecto, una oportunidad o simplemente quieres hablar de ciberseguridad?
              Estoy abierto a colaboraciones, auditorías y nuevos retos.
            </p>
            <div className="font-mono text-sm text-primary">
              <span className="text-muted-foreground">$</span> echo &quot;Hola mundo&quot; &gt; contacto.txt
            </div>
          </SlideUp>

          <StaggerContainer className="flex flex-col gap-3" staggerDelay={0.1} delayChildren={0.2}>
            <StaggerItem>
              <motion.a
                href="mailto:tu@email.com"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-primary/50 text-primary hover:bg-primary/10 font-mono gap-2 justify-start transition-all duration-300"
                )}
              >
                <Mail className="size-4" />
                tu@email.com
              </motion.a>
            </StaggerItem>
            <StaggerItem>
              <motion.a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-primary/50 text-primary hover:bg-primary/10 font-mono gap-2 justify-start transition-all duration-300"
                )}
              >
                <Globe className="size-4" />
                LinkedIn
              </motion.a>
            </StaggerItem>
            <StaggerItem>
              <motion.a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-primary/50 text-primary hover:bg-primary/10 font-mono gap-2 justify-start transition-all duration-300"
                )}
              >
                <Code className="size-4" />
                GitHub
              </motion.a>
            </StaggerItem>
            <StaggerItem>
              <motion.a
                href="/docs/CV.pdf"
                download
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-primary text-primary-foreground hover:bg-primary/90 font-mono gap-2 justify-start transition-all duration-300"
                )}
              >
                <Download className="size-4" />
                Descargar CV
              </motion.a>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <SlideUp delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-2 border-t border-border/50 pt-8">
            <p className="font-mono text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} TuNombre. Todos los derechos reservados.
            </p>
            <p className="font-mono text-xs text-muted-foreground/60">
              Hecho con Next.js + shadcn/ui + Framer Motion
            </p>
          </div>
        </SlideUp>
      </div>
    </SectionWrapper>
  );
}
