"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../components/animations";
import ImageModal from "../components/ImageModal";
import { motion } from "framer-motion";

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

// Diplomas de la Academia Hack4u
const diplomas = [
  {
    filename: "archlinux.webp",
    title: "Arch Linux",
    image: "/certificados/archlinux.webp",
  },
  {
    filename: "introduccion_al_hacking.webp",
    title: "Introducción al Hacking",
    image: "/certificados/introduccion_al_hacking.webp",
  },
  {
    filename: "personalizacion_linux.webp",
    title: "Personalización Linux",
    image: "/certificados/personalizacion_linux.webp",
  },
];

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const handleDiplomaClick = (image: string, title: string) => {
    setSelectedImage({ src: image, title });
  };

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
                  aria-label={`Ver certificación ${cert.name} en Credly`}
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

        {/* Diplomas de la Academia Hack4u */}
        <div>
          <SectionHeader 
            title="Diplomas" 
            subtitle="Diplomas obtenidos en la Academia Hack4u de Marcelo Vázquez (S4vitar)."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diplomas.map((diploma, index) => (
              <motion.div
                key={diploma.filename}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-xl border border-border/50 bg-card/50 overflow-hidden backdrop-blur-sm card-hover cursor-pointer"
                onClick={() => handleDiplomaClick(diploma.image, diploma.title)}
                role="button"
                tabIndex={0}
                aria-label={`Ver diploma de ${diploma.title} en tamaño completo`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleDiplomaClick(diploma.image, diploma.title);
                  }
                }}
              >
                {/* Imagen del diploma */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={diploma.image}
                    alt={`Diploma de ${diploma.title} - Academia Hack4u`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay al hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm">
                        <svg className="size-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-white">Ver diploma</span>
                    </div>
                  </div>
                </div>

                {/* Info del diploma */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-foreground text-sm">
                        {diploma.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        Academia Hack4u
                      </span>
                    </div>
                    {/* Badge HACK4U */}
                    <span className="inline-flex items-center rounded-full bg-destructive/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-destructive">
                      HACK4U
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal/Lightbox */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        src={selectedImage?.src || ""}
        alt={selectedImage?.title || ""}
        title={selectedImage?.title || ""}
      />
    </SectionWrapper>
  );
}
