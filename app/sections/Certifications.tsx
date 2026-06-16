"use client";

import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink, GraduationCap, FileText } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../components/animations";

const certifications = [
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    status: "Activa",
    credlyUrl: "https://www.credly.com/badges/ce93868f-83a4-46ad-96e7-319c7ccca35d",
  },
  {
    name: "Network Technician Career Path",
    issuer: "Cisco Networking Academy",
    date: "2024",
    status: "Activa",
    credlyUrl: "https://www.credly.com/badges/4fd7d965-5dc4-4cf2-bcd7-c00ec1b43e3e",
  },
  {
    name: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    date: "2024",
    status: "Activa",
    credlyUrl: "https://www.credly.com/badges/0a035751-77c8-4e25-8ae2-7e17dc50baab",
  },
  {
    name: "Networking Devices and Initial Configuration",
    issuer: "Cisco Networking Academy",
    date: "2024",
    status: "Activa",
    credlyUrl: "https://www.credly.com/badges/e3e43412-f071-4bac-ad66-8ccbb4d62836",
  },
  {
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "2024",
    status: "Activa",
    credlyUrl: "https://www.credly.com/badges/290b4168-f762-47f8-be48-22eeb9d7f767",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2024",
    status: "Activa",
    credlyUrl: "https://www.credly.com/badges/4c85ce78-79e5-4d9a-8b3e-6f32a511a889",
  },
  {
    name: "Cybersecurity Awareness Professional Certification – CAPC",
    issuer: "Cisco Networking Academy",
    date: "2024",
    status: "Activa",
    credlyUrl: "https://www.credly.com/badges/7f43bdd5-f264-4776-a42b-75b528c7c62f",
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certificaciones" className="bg-secondary/30">
      <div className="flex flex-col gap-8">
        {/* Certificaciones Cisco con Credly */}
        <div>
          <SectionHeader 
            title="Certificaciones" 
            subtitle="Certificaciones profesionales de Cisco Networking Academy verificadas en Credly."
          />

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {certifications.map((cert) => (
              <StaggerItem key={cert.name}>
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block flex flex-col gap-3 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm card-hover relative overflow-hidden"
                >
                  {/* Badge visual Cisco */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#049fd9]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#049fd9]">
                      CISCO
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#049fd9]/10 text-[#049fd9] transition-all duration-300 group-hover:bg-[#049fd9]/20 group-hover:scale-110">
                      <Award className="size-6" />
                    </div>
                    <div className="flex flex-col pr-12">
                      <h3 className="font-semibold text-foreground text-sm leading-tight">
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
                        className="bg-[#049fd9]/20 text-[#049fd9] border-[#049fd9]/30 text-xs"
                      >
                        {cert.status}
                      </Badge>
                      <ExternalLink className="size-3 text-muted-foreground group-hover:text-[#049fd9] transition-colors" />
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Certificados PDF adicionales */}
        <div>
          <SectionHeader 
            title="Certificados" 
            subtitle="Certificados adicionales en formato PDF disponibles para descarga."
          />

          <div className="flex flex-col gap-4 sm:flex-row items-center justify-center p-8 rounded-xl border border-dashed border-border/50 bg-card/30">
            <div className="flex items-center gap-3 text-muted-foreground">
              <FileText className="size-6 text-primary/50" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Certificados PDF</span>
                <span className="text-xs">Sube tus certificados escaneados a la carpeta <code className="text-primary">/public/certificados/</code></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
