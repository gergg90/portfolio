"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { SlideUp, StaggerContainer, StaggerItem } from "../components/animations";
import ImageModal from "../components/ImageModal";

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
    filename: "1_hacking_web.webp",
    title: "Hacking Web",
    image: "/certificados/1_hacking_web.webp",
  },
  {
    filename: "2_introduccion_al_hacking.webp",
    title: "Introducción al Hacking",
    image: "/certificados/2_introduccion_al_hacking.webp",
  },
  {
    filename: "3_personalizacion_linux.webp",
    title: "Personalización Linux",
    image: "/certificados/3_personalizacion_linux.webp",
  },
  {
    filename: "4_archlinux.webp",
    title: "Arch Linux",
    image: "/certificados/4_archlinux.webp",
  },
];

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <SectionWrapper id="certificaciones">
      <SectionHeader
        title="Certificaciones"
        path="/certs/"
        hop={4}
        subtitle="Siete certificaciones de Cisco Networking Academy, todas verificables en Credly."
      />

      {/* Cisco: tabla editorial */}
      <div className="label-mono hidden grid-cols-[4rem_minmax(0,1fr)_14rem_6rem] gap-6 pb-3 text-muted-foreground md:grid">
        <span>Año</span>
        <span>Certificación</span>
        <span>Emisor</span>
        <span className="text-right">Verificar</span>
      </div>
      <StaggerContainer className="border-b border-border" staggerDelay={0.05}>
        {certifications.map((cert) => (
          <StaggerItem key={cert.name}>
            <a
              href={cert.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver la certificación ${cert.name} en Credly`}
              className="row-link group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-1 py-5 md:grid-cols-[4rem_minmax(0,1fr)_14rem_6rem] md:py-6"
            >
              <span className="label-mono order-2 col-span-2 text-cisco md:order-none md:col-span-1">
                {cert.date} · {cert.status}
              </span>
              <span className="text-lg font-medium leading-snug text-foreground md:text-xl">
                {cert.name}
              </span>
              <span className="hidden text-sm text-muted-foreground md:block">{cert.issuer}</span>
              <span className="label-mono flex items-center justify-end gap-1 text-muted-foreground">
                <span className="hidden md:inline">credly</span>
                <ArrowUpRight className="row-arrow size-4" strokeWidth={1.5} aria-hidden />
              </span>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Hack4u: tira de diplomas */}
      <div className="mt-24 md:mt-32">
        <SlideUp className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h3 className="font-display text-[clamp(1.6rem,3.4vw,2.5rem)] text-foreground">
            Diplomas Hack4u
          </h3>
          <p className="text-muted-foreground">Academia Hack4u de Marcelo Vázquez (S4vitar).</p>
        </SlideUp>

        <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0">
          {diplomas.map((diploma, index) => (
            <li key={diploma.filename} className="w-[78%] shrink-0 snap-start sm:w-[45%] md:w-auto">
              <SlideUp delay={index * 0.08}>
                <button
                  type="button"
                  onClick={() => setSelectedImage({ src: diploma.image, title: diploma.title })}
                  aria-label={`Ver el diploma de ${diploma.title} a tamaño completo`}
                  className="group block w-full text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-card">
                    <Image
                      src={diploma.image}
                      alt={`Diploma de ${diploma.title}, Academia Hack4u`}
                      fill
                      sizes="(max-width: 640px) 78vw, (max-width: 768px) 45vw, 25vw"
                      className="object-cover grayscale-[35%] transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                    />
                    <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <Maximize2 className="size-3.5" strokeWidth={1.5} aria-hidden />
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-3 border-t border-border pt-3">
                    <span className="font-medium text-foreground">{diploma.title}</span>
                    <span className="label-mono text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              </SlideUp>
            </li>
          ))}
        </ul>
      </div>

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
