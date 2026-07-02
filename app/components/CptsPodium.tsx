"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Trophy, Sparkles } from "lucide-react";

export default function CptsPodium() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
      className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-[#00ff41]/30 bg-gradient-to-br from-[#00ff41]/10 via-[#9D4EDD]/15 to-[#7B2CBF]/25 p-8 shadow-[0_0_40px_rgba(0,255,65,0.15)] backdrop-blur-sm md:p-12"
    >
      {/* Efectos de fondo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 size-64 rounded-full bg-[#00ff41]/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 size-64 rounded-full bg-[#9D4EDD]/30 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          className="mb-6"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-[#00ff41]/20 blur-2xl" />
            <div className="absolute -inset-3 rounded-full bg-[#9D4EDD]/30 blur-xl" />
            <Image
              src="/images/cpts-badge.png"
              alt="Insignia HTB CPTS"
              width={120}
              height={120}
              className="relative rounded-full border-4 border-[#00ff41] bg-card shadow-[0_0_40px_rgba(0,255,65,0.4)]"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-[#00ff41]/30"
            />
          </div>
        </motion.div>

        <div className="mb-2 flex items-center gap-2">
          <Sparkles className="size-5 text-[#00ff41]" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#00ff41]">
            Mission Accomplished
          </span>
          <Sparkles className="size-5 text-[#00ff41]" />
        </div>

        <h3 className="text-2xl font-bold text-foreground md:text-3xl">
          HTB Certified Penetration Testing Specialist
        </h3>
        <p className="mt-3 max-w-lg text-muted-foreground">
          Certificación oficial de Hack The Box Academy completada. Aquí se
          mostrará el certificado una vez sea emitido.
        </p>

        {/* Placeholder del certificado */}
        <div className="mt-8 w-full max-w-md rounded-xl border-2 border-dashed border-[#00ff41]/30 bg-black/40 p-8">
          <Award className="mx-auto mb-3 size-12 text-[#00ff41]/60" />
          <p className="font-mono text-sm text-[#00ff41]/80">
            [ certificado_cpts.pdf ]
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Reemplaza este placeholder por la imagen de tu certificado.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2 font-mono text-sm text-[#9D4EDD]">
          <Trophy className="size-4" />
          <span>root@portfolio:~$ ./pwned --exam=cpts</span>
        </div>
      </div>
    </motion.div>
  );
}
