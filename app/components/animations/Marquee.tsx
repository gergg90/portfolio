import { CSSProperties, ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Duración de una vuelta en segundos. */
  duration?: number;
}

/** Marquee CSS puro: duplica el contenido y pausa en hover. */
export default function Marquee({ children, className = "", duration = 40 }: MarqueeProps) {
  return (
    <div
      className={`marquee ${className}`}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
    >
      <div className="marquee-track">{children}</div>
      <div className="marquee-track" aria-hidden>
        {children}
      </div>
    </div>
  );
}
