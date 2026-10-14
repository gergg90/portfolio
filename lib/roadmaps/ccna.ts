export interface RoadmapModule {
  id: number;
  title: string;
  /** Peso del dominio en el examen, en %. */
  weight: number;
  description: string;
  topics: string[];
}

// Dominios del blueprint CCNA 200-301 v1.1 (pesos confirmados en fuentes de terceros).
// Sustituir por la ruta de estudio de Hermes AI cuando esté lista.
export const ccnaModules: RoadmapModule[] = [
  {
    id: 1,
    title: "Network Fundamentals",
    weight: 20,
    description:
      "Qué hace cada componente de una red, cómo se comunican los dispositivos y cómo se direccionan IPv4 e IPv6.",
    topics: ["Componentes de red", "Topologías", "Cableado", "TCP y UDP", "IPv4 y subnetting", "IPv6", "Wireless", "Virtualización"],
  },
  {
    id: 2,
    title: "Network Access",
    weight: 20,
    description:
      "Cómo se conectan los dispositivos en la capa 2: VLAN, trunks, árbol de expansión y agregación de enlaces.",
    topics: ["VLAN", "Trunking 802.1Q", "STP", "EtherChannel", "Controladoras wireless"],
  },
  {
    id: 3,
    title: "IP Connectivity",
    weight: 25,
    description:
      "Cómo se enruta el tráfico entre redes. Es el dominio con más peso del examen.",
    topics: ["Tablas de rutas", "Enrutamiento estático", "OSPFv2 de área única", "Redundancia de primer salto"],
  },
  {
    id: 4,
    title: "IP Services",
    weight: 10,
    description:
      "Los servicios que sostienen la red: asignación de direcciones, nombres, tiempo y monitorización.",
    topics: ["DHCP", "DNS", "NAT", "NTP", "SNMP", "Syslog", "QoS"],
  },
  {
    id: 5,
    title: "Security Fundamentals",
    weight: 15,
    description:
      "Cómo se protegen dispositivos, accesos y tráfico dentro de la red.",
    topics: ["ACL", "Port security", "AAA", "VPN", "Firewalls"],
  },
  {
    id: 6,
    title: "Automation & Programmability",
    weight: 10,
    description:
      "Gestión de redes con controladoras, APIs y herramientas de automatización.",
    topics: ["SDN y controladoras", "APIs REST", "JSON", "Gestión de configuración", "Cloud"],
  },
];

// IDs de los dominios ya completados. Editar a medida que avance.
export const COMPLETED_MODULE_IDS: number[] = [];
// Cambiar a true cuando apruebe el examen CCNA 200-301.
export const BOSS_COMPLETED = false;
