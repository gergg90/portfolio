"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/** Respeta prefers-reduced-motion en todas las animaciones de Framer Motion. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
