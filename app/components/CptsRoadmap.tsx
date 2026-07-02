"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Trophy, ExternalLink, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoadmapModule {
  id: number;
  title: string;
  slug: string;
  description: string;
}

const modules: RoadmapModule[] = [
  {
    id: 1,
    title: "Penetration Testing Process",
    slug: "penetration-testing-process",
    description:
      "El proceso de pentesting desglosado en cada etapa, con ejemplos detallados y pasos pre-contrato.",
  },
  {
    id: 2,
    title: "Getting Started",
    slug: "getting-started",
    description:
      "Fundamentos del pentesting y una introducción práctica a Hack The Box.",
  },
  {
    id: 3,
    title: "Network Enumeration with Nmap",
    slug: "network-enumeration-with-nmap",
    description:
      "Uso efectivo de Nmap para descubrimiento y enumeración de redes.",
  },
  {
    id: 4,
    title: "Footprinting",
    slug: "footprinting",
    description:
      "Técnicas de footprinting sobre los servicios más comunes en infraestructuras empresariales.",
  },
  {
    id: 5,
    title: "Information Gathering - Web Edition",
    slug: "information-gathering-web-edition",
    description:
      "Reconocimiento web activo y pasivo: DNS, crawling, archivos, headers y fingerprinting.",
  },
  {
    id: 6,
    title: "Vulnerability Assessment",
    slug: "vulnerability-assessment",
    description:
      "Diferencias entre vulnerability assessment y pentest, interpretación de resultados y reportes.",
  },
  {
    id: 7,
    title: "File Transfers",
    slug: "file-transfers",
    description:
      "Técnicas de transferencia de archivos entre atacante y objetivo en Windows y Linux.",
  },
  {
    id: 8,
    title: "Shells & Payloads",
    slug: "shells-and-payloads",
    description:
      "Identificación y uso de shells y payloads para establecer foothold en sistemas vulnerables.",
  },
  {
    id: 9,
    title: "Using the Metasploit Framework",
    slug: "using-the-metasploit-framework",
    description:
      "Enumeración, explotación, evasión, escalada y post-explotación con Metasploit.",
  },
  {
    id: 10,
    title: "Password Attacks",
    slug: "password-attacks",
    description:
      "Ataques a contraseñas: almacenamiento, cracking, hashes y políticas débiles.",
  },
  {
    id: 11,
    title: "Attacking Common Services",
    slug: "attacking-common-services",
    description:
      "Enumeración y explotación de servicios estándar internos y externos.",
  },
  {
    id: 12,
    title: "Pivoting, Tunneling, and Port Forwarding",
    slug: "pivoting-tunneling-and-port-forwarding",
    description:
      "Movimiento lateral, pivoting, tunneling y reenvío de puertos dentro de una red.",
  },
  {
    id: 13,
    title: "Active Directory Enumeration & Attacks",
    slug: "active-directory-enumeration-and-attacks",
    description:
      "Enumeración y ataques contra entornos Active Directory y configuraciones comunes.",
  },
  {
    id: 14,
    title: "Using Web Proxies",
    slug: "using-web-proxies",
    description:
      "Uso de Burp Suite y OWASP ZAP como proxies para pruebas de aplicaciones web.",
  },
  {
    id: 15,
    title: "Attacking Web Applications with Ffuf",
    slug: "attacking-web-applications-with-ffuf",
    description:
      "Fuzzing web y fuerza bruta de directorios con Ffuf para descubrir recursos ocultos.",
  },
  {
    id: 16,
    title: "Login Brute Forcing",
    slug: "login-brute-forcing",
    description:
      "Técnicas de fuerza bruta contra logins SSH, FTP y formularios web con Hydra y Medusa.",
  },
  {
    id: 17,
    title: "SQL Injection Fundamentals",
    slug: "sql-injection-fundamentals",
    description:
      "Bases de SQL Injection: bypass de autenticación, extracción de datos y ejecución de código.",
  },
  {
    id: 18,
    title: "SQLMap Essentials",
    slug: "sqlmap-essentials",
    description:
      "Descubrimiento y explotación automatizada de SQLi con SQLMap, desde básico a avanzado.",
  },
  {
    id: 19,
    title: "Cross-Site Scripting (XSS)",
    slug: "cross-site-scripting-xss",
    description:
      "Identificación y explotación de vulnerabilidades XSS para compromiso de aplicaciones web.",
  },
  {
    id: 20,
    title: "File Inclusion",
    slug: "file-inclusion",
    description:
      "Explotación de Local File Inclusion y Remote File Inclusion en aplicaciones web.",
  },
  {
    id: 21,
    title: "File Upload Attacks",
    slug: "file-upload-attacks",
    description:
      "Subida arbitraria de archivos maliciosos y toma de control del servidor backend.",
  },
  {
    id: 22,
    title: "Command Injections",
    slug: "command-injections",
    description:
      "Identificación y explotación de command injection, incluyendo bypass de filtros.",
  },
  {
    id: 23,
    title: "Web Attacks",
    slug: "web-attacks",
    description:
      "HTTP Verb Tampering, IDOR y XXE: identificación, explotación y prevención.",
  },
  {
    id: 24,
    title: "Attacking Common Applications",
    slug: "attacking-common-applications",
    description:
      "Enumeración y ataque a aplicaciones comunes como CMS, portales internos y más.",
  },
  {
    id: 25,
    title: "Linux Privilege Escalation",
    slug: "linux-privilege-escalation",
    description:
      "Escalada de privilegios en Linux enfocada en configuraciones reales y misconfiguraciones.",
  },
  {
    id: 26,
    title: "Windows Privilege Escalation",
    slug: "windows-privilege-escalation",
    description:
      "Escalada de privilegios en Windows moderno y legacy, enumeración y técnicas comunes.",
  },
  {
    id: 27,
    title: "Documentation & Reporting",
    slug: "documentation-and-reporting",
    description:
      "Documentación organizada y elaboración de reportes de pentesting de calidad comercial.",
  },
  {
    id: 28,
    title: "Attacking Enterprise Networks",
    slug: "attacking-enterprise-networks",
    description:
      "Simulación completa de un engagement de pentesting interno/externo a gran escala.",
  },
];

export default function CptsRoadmap() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Línea central de la ruta: verde → morado → rojo */}
      <div className="absolute inset-y-0 left-8 w-0.5 md:left-1/2 md:-translate-x-1/2">
        <div className="h-full w-full bg-gradient-to-b from-primary via-[#9D4EDD] to-destructive shadow-[0_0_20px_rgba(157,78,221,0.7),0_0_40px_rgba(157,78,221,0.3)]" />
      </div>

      {/* Badge CPTS animado sobre la ruta con aura bicolor */}
      <motion.div
        initial={{ top: "0%", opacity: 0 }}
        animate={{ top: ["0%", "100%", "0%"], opacity: 1 }}
        transition={{
          top: {
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          },
          opacity: { duration: 0.6 },
        }}
        className="absolute left-8 z-20 hidden h-full -translate-x-1/2 md:left-1/2 md:block"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 to-[#9D4EDD]/40 blur-lg" />
          <Image
            src="/images/cpts-badge.png"
            alt="Insignia HTB CPTS"
            width={56}
            height={56}
            className="relative rounded-full border-2 border-[#9D4EDD]/60 bg-card shadow-[0_0_25px_rgba(157,78,221,0.35)]"
          />
        </motion.div>
      </motion.div>

      {/* Nodos del roadmap */}
      <div className="relative space-y-8 md:space-y-12">
        {modules.map((module, index) => {
          const isEven = index % 2 === 0;
          const isHovered = hoveredId === module.id;

          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.03, 0.8),
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className={cn(
                "relative flex items-center gap-6",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Card de contenido */}
              <div
                className={cn(
                  "group flex-1 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#9D4EDD]/60 hover:bg-[#9D4EDD]/5 md:max-w-[calc(50%-2rem)]",
                  isHovered && "border-[#9D4EDD]/80 shadow-[0_0_30px_rgba(157,78,221,0.2)]"
                )}
                onMouseEnter={() => setHoveredId(module.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <a
                  href={`https://academy.hackthebox.com/course/preview/${module.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="font-mono text-xs text-[#9D4EDD]">
                          #{String(module.id).padStart(2, "0")}
                        </span>
                        <Lock className="size-3 text-muted-foreground" />
                      </div>
                      <h3 className="font-semibold text-foreground transition-colors group-hover:text-[#9D4EDD]">
                        {module.title}
                      </h3>
                    </div>
                    <ExternalLink className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:text-[#9D4EDD] group-hover:opacity-100" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {module.description}
                  </p>
                </a>
              </div>

              {/* Nodo central */}
              <div className="absolute left-8 z-10 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full border-2 transition-colors duration-300",
                    isHovered
                      ? "border-[#9D4EDD] bg-[#9D4EDD]/20 text-white shadow-[0_0_25px_rgba(157,78,221,0.8)]"
                      : "border-[#9D4EDD] bg-[#9D4EDD]/10 text-white shadow-[0_0_15px_rgba(157,78,221,0.5)]"
                  )}
                >
                  <span className="font-mono text-xs font-bold">{module.id}</span>
                </motion.div>
              </div>

              {/* Espaciador para el lado opuesto en desktop */}
              <div className="hidden flex-1 md:block md:max-w-[calc(50%-2rem)]" />
            </motion.div>
          );
        })}

        {/* Boss final: Examen CPTS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex items-center justify-center pt-8"
        >
          <div className="absolute left-8 z-10 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(157,78,221,0.4)",
                  "0 0 40px rgba(255,0,60,0.5)",
                  "0 0 20px rgba(157,78,221,0.4)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="flex size-16 items-center justify-center rounded-full border-2 border-destructive bg-background"
            >
              <Trophy className="size-7 text-destructive" />
            </motion.div>
          </div>

          <div className="ml-20 rounded-xl border border-destructive/30 bg-gradient-to-br from-destructive/10 to-[#9D4EDD]/10 p-6 backdrop-blur-sm md:ml-0 md:max-w-md md:text-center">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-destructive">
              Boss Final
            </h3>
            <h4 className="mt-1 text-lg font-semibold text-foreground">
              HTB Certified Penetration Testing Specialist
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Examen práctico de pentesting web, externo e interno contra una red
              Active Directory real. Requiere completar el path al 100%.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
