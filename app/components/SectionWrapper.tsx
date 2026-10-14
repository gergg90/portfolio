import { ReactNode, forwardRef } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ id, children, className = "", fullWidth = false }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`relative w-full py-24 md:py-36 ${className}`}
      >
        <div className={fullWidth ? "w-full" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-10"}>
          {children}
        </div>
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
