export interface RoadmapModule {
  /** Identificador `dominio.número`, p. ej. "1.1". */
  id: string;
  title: string;
}

export interface RoadmapDomain {
  id: number;
  title: string;
  /** Peso del dominio en el examen, en %. */
  weight: number;
  description: string;
  modules: RoadmapModule[];
}

const modulesOf = (domain: number, titles: string[]): RoadmapModule[] =>
  titles.map((title, i) => ({ id: `${domain}.${i + 1}`, title }));

// BASE PROVISIONAL. Dominios del blueprint CCNA 200-301 v1.1 (pesos confirmados en fuentes de terceros)
// y módulos orientativos. Sustituir por la ruta de estudio de Hermes AI cuando esté lista.
export const ccnaDomains: RoadmapDomain[] = [
  {
    id: 1,
    title: "Network Fundamentals",
    weight: 20,
    description:
      "Qué hace cada componente de una red, cómo se comunican los dispositivos y cómo se direccionan IPv4 e IPv6.",
    modules: modulesOf(1, [
      "Componentes y topologías",
      "Cableado, interfaces y fallos físicos",
      "TCP, UDP y modelos OSI/TCP-IP",
      "IPv4 y subnetting",
      "IPv6",
      "Wireless y virtualización",
      "Conceptos de switching",
    ]),
  },
  {
    id: 2,
    title: "Network Access",
    weight: 20,
    description:
      "Cómo se conectan los dispositivos en la capa 2: VLAN, trunks, árbol de expansión y agregación de enlaces.",
    modules: modulesOf(2, [
      "VLAN y trunking 802.1Q",
      "Enrutamiento entre VLAN",
      "CDP y LLDP",
      "EtherChannel (LACP)",
      "Rapid PVST+",
      "Arquitecturas wireless y WLC",
    ]),
  },
  {
    id: 3,
    title: "IP Connectivity",
    weight: 25,
    description: "Cómo se enruta el tráfico entre redes. Es el dominio con más peso del examen.",
    modules: modulesOf(3, [
      "Tabla de rutas y reenvío",
      "Enrutamiento estático IPv4 e IPv6",
      "OSPFv2 de área única",
      "FHRP",
    ]),
  },
  {
    id: 4,
    title: "IP Services",
    weight: 10,
    description:
      "Los servicios que sostienen la red: asignación de direcciones, nombres, tiempo y monitorización.",
    modules: modulesOf(4, [
      "NAT y PAT",
      "DHCP, DNS y NTP",
      "SNMP y Syslog",
      "QoS",
      "SSH, FTP y TFTP",
    ]),
  },
  {
    id: 5,
    title: "Security Fundamentals",
    weight: 15,
    description: "Cómo se protegen dispositivos, accesos y tráfico dentro de la red.",
    modules: modulesOf(5, [
      "Amenazas y mitigación",
      "Acceso seguro a dispositivos",
      "VPN",
      "ACL",
      "Seguridad de capa 2",
      "AAA y WPA2/WPA3",
    ]),
  },
  {
    id: 6,
    title: "Automation & Programmability",
    weight: 10,
    description: "Gestión de redes con controladoras, APIs y herramientas de automatización.",
    modules: modulesOf(6, [
      "Automatización y SDN",
      "Redes tradicionales frente a controladoras",
      "APIs REST y JSON",
      "Ansible y Terraform",
      "IA y ML en operaciones de red",
    ]),
  },
];

export const ccnaModuleCount = ccnaDomains.reduce((n, d) => n + d.modules.length, 0);

// IDs de módulos completados, p. ej. "1.1". Editar a medida que avance.
export const COMPLETED_MODULE_IDS: string[] = [];
// Cambiar a true cuando apruebe el examen CCNA 200-301.
export const BOSS_COMPLETED = false;
