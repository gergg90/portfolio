"use client";

import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../components/animations";

const certifications = [
  {
    name: "eJPT",
    issuer: "eLearnSecurity",
    date: "2024-08",
    status: "Active",
  },
  {
    name: "OSCP",
    issuer: "Offensive Security",
    date: "2025-02",
    status: "Active",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2024-03",
    status: "Active",
  },
  {
    name: "CEH",
    issuer: "EC-Council",
    date: "2023-11",
    status: "Active",
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certs" className="bg-secondary/30">
      <div className="flex flex-col gap-6">
        <SectionHeader 
          title="Certifications" 
          subtitle="Professional certifications and achievements."
        />

        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <div className="group flex flex-col gap-3 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm card-hover">
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
                  <Badge
                    variant="outline"
                    className="bg-primary/20 text-primary border-primary/30 text-xs"
                  >
                    {cert.status}
                  </Badge>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
