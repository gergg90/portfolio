"use client";

import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { StaggerContainer, StaggerItem } from "../components/animations";

// Orden: del cable a la aplicación. Redes primero, que es el foco actual.
const skills = [
  {
    category: "Redes & Protocolos",
    items: [
      "TCP/IP",
      "Cisco IOS",
      "OSPF",
      "EIGRP",
      "BGP",
      "RIP",
      "DNS",
      "DHCP",
      "SNMP",
      "HTTP/HTTPS",
      "FTP/SFTP",
      "SMTP",
    ],
  },
  {
    category: "Seguridad Defensiva / SIEM",
    items: [
      "Wazuh (monitorización de logs, detección de tráfico)",
      "Caldera (simulación de ataques ATT&CK)",
    ],
  },
  {
    category: "Técnicas Ofensivas",
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
      "Escalada de privilegios",
      "Cracking de hashes y claves SSH",
    ],
  },
  {
    category: "Herramientas",
    items: [
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "Metasploit Framework",
      "Hydra",
      "Ghidra",
      "Searchsploit",
      "ffuf",
      "Gobuster",
      "Wfuzz",
    ],
  },
  {
    category: "Scripting & IA",
    items: [
      "Python",
      "Bash scripting",
      "Automatización de recolección de información",
      "Desarrollo con agentes (Claude Code)",
    ],
  },
  {
    category: "Sistemas Operativos",
    items: [
      "GNU/Linux (administración, contenedores Docker)",
      "Arch Linux",
      "Parrot Security OS",
      "Kali Linux",
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="habilidades">
      <SectionHeader
        title="Habilidades"
        section="habilidades"
        subtitle="Del cable a la aplicación: lo que uso para entender, defender y probar una red."
      />

      <StaggerContainer className="border-b border-border" staggerDelay={0.06}>
        {skills.map((group) => (
          <StaggerItem key={group.category}>
            <div className="row-link grid gap-4 py-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-10 md:py-10">
              <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-none text-foreground">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 md:pt-1">
                {group.items.map((skill) => (
                  <li key={skill} className="text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
