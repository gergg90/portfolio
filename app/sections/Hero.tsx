"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ChevronDown, Download, FileText, User } from "lucide-react";
import { cn } from "@/lib/utils";
import HackerBackground from "../components/HackerBackground";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Fondo Hacker */}
      <HackerBackground />
      
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80 z-[1]" />
      
      {/* Grid sutil */}
      <div className="absolute inset-0 matrix-bg opacity-30 z-[2]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/50 avatar-glow">
            <div className="w-full h-full bg-card flex items-center justify-center">
              <User className="size-16 md:size-20 text-primary/40" />
            </div>
            {/* Scan line effect */}
            <div className="absolute inset-0 scan-line pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
          className="mb-6 font-mono text-sm text-primary/80 uppercase tracking-widest"
        >
          [ inicializando conexión segura... ]
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">Germain Gutierrez</span>
          <span className="terminal-cursor text-primary" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
          className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Analista de Ciberseguridad | Pentester | CTF Player
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.165, 0.84, 0.44, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <motion.a
            href="#writeups"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-primary text-primary-foreground hover:bg-primary/90 font-mono gap-2 border-glow rounded-full px-8"
            )}
          >
            <FileText className="size-4" />
            Ver Writeups
          </motion.a>
          <motion.a
            href="/docs/CV.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "border-primary/50 text-primary hover:bg-primary/10 font-mono gap-2 rounded-full px-8"
            )}
          >
            <Download className="size-4" />
            Descargar CV
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to sobre mi section"
      >
        <ChevronDown className="size-8 animate-bounce" />
      </motion.a>
    </section>
  );
}
