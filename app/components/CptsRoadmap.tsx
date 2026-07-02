"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, ExternalLink, Lock, Check, Play } from "lucide-react";
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

interface CptsRoadmapProps {
  completedModuleIds?: number[];
  isBossCompleted?: boolean;
}

export default function CptsRoadmap({
  completedModuleIds = [],
  isBossCompleted = false,
}: CptsRoadmapProps) {
  const completedCount = completedModuleIds.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const moduleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bossRef = useRef<HTMLDivElement>(null);
  const bossNodeRef = useRef<HTMLDivElement>(null);
  const [nodePositions, setNodePositions] = useState<Record<string, number>>({});

  const target = useMemo(() => {
    if (completedCount === 0) return { type: "start" as const };
    if (completedCount >= modules.length) {
      if (isBossCompleted) return { type: "done" as const };
      return { type: "boss" as const };
    }
    return { type: "module" as const, id: completedCount + 1 };
  }, [completedCount, isBossCompleted]);

  const currentModuleId = target.type === "module" ? target.id : null;

  const measurePositions = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const positions: Record<string, number> = {};

    if (startRef.current) {
      const rect = startRef.current.getBoundingClientRect();
      positions.start = rect.top - containerRect.top + rect.height / 2;
    }

    moduleRefs.current.forEach((ref, idx) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        positions[`module-${modules[idx].id}`] =
          rect.top - containerRect.top + rect.height / 2;
      }
    });

    if (bossNodeRef.current) {
      const rect = bossNodeRef.current.getBoundingClientRect();
      positions.boss = rect.top - containerRect.top + rect.height / 2;
    }

    setNodePositions(positions);
  }, []);

  useLayoutEffect(() => {
    measurePositions();
  }, [measurePositions]);

  useEffect(() => {
    window.addEventListener("resize", measurePositions);
    // Re-medir tras las animaciones de entrada de Framer Motion
    const timers = [setTimeout(measurePositions, 300), setTimeout(measurePositions, 700)];
    return () => {
      window.removeEventListener("resize", measurePositions);
      timers.forEach(clearTimeout);
    };
  }, [measurePositions]);

  useEffect(() => {
    measurePositions();
  }, [completedCount, isBossCompleted, measurePositions]);

  const setModuleRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      moduleRefs.current[index] = el;
    },
    []
  );

  const pinKey =
    target.type === "module" ? `module-${target.id}` : target.type;
  const pinCenterTop = nodePositions[pinKey] ?? 0;

  const startCenterTop = nodePositions.start ?? 0;
  const progressFrom = Math.min(startCenterTop, pinCenterTop);
  const progressHeight = Math.abs(pinCenterTop - startCenterTop);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-5xl">
      {/* Línea base de la ruta */}
      <div className="absolute inset-y-0 left-8 z-0 w-0.5 md:left-1/2 md:-translate-x-1/2">
        <div className="h-full w-full bg-gradient-to-b from-[#7B2CBF] via-[#9D4EDD] to-destructive shadow-[0_0_25px_rgba(157,78,221,0.8),0_0_50px_rgba(157,78,221,0.4)]" />
      </div>

      {/* Canal iluminado según el progreso */}
      <motion.div
        className="absolute left-8 z-[1] w-1 -translate-x-1/2 rounded-full md:left-1/2"
        style={{ top: progressFrom }}
        initial={false}
        animate={{ height: progressHeight }}
        transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <div className="h-full w-full rounded-full bg-[#00ff41] shadow-[0_0_15px_#00ff41,0_0_30px_#00ff41]" />
      </motion.div>

      {/* Pin CPTS que avanza como en un nivel de Mario */}
      <motion.div
        className="absolute left-8 z-30 -translate-x-1/2 md:left-1/2"
        style={{ top: pinCenterTop }}
        initial={false}
        animate={{ top: pinCenterTop }}
        transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative -translate-y-1/2"
        >
          <div className="absolute -inset-3 rounded-full bg-[#9D4EDD]/30 blur-xl md:-inset-4" />
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary/20 to-[#9D4EDD]/50 blur-md md:-inset-2" />
          <Image
            src="/images/cpts-badge.png"
            alt="Insignia HTB CPTS"
            width={56}
            height={56}
            className="relative size-10 rounded-full border-2 border-[#9D4EDD] bg-card shadow-[0_0_30px_rgba(157,78,221,0.5)] md:size-14"
          />
        </motion.div>
      </motion.div>

      {/* Nodo START */}
      <motion.div
        ref={startRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
        className="relative flex items-center gap-6 pb-8 md:pb-12"
      >
        <div className="hidden flex-1 md:block md:max-w-[calc(50%-2rem)]" />
        <div className="absolute left-8 z-20 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
          <div className="flex size-10 items-center justify-center rounded-full border-2 border-[#00ff41] bg-background shadow-[0_0_0_4px_#000000,0_0_20px_rgba(0,255,65,0.6)]">
            <Play className="size-4 fill-[#00ff41] text-[#00ff41]" />
          </div>
        </div>
        <div className="ml-20 flex-1 md:ml-0 md:max-w-[calc(50%-2rem)] md:text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00ff41]">
            START
          </span>
        </div>
      </motion.div>

      {/* Módulos */}
      <div className="relative space-y-8 md:space-y-12">
        {modules.map((module, index) => {
          const isCompleted = completedModuleIds.includes(module.id);
          const isCurrent = currentModuleId === module.id;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={module.id}
              ref={setModuleRef(index)}
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
                  "group flex-1 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#9D4EDD] hover:bg-[#9D4EDD]/10 md:max-w-[calc(50%-2rem)]",
                  isCurrent &&
                    "border-[#00ff41]/50 shadow-[0_0_25px_rgba(0,255,65,0.15)]"
                )}
              >
                <a
                  href={`https://academy.hackthebox.com/course/preview/${module.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-[#9D4EDD]">
                          #{String(module.id).padStart(2, "0")}
                        </span>
                        {isCompleted ? (
                          <Check className="size-3 text-[#00ff41]" />
                        ) : (
                          <Lock className="size-3 text-[#00ff41]" />
                        )}
                        {isCurrent && (
                          <span className="rounded bg-[#00ff41]/10 px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase text-[#00ff41]">
                            En curso
                          </span>
                        )}
                      </div>
                      <h3
                        className={cn(
                          "font-semibold text-foreground transition-colors group-hover:text-[#C77DFF]",
                          isCompleted && "text-[#00ff41]"
                        )}
                      >
                        {module.title}
                      </h3>
                    </div>
                    <ExternalLink className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:text-[#C77DFF] group-hover:opacity-100" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {module.description}
                  </p>
                </a>
              </div>

              {/* Nodo central */}
              <div className="absolute left-8 z-20 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
                <div
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full border-2 transition-colors duration-300 shadow-[0_0_0_4px_#000000]",
                    isCompleted
                      ? "border-[#00ff41] bg-[#00ff41]/20 text-[#00ff41]"
                      : isCurrent
                        ? "border-[#00ff41] bg-background text-[#00ff41] shadow-[0_0_0_4px_#000000,0_0_30px_rgba(0,255,65,0.9)]"
                        : "border-[#C77DFF] bg-background text-[#C77DFF] shadow-[0_0_0_4px_#000000,0_0_20px_rgba(157,78,221,0.6)]"
                  )}
                >
                  <span className="font-mono text-xs font-bold">
                    {module.id}
                  </span>
                </div>
              </div>

              {/* Espaciador del lado opuesto en desktop */}
              <div className="hidden flex-1 md:block md:max-w-[calc(50%-2rem)]" />
            </motion.div>
          );
        })}

        {/* Boss final: Examen CPTS */}
        <motion.div
          ref={bossRef}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col items-center justify-center gap-6 pt-8"
        >
          {/* Nodo pequeño en la línea para el pin */}
          <div
            ref={bossNodeRef}
            className="absolute left-8 z-20 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2"
          >
            <motion.div
              animate={{
                boxShadow: isBossCompleted
                  ? [
                      "0 0 0 4px #000000, 0 0 15px rgba(0,255,65,0.4)",
                      "0 0 0 4px #000000, 0 0 30px rgba(0,255,65,0.6)",
                      "0 0 0 4px #000000, 0 0 15px rgba(0,255,65,0.4)",
                    ]
                  : [
                      "0 0 0 4px #000000, 0 0 15px rgba(157,78,221,0.4)",
                      "0 0 0 4px #000000, 0 0 30px rgba(255,0,60,0.5)",
                      "0 0 0 4px #000000, 0 0 15px rgba(157,78,221,0.4)",
                    ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className={cn(
                "size-5 rounded-full border-2 bg-background",
                isBossCompleted ? "border-[#00ff41]" : "border-destructive"
              )}
            />
          </div>

          {/* Card con icono grande e imagen del mago de fondo */}
          <div
            className={cn(
              "relative z-10 mx-auto w-full max-w-md overflow-hidden rounded-xl border border-[#00ff41]/50 bg-black/60 text-center shadow-[0_0_20px_rgba(0,255,65,0.15),0_0_40px_rgba(0,255,65,0.08)]",
              isBossCompleted && "shadow-[0_0_25px_rgba(0,255,65,0.25),0_0_50px_rgba(0,255,65,0.12)]"
            )}
          >
            {/* Imagen de fondo: mago CPTS sin fondo */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/cpts-wizard-transparent.png"
                alt=""
                fill
                className="object-contain object-center opacity-90"
                aria-hidden="true"
              />
            </div>

            {/* Contenido */}
            <div className="relative z-10 p-6">
              <div className="mb-4 flex justify-center">
                <motion.div
                  animate={{
                    boxShadow: isBossCompleted
                      ? [
                          "0 0 0 6px #000000, 0 0 20px rgba(0,255,65,0.4)",
                          "0 0 0 6px #000000, 0 0 40px rgba(0,255,65,0.6)",
                          "0 0 0 6px #000000, 0 0 20px rgba(0,255,65,0.4)",
                        ]
                      : [
                          "0 0 0 6px #000000, 0 0 20px rgba(157,78,221,0.4)",
                          "0 0 0 6px #000000, 0 0 40px rgba(255,0,60,0.5)",
                          "0 0 0 6px #000000, 0 0 20px rgba(157,78,221,0.4)",
                        ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className={cn(
                    "flex size-16 items-center justify-center rounded-full border-2 bg-background",
                    isBossCompleted ? "border-[#00ff41]" : "border-destructive"
                  )}
                >
                  {isBossCompleted ? (
                    <Check className="size-7 text-[#00ff41]" />
                  ) : (
                    <Trophy className="size-7 text-destructive" />
                  )}
                </motion.div>
              </div>
              <h3
                className={cn(
                  "font-mono text-sm font-bold uppercase tracking-wider",
                  isBossCompleted ? "text-[#00ff41]" : "text-destructive"
                )}
              >
                {isBossCompleted ? "Boss Derrotado" : "Boss Final"}
              </h3>
              <h4 className="mt-1 text-lg font-semibold text-foreground">
                HTB Certified Penetration Testing Specialist
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Examen práctico de pentesting web, externo e interno contra una
                red Active Directory real. Requiere completar el path al 100%.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
