"use client";

import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollWordsProps {
  text: string;
  className?: string;
  /** Palabras (sin puntuación) que se pintan con el acento de marca. */
  highlight?: string[];
}

function Word({
  children,
  progress,
  range,
  accent,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className={accent ? "text-primary-ink" : undefined}>
      {children}{" "}
    </motion.span>
  );
}

/** La opacidad de cada palabra avanza con el scroll del párrafo. */
export default function ScrollWords({ text, className = "", highlight = [] }: ScrollWordsProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const words = text.split(" ");
  const accentSet = new Set(highlight.map((w) => w.toLowerCase()));
  const isAccent = (w: string) => accentSet.has(w.replace(/[.,;:]/g, "").toLowerCase());

  if (reduce) {
    return (
      <p ref={ref} className={className}>
        {words.map((w, i) => (
          <span key={i} className={isAccent(w) ? "text-primary-ink" : undefined}>
            {w}{" "}
          </span>
        ))}
      </p>
    );
  }

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const start = i / words.length;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, start + 1 / words.length]}
            accent={isAccent(w)}
          >
            {w}
          </Word>
        );
      })}
    </p>
  );
}
