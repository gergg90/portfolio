"use client";

import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { buttonVariants } from "@/components/ui/button";
import { Mail, Globe, Download, Code, ArrowUp, Skull } from "lucide-react";
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
                href="mailto:germain.gg90@gmail.com"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-primary/50 text-primary hover:bg-primary/10 font-mono gap-2 justify-start transition-all duration-300"
                )}
              >
                <Mail className="size-4" />
                germain.gg90@gmail.com
              </motion.a>
            </StaggerItem>
            <StaggerItem>
              <motion.a
                href="https://www.linkedin.com/in/gergg90/"
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
                href="https://github.com/gergg90"
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

        {/* Footer CTA - YOU HAVE BEEN PWNED! */}
        <SlideUp delay={0.3}>
          <div className="mt-16 flex flex-col items-center gap-6">
            {/* Línea divisora con glow */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            {/* CTA Pwned */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl border border-primary/30 bg-card/30 px-8 py-6 backdrop-blur-sm"
              style={{ boxShadow: '0 0 30px rgba(0, 255, 65, 0.1), 0 0 60px rgba(0, 255, 65, 0.05)' }}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3 text-primary">
                  <Skull className="size-5" />
                  <span className="font-mono text-sm uppercase tracking-widest text-primary/80">
                    you have been pwned!
                  </span>
                  <Skull className="size-5" />
                </div>
                <a 
                  href="mailto:germain.gg90@gmail.com"
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  germain.gg90@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Volver al inicio */}
            <motion.a
              href="#inicio"
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowUp className="size-4" />
              Volver al Inicio
            </motion.a>
          </div>
        </SlideUp>
      </div>
    </SectionWrapper>
  );
}
