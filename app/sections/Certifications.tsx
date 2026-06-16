"use client";

import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink, GraduationCap } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../components/animations";

const certifications = [
  {
    name: "eJPT",
    issuer: "eLearnSecurity",
    date: "2024-08",
    status: "Activa",
    credlyUrl: "https://www.credly.com/badges/ejpt-placeholder",
  },
  {
    name: "OSCP",
    issuer: "Offensive Security",
    date: "2025-02",
    status: "Activa",
    credlyUrl: "https://www.credly.com/badges/oscp-placeholder",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2024-03",
    status: "Activa",
    credlyUrl: "https://www.credly.com/badges/security-plus-placeholder",
  },
  {
    name: "CEH",
    issuer: "EC-Council",
    date: "2023-11",
    status: "Activa",
    credlyUrl: "https://www.credly.com/badges/ceh-placeholder",
  },
];

const diplomas = [
  {
    name: "Diploma de Ciberseguridad",
    academy: "Academia de Seguridad",
    date: "2024-06",
    description: "Formación especializada en pentesting y análisis de vulnerabilidades.",
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certificaciones" className="bg-secondary/30">
      <div className="flex flex-col gap-8">
        {/* Certificaciones con Credly */}
        <div>
          <SectionHeader 
            title="Certificaciones" 
            subtitle="Certificaciones profesionales verificadas internacionalmente."
          />

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {certifications.map((cert) => (
              <StaggerItem key={cert.name}>
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block flex flex-col gap-3 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm card-hover"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <Award className="size-6" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-foreground">
                        {cert.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="size-3.5" />
                      <span>{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Badge
                        variant="outline"
                        className="bg-primary/20 text-primary border-primary/30 text-xs"
                      >
                        {cert.status}
                      </Badge>
                      <ExternalLink className="size-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Diplomas de Academia */}
        <div>
          <SectionHeader 
            title="Diplomas" 
            subtitle="Formación académica y certificaciones locales."
          />

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2" staggerDelay={0.1}>
            {diplomas.map((diploma) => (
              <StaggerItem key={diploma.name}>
                <div className="group flex flex-col gap-3 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm card-hover">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                      <GraduationCap className="size-6" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-foreground">
                        {diploma.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {diploma.academy}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {diploma.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="size-3.5" />
                      <span>{diploma.date}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-accent/20 text-accent border-accent/30 text-xs"
                    >
                      Local
                    </Badge>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </SectionWrapper>
  );
}
