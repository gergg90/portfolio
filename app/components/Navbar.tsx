"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

// Cada href debe coincidir con el id de su sección. El orden es la traza de hops.
export const navLinks = [
  { href: "#inicio", label: "Inicio", path: "/" },
  { href: "#sobre-mi", label: "Sobre mí", path: "/sobre-mí/" },
  { href: "#habilidades", label: "Habilidades", path: "/skills/" },
  { href: "#certificaciones", label: "Certificaciones", path: "/certs/" },
  { href: "#roadmap-ccna", label: "Roadmap CCNA", path: "/ccna/" },
  { href: "#writeups", label: "Writeups", path: "/writeups/" },
  { href: "#contacto", label: "Contacto", path: "/contacto/" },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const { scrollYProgress } = useScroll();
  const trace = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  const activeIndex = Math.max(
    0,
    navLinks.findIndex((l) => l.href.slice(1) === activeSection),
  );
  const active = navLinks[activeIndex];

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Al final de la página, el destino es siempre Contacto
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      if (isAtBottom) {
        setActiveSection("contacto");
        return;
      }

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      aria-label="Principal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || mobileOpen ? "bg-background/80 backdrop-blur-nav" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-10">
        <a
          href="#inicio"
          className="label-mono text-foreground transition-colors hover:text-primary-ink"
        >
          germain gutierrez<span className="terminal-cursor text-primary" />
        </a>

        {/* Traza: en qué salto de la ruta está el visitante */}
        <p className="label-mono hidden items-center gap-3 text-muted-foreground md:flex">
          <span>
            hop {pad(activeIndex + 1)}/{pad(navLinks.length)}
          </span>
          <span className="h-px w-8 bg-border" aria-hidden />
          <span className="text-foreground">{active.label}</span>
        </p>

        <ul className="hidden items-center gap-6 xl:flex">
          {navLinks.slice(1).map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`label-mono inline-flex items-center gap-2 transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`size-1.5 rounded-full bg-primary transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {link.path}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="label-mono py-2 text-foreground xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={mobileOpen}
          aria-controls="menu-movil"
        >
          {mobileOpen ? "cerrar" : "menú"}
        </button>
      </div>

      {/* La traza se dibuja con el scroll */}
      <motion.div aria-hidden style={{ scaleX: trace }} className="h-px origin-left bg-primary" />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="menu-movil"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 top-[61px] overflow-y-auto bg-background xl:hidden"
          >
            <ol className="flex flex-col px-4 py-6 sm:px-6">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.15 + index * 0.05,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b border-border"
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleMobileNavClick(e, link.href)}
                      aria-current={isActive ? "location" : undefined}
                      className="flex items-baseline justify-between gap-4 py-4"
                    >
                      <span
                        className={`font-display text-[clamp(2rem,9vw,3.5rem)] ${
                          isActive ? "text-primary-ink" : "text-foreground"
                        }`}
                      >
                        {link.label}
                      </span>
                      <span className="label-mono text-muted-foreground">hop {pad(index + 1)}</span>
                    </a>
                  </motion.li>
                );
              })}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
