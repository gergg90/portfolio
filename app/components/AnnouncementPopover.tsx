"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

const STORAGE_KEY = "announcement-ccna-v1";

export default function AnnouncementPopover() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(STORAGE_KEY) !== null;
    } catch {
      // Sin acceso a localStorage, el anuncio se muestra igualmente.
    }
    if (!dismissed) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const remember = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Si no se puede guardar, el anuncio volverá en la siguiente visita.
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    remember();
  };

  const handleNavigate = () => {
    setIsVisible(false);
    remember();
    document.getElementById("roadmap-ccna")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm border border-border bg-card sm:bottom-6 sm:right-6"
          aria-label="Anuncio del roadmap CCNA"
        >
          <button
            onClick={handleClose}
            className="absolute right-2 top-2 p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Cerrar anuncio"
          >
            <X className="size-4" strokeWidth={1.5} />
          </button>

          <button onClick={handleNavigate} className="group block w-full p-5 text-left">
            <p className="label-mono mb-3 flex items-center gap-2 text-primary-ink">
              <span className="live-dot" aria-hidden />
              nuevo apartado
            </p>
            <p className="font-display pr-6 text-xl leading-tight text-foreground">
              Sigo el camino al CCNA 200-301
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Los seis dominios del examen, con su peso y mi progreso.
            </p>
            <span className="label-mono mt-4 inline-flex items-center gap-1.5 text-foreground link-draw">
              ver roadmap
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
                aria-hidden
              />
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
