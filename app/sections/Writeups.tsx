"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, FileText } from "lucide-react";

// Writeups de HackTheBox
const hacktheboxWriteups = [
  {
    title: "HackTheBox - Machine #1",
    date: "2024-01",
    tags: ["Linux", "Privilege Escalation", "Web Exploitation"],
    difficulty: "Medium",
    file: "/writeups/hackthebox/machine-1.pdf",
  },
  {
    title: "HackTheBox - Machine #2",
    date: "2024-02",
    tags: ["Windows", "Active Directory", "Kerberos"],
    difficulty: "Hard",
    file: "/writeups/hackthebox/machine-2.pdf",
  },
  {
    title: "HackTheBox - Machine #3",
    date: "2024-03",
    tags: ["Web", "SQL Injection", "RCE"],
    difficulty: "Easy",
    file: "/writeups/hackthebox/machine-3.pdf",
  },
];

// Writeups Técnicos
const technicalWriteups = [
  {
    title: "Buffer Overflow (BOF) - Explicación Técnica",
    description: "Análisis detallado de cómo ocurre un Buffer Overflow, desde la memoria stack hasta la ejecución de código arbitrario.",
    date: "2024-05",
    tags: ["Exploit Development", "Assembly", "GDB"],
    file: "/writeups/tecnicos/bof-explicacion.pdf",
    icon: FileText,
  },
  {
    title: "Man-in-the-Middle (MitM) - Ataques y Defensas",
    description: "Explicación completa de ataques MitM: ARP Spoofing, DNS Spoofing, SSL Stripping y cómo mitigarlos.",
    date: "2024-06",
    tags: ["Networking", "ARP", "SSL/TLS"],
    file: "/writeups/tecnicos/mitm-explicacion.pdf",
    icon: FileText,
  },
  {
    title: "DNS Spoofing - Desde la Teoría a la Práctica",
    description: "Cómo funciona el envenenamiento de DNS, herramientas como dnsspoof y ettercap, y técnicas de defensa.",
    date: "2024-07",
    tags: ["DNS", "Networking", "Kali Linux"],
    file: "/writeups/tecnicos/dns-spoofing.pdf",
    icon: FileText,
  },
];

const difficultyColors: Record<string, string> = {
  Easy: "bg-primary/20 text-primary border-primary/30",
  Medium: "bg-accent/20 text-accent border-accent/30",
  Hard: "bg-destructive/20 text-destructive border-destructive/30",
};

export default function Writeups() {
  const [activeTab, setActiveTab] = useState<"hackthebox" | "tecnicos">("hackthebox");

  return (
    <SectionWrapper id="writeups">
      <div className="flex flex-col gap-6">
        <SectionHeader 
          title="Writeups" 
          subtitle="Writeups de HackTheBox y explicaciones técnicas de conceptos de ciberseguridad."
        />

        {/* Tabs */}
        <div className="flex gap-2">
          <motion.button
            onClick={() => setActiveTab("hackthebox")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === "hackthebox"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary"
            }`}
          >
            HackTheBox
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("tecnicos")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === "tecnicos"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary"
            }`}
          >
            Técnicos
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "hackthebox" ? (
            <motion.div
              key="hackthebox"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {hacktheboxWriteups.map((writeup, index) => (
                <motion.div
                  key={writeup.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm card-hover">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge
                        variant="outline"
                        className={difficultyColors[writeup.difficulty] || "bg-muted text-muted-foreground"}
                      >
                        {writeup.difficulty}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {writeup.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {writeup.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-muted/50 text-muted-foreground text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-border/30">
                      <span className="font-mono text-xs text-muted-foreground">
                        {writeup.date}
                      </span>
                      <a
                        href={writeup.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Leer
                        <ExternalLink className="size-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="tecnicos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {technicalWriteups.map((writeup, index) => {
                const Icon = writeup.icon;
                return (
                  <motion.div
                    key={writeup.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm card-hover">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {writeup.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {writeup.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {writeup.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-muted/50 text-muted-foreground text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-border/30">
                        <span className="font-mono text-xs text-muted-foreground">
                          {writeup.date}
                        </span>
                        <a
                          href={writeup.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          Leer
                          <ExternalLink className="size-3.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
