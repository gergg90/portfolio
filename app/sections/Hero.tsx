"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ChevronDown, Download, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_50%)]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
          className="mb-6 font-mono text-sm text-primary/80 uppercase tracking-widest"
        >
          [ initializing secure connection... ]
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">TuNombre</span>
          <span className="terminal-cursor text-primary" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Cybersecurity Analyst | Pentester | CTF Player
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
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
            href="/docs/CV_NombreApellido.pdf"
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
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="size-8 animate-bounce" />
      </motion.a>
    </section>
  );
}
