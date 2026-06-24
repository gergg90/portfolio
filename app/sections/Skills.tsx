"use client";

import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "../components/animations";

const skills = [
  {
    category: "Herramientas Ofensivas",
    items: [
      "Metasploit Framework",
      "Burp Suite",
      "Nmap",
      "Hydra",
      "Wireshark",
      "Ghidra",
      "Searchsploit",
      "ffuf",
      "Gobuster",
      "Wfuzz",
    ],
  },
  {
    category: "Técnicas de Pentesting",
    items: [
      "Reconocimiento pasivo/activo",
      "OSINT",
      "Enumeración de servicios",
      "Fuzzing",
      "OWASP Top 10",
      "SQLi",
      "XSS",
      "LFI/RFI",
      "SSRF",
      "XXE",
      "IDOR",
      "RCE",
      "Buffer Overflow (x86)",
      "Escalada de privilegios (SUID, capabilities, sudoers, docker group)",
      "Cracking de hashes y claves SSH",
    ],
  },
  {
    category: "Scripting & Automatización",
    items: [
      "Python (ofensivo)",
      "Bash scripting",
      "Automatización de recolección de información",
    ],
  },
  {
    category: "Redes & Protocolos",
    items: [
      "TCP/IP",
      "HTTP/HTTPS",
      "FTP/SFTP",
      "SMTP",
      "DNS",
      "DHCP",
      "SNMP",
      "BGP",
      "OSPF",
      "EIGRP",
      "RIP",
      "Cisco IOS",
    ],
  },
  {
    category: "Seguridad Defensiva / SIEM",
    items: [
      "Wazuh (monitorización de logs, detección de tráfico)",
      "Caldera (simulación de ataques ATT&CK;)",
    ],
  },
  {
    category: "Sistemas Operativos",
    items: [
      "Parrot Security OS",
      "Kali Linux",
      "Arch Linux",
      "GNU/Linux (administración, contenedores Docker)",
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="habilidades">
      <div className="flex flex-col gap-6">
        <SectionHeader
          title="Habilidades"
          subtitle="Habilidades técnicas y herramientas que domino en el área de ciberseguridad ofensiva y defensiva."
        />

        <StaggerContainer
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <div className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm card-hover">
                <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted/50 text-muted-foreground transition-colors duration-300 hover:bg-primary/20 hover:text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
