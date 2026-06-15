import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative w-full py-24 md:py-32 ${className}`}
    >
      <div className={fullWidth ? "w-full" : "mx-auto max-w-7xl px-6"}>
        {children}
      </div>
    </section>
  );
}
