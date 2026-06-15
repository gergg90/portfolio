"use client";

import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "../components/animations";

const skills = [
  { category: "Sistemas", items: ["Linux", "Windows", "Active Directory", "Bash"] },
  { category: "Redes", items: ["TCP/IP", "Wireshark", "Nmap", "Burp Suite"] },
  { category: "Web", items: ["OWASP Top 10", "SQL Injection", "XSS", "SSRF"] },
  { category: "Programación", items: ["Python", "Go", "JavaScript", "PowerShell"] },
  { category: "Forense", items: ["Autopsy", "Volatility", "OSINT", "Malware Analysis"] },
  { category: "Cloud", items: ["AWS", "Azure", "Docker", "Kubernetes"] },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="flex flex-col gap-6">
        <SectionHeader 
          title="Skills" 
          subtitle="Technologies and tools I work with on a daily basis."
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
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
                      className="bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-300"
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
