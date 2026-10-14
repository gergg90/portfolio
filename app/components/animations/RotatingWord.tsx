"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface RotatingWordProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  hold?: number;
}

/** Teclea, sostiene y borra cada palabra como en una terminal. */
export default function RotatingWord({
  words,
  className = "",
  typeSpeed = 70,
  deleteSpeed = 35,
  hold = 2200,
}: RotatingWordProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const word = words[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && length === word.length) {
      timer = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && length === 0) {
      timer = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 250);
    } else {
      timer = setTimeout(
        () => setLength((l) => l + (deleting ? -1 : 1)),
        deleting ? deleteSpeed : typeSpeed,
      );
    }
    return () => clearTimeout(timer);
  }, [reduce, words, index, length, deleting, typeSpeed, deleteSpeed, hold]);

  const current = reduce ? words[0] : words[index].slice(0, length);

  return (
    <span className={className}>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden>
        {current}
        <span className="caret" />
      </span>
    </span>
  );
}
