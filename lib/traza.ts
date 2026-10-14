// Traza de la página: cada entrada es un salto. El `id` debe coincidir con el `id` de la sección.
export const navLinks = [
  { id: "inicio", label: "Inicio", path: "/" },
  { id: "sobre-mi", label: "Sobre mí", path: "/sobre-mí/" },
  { id: "habilidades", label: "Habilidades", path: "/skills/" },
  { id: "formacion", label: "Formación", path: "/formación/" },
  { id: "certificaciones", label: "Certificaciones", path: "/certs/" },
  { id: "roadmap-ccna", label: "Roadmap CCNA", path: "/ccna/" },
  { id: "writeups", label: "Writeups", path: "/writeups/" },
  { id: "contacto", label: "Contacto", path: "/contacto/" },
] as const;

export type SectionId = (typeof navLinks)[number]["id"];

const pad = (n: number) => String(n).padStart(2, "0");

/** Posición de una sección en la traza: número, total, ruta y etiqueta. */
export function hopOf(id: SectionId) {
  const index = navLinks.findIndex((link) => link.id === id);
  const { label, path } = navLinks[index];
  const hop = index + 1;
  const total = navLinks.length;
  return { hop, total, label, path, tag: `hop ${pad(hop)}/${pad(total)}` };
}
