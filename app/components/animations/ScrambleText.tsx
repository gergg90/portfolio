"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const CHARSET = "!<>-_\\/[]{}=+*^?#01";
const STEPS = 22;
const TICK_MS = 32;

interface ScrambleTextProps {
  text: string;
  className?: string;
}

/**
 * Texto que se descifra de izquierda a derecha al entrar en pantalla.
 * Cada carácter reserva su ancho, así que el layout no salta mientras corre.
 * Si cambia `text` (p. ej. el hop del navbar), vuelve a descifrarse.
 */
export default function ScrambleText({ text, className = "" }: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  // STEPS equivale a "terminado": se muestra el texto real, igual que en el SSR.
  const [step, setStep] = useState(STEPS);

  useEffect(() => {
    if (!inView || reduce) return;
    let interval: ReturnType<typeof setInterval> | undefined;
    // Arranca fuera del render para no encadenar actualizaciones síncronas.
    const start = setTimeout(() => {
      let s = 0;
      setStep(0);
      interval = setInterval(() => {
        s += 1;
        setStep(s);
        if (s >= STEPS) clearInterval(interval);
      }, TICK_MS);
    }, 0);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [inView, reduce, text]);

  const scrambling = !reduce && step < STEPS;
  const len = Math.max(text.length, 1);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {Array.from(text).map((char, i) => {
          if (char === " ") return " ";
          // Los caracteres se resuelven de izquierda a derecha, con el último al final.
          const resolveAt = 4 + (i / len) * (STEPS - 8);
          if (!scrambling || step >= resolveAt) return char;
          const glyph = CHARSET[(i * 7 + step * 11) % CHARSET.length];
          return (
            <span key={i} className="relative inline-block">
              <span className="invisible">{char}</span>
              <span className="absolute inset-0 text-primary-ink">{glyph}</span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
