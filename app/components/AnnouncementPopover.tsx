"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, ChevronRight } from "lucide-react";
import Image from "next/image";

const STORAGE_KEY = "cpts-roadmap-announcement-dismissed";

export default function AnnouncementPopover() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const handleNavigate = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
    const target = document.getElementById("roadmap-cpts");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
          className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm sm:bottom-6 sm:right-6"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-[#9D4EDD]/30 bg-card/80 p-4 shadow-2xl shadow-[#9D4EDD]/10 backdrop-blur-nav">
            {/* Brillo sutil de fondo */}
            <div className="absolute -right-6 -top-6 size-24 rounded-full bg-[#9D4EDD]/20 blur-2xl" />
            <div className="absolute -left-4 -bottom-4 size-20 rounded-full bg-primary/10 blur-2xl" />

            <button
              onClick={handleClose}
              className="absolute right-2 top-2 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-[#9D4EDD]/10 hover:text-[#9D4EDD]"
              aria-label="Cerrar anuncio"
            >
              <X className="size-4" />
            </button>

            <button
              onClick={handleNavigate}
              className="flex w-full items-start gap-3 text-left"
            >
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full bg-[#9D4EDD]/30 blur-sm" />
                <Image
                  src="/images/cpts-badge.png"
                  alt="CPTS"
                  width={44}
                  height={44}
                  className="relative rounded-full border border-[#9D4EDD]/60 bg-background shadow-[0_0_15px_rgba(157,78,221,0.3)]"
                />
              </div>

              <div className="flex-1 pr-4">
                <div className="mb-1 flex items-center gap-1.5">
                  <Shield className="size-3 text-[#9D4EDD]" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#9D4EDD]">
                    Nuevo apartado
                  </span>
                </div>
                <p className="text-sm font-medium leading-snug text-foreground">
                  Acompáñame en la certificación CPTS
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Descubre el roadmap completo hacia el HTB Certified Penetration Testing Specialist.
                </p>
                <div className="mt-2 flex items-center gap-1 text-xs font-medium text-[#9D4EDD]">
                  <span>Ver roadmap</span>
                  <ChevronRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
