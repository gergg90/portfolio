"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

export default function SlideUp({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  distance = 40,
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.165, 0.84, 0.44, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
