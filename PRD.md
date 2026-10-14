# Product Requirements Document (PRD)
## Portfolio de Ciberseguridad — Germain Gutierrez

**Versión:** 1.0  
**Fecha:** 2026-07-03  
**Repo:** https://github.com/gergg90/portfolio  
**URL de producción:** https://gergg90.vercel.app

---

## 1. Resumen Ejecutivo

Portfolio profesional de una sola página (single-page application estática) de Germain Gutierrez, con un perfil híbrido de redes, ciberseguridad e IA. El sitio usa una estética editorial-terminal (negro cálido, tipografía display y datos en mono), animaciones de scroll y una sección interactiva de progreso hacia el CCNA 200-301.

El objetivo principal es servir como carta de presentación pública: mostrar perfil, certificaciones, habilidades, roadmap de aprendizaje y canales de contacto.

---

## 2. Objetivo y Alcance

### Objetivos
- Posicionar al autor como analista de ciberseguridad en formación con enfoque ofensivo.
- Exhibir certificaciones verificables (Cisco Credly) y diplomas (Academia Hack4u).
- Documentar públicamente el progreso hacia el CCNA 200-301.
- Facilitar el contacto profesional y la descarga del CV.

### Alcance Incluido
- Landing page responsive con 7 secciones navegables.
- Hero tipográfico con palabra rotativa y animaciones de revelado por scroll.
- Ruta CCNA por los seis dominios del blueprint v1.1, con examen final.
- Galería de diplomas con lightbox/modal.
- Certificaciones Cisco con enlaces a Credly.
- Navegación fija con detección de sección activa.

### Fuera de Alcance (actualmente)
- Blog dinámico o CMS.
- Formulario de contacto con backend.
- Sistema de autenticación.
- Writeups publicados (la sección existe como placeholder).

---

## 3. Público Objetivo

- Reclutadores y responsables de hiring en ciberseguridad.
- Profesionales del sector que buscan validar perfil técnico.
- Comunidad CTF / HTB / Hack4u.
- Contactos de LinkedIn/GitHub que llegan desde la firma o el CV.

---

## 4. Stack Tecnológico

| Tecnología | Versión | Responsabilidad |
|------------|---------|-----------------|
| Next.js | 16.2.9 | Framework React con App Router y renderizado estático. |
| React | 19.2.4 | UI library. |
| TypeScript | 5.x | Tipado estático. |
| Tailwind CSS | 4.x | Estilos utilitarios y tema de colores. |
| shadcn/ui | 4.11.0 (base-nova) | Componentes base (Button, Badge). |
| Framer Motion | 12.40.0 | Animaciones de entrada, scroll y micro-interacciones. |
| Lucide React | 1.18.0 | Iconografía. |

### Scripts disponibles
- `npm run dev` — desarrollo.
- `npm run build` — build de producción.
- `npm run start` — servidor de producción.
- `npm run lint` — ESLint.

---

## 5. Estructura de la Información

La página principal renderiza las siguientes secciones en orden:

1. **Hero** — `#inicio`
2. **Sobre Mí** — `#sobre-mi`
3. **Habilidades** — `#habilidades`
4. **Formación** — `#formacion`
5. **Certificaciones** — `#certificaciones`
6. **Roadmap CCNA** — `#roadmap-ccna`
7. **Writeups** — `#writeups`
8. **Contacto** — `#contacto`

Cada sección utiliza `SectionWrapper` y `SectionHeader` para mantener consistencia de espaciado y tipografía.

---

## 6. Diseño y Branding

### Identidad Visual
- **Estilo general:** editorial-terminal. Negro cálido, tipografía display grande y datos en mono. Detalle completo en `DESIGN.md`.
- **Fondo:** `#0a0907`. Texto hueso `#ece8e1`.
- **Acento de marca:** morado `#9D4EDD`, usado con moderación.
- **Azul Cisco:** `#049fd9`, solo para CCNA y Cisco.
- **Verde señal:** `#00ff41`, solo para progreso completado y estado vivo.

### Tipografía
- Display: `Archivo` con eje `wdth` expandido (`--font-archivo`).
- Mono: `DM Mono` para etiquetas, rutas, hops y datos (`--font-dm-mono`).

### Reglas de Estilo Actuales
- Sin cards: las listas usan filas separadas por líneas finas (`.row-link`).
- Sin gradientes en títulos ni glow pulsante.
- Movimiento: revelado de texto por palabra, opacidad ligada al scroll en About, palabra rotativa en el Hero y marquee en Contacto. Todo respeta `prefers-reduced-motion`.

---

## 7. Componentes UI Reutilizables

| Componente | Ubicación | Propósito |
|------------|-----------|-----------|
| `Navbar` | `app/components/Navbar.tsx` | Navegación fija, scroll-aware, menú móvil. |
| `SectionWrapper` | `app/components/SectionWrapper.tsx` | Envoltorio consistente de secciones. |
| `SectionHeader` | `app/components/SectionHeader.tsx` | Título con `#`, subtítulo y línea divisoria. |
| `Roadmap` | `app/components/Roadmap.tsx` | Ruta vertical genérica por dominios + examen final. |
| `MotionProvider` | `app/components/MotionProvider.tsx` | Respeta `prefers-reduced-motion` en toda la página. |
| `ImageModal` | `app/components/ImageModal.tsx` | Lightbox para diplomas. |
| `AnnouncementPopover` | `app/components/AnnouncementPopover.tsx` | Popover de anuncios. |
| Animaciones (`FadeIn`, `SlideUp`, `StaggerContainer`, `StaggerItem`, `TextReveal`, `ScrollWords`, `RotatingWord`, `Marquee`) | `app/components/animations/` | Primitives de entrada y de scroll. |

---

## 8. Secciones Detalladas

### 8.1 Hero (`#inicio`)
- Frase display a tamaño grande: "Germain Gutierrez es analista de ciberseguridad que" + palabra rotativa en morado: "conecta redes / asegura sistemas / construye con IA".
- Fila de estado en mono: `● estudiando CCNA 200-301`, con accesos a `/ccna/`, `/cv/` (descarga) y `/contacto/`.
- Indicación "desplázate despacio" con línea animada.
- Arranque traceroute: un bloque mono sobre el titular teclea `traceroute germain.gutierrez` con cuatro saltos. Se muestra una vez por sesión (`sessionStorage`) y con reduced-motion aparece completo.

### 8.2 Sobre Mí (`#sobre-mi`)
- Biografía en 3 párrafos.
- Destaca formación en hacking ético, pentesting, reconocimiento, explotación, escalada de privilegios e informes.
- Menciona experiencia en plataformas CTF (Hack The Box, VulnHub) sin cuantificar número total de máquinas.
- Compromiso con aprendizaje continuo y ética profesional.

### 8.3 Habilidades (`#habilidades`)
- Grid de 6 cards de categorías (responsive 1→2→3 columnas).
- Categorías:
  1. Herramientas Ofensivas
  2. Técnicas de Pentesting
  3. Scripting & Automatización
  4. Redes & Protocolos
  5. Seguridad Defensiva / SIEM
  6. Sistemas Operativos
- Cada skill es un `Badge` con hover a morado.
- Badge "Escalada de privilegios" debe mantenerse acortado (no extender con explicaciones).

### 8.3b Formación (`#formacion`)
- Ingeniería en Informática en la Universidad Alejandro de Humboldt. Pensum oficial de 10 semestres.
- Traza de semestres `S01`…`S10`. El semestre en curso (S01) se marca con "en curso"; los completados irán en verde señal.
- Las 8 materias del semestre en curso, tal como aparecen en el pensum.
- Bloque "más adelante en la carrera" con 6 materias afines a redes y seguridad (Sistemas Operativos I y II, Redes I y II, Auditoría de Sistemas y Teleprocesos).
- Enlace al pensum oficial.
- Datos en `lib/formacion.ts`: `CURRENT_SEMESTER`, `completedSemesters`, `currentSubjects`, `upcomingHighlights`.

### 8.4 Certificaciones (`#certificaciones`)
#### Certificaciones Cisco
- 7 certificaciones obtenidas en 2024, enlazadas a Credly.
- Badge visual "CISCO" en azul `#049fd9`.
- Estado "Activa".

#### Diplomas Hack4u
- 4 diplomas en formato WebP, ordenados numéricamente por nombre de archivo.
- Títulos: Hacking Web, Introducción al Hacking, Personalización Linux, Arch Linux.
- Galería responsive con hover overlay "Ver diploma".
- Modal a pantalla completa al hacer click.

### 8.5 Roadmap CCNA (`#roadmap-ccna`)
- Ruta vertical por los seis dominios del blueprint CCNA 200-301 v1.1, con su peso en % y sus 33 módulos de estudio.
- Los módulos son una base provisional en `lib/roadmaps/ccna.ts`, hasta sustituirlos por la ruta de Hermes AI.
- Barra de progreso global en verde señal, contada en módulos.
- Traza de color Cisco que se dibuja con el scroll.
- Estados por módulo y por dominio: completado (check verde), en curso (azul Cisco, el primer módulo pendiente) y pendiente.
- Examen final CCNA 200-301 al final de la ruta, con estado aprobado o pendiente.
- Componente genérico `app/components/Roadmap.tsx`, reutilizable para otras rutas.

#### Configuración editable
- `COMPLETED_MODULE_IDS` en `lib/roadmaps/ccna.ts`: IDs de módulos completados, p. ej. `"1.1"`.
- `BOSS_COMPLETED` en `lib/roadmaps/ccna.ts`: boolean para el examen final.

### 8.6 Writeups (`#writeups`)
- Placeholder visual con icono de documento.
- Mensaje "Próximamente" y descripción de contenido en desarrollo.
- Archivos PDF existentes en `public/writeups/` y `index.json` preparados para futura implementación.

### 8.7 Contacto (`#contacto`)
- Card tipo terminal con mensaje de bienvenida.
- Enlaces: Email, LinkedIn, GitHub, Descargar CV.
- Footer CTA: "you have been pwned!" con glow verde.
- Link "Volver al Inicio".

---

## 9. Animaciones y Experiencia

- **Entrada:** `FadeIn`, `SlideUp`, `StaggerContainer/StaggerItem` usando Framer Motion.
- **Navbar:** detecta sección activa al scroll; transición suave del indicador con `layoutId`.
- **Hero:** escala del avatar, slide-up secuencial de textos y botones.
- **Roadmap:** la traza se dibuja con el scroll y cada dominio aparece al entrar en pantalla.
- **Descifrado:** títulos de sección, hop del navbar y estados del roadmap se descifran al entrar en pantalla. Cada carácter reserva su ancho, así que no hay saltos de layout.
- **Hover:** cambios de color en filas y enlaces, y la línea de la fila se vuelve morada.

---

## 10. Assets y Medios

### Imágenes
- `/certificados/*.webp` — diplomas Hack4u optimizados.
- `/docs/CV.pdf` — CV descargable.
- `/og-image.png` — imagen Open Graph (referenciada, debe existir).

### Formatos y Optimización
- Imágenes en WebP cuando sea posible.
- Next.js Image con `sizes` apropiados para diplomas.
- Cache inmutable en `/certificados/` y `/docs/` configurado en Vercel.

---

## 11. SEO y Metadatos

- Título: "Germain Gutierrez | Redes, Ciberseguridad e IA".
- Descripción enfocada en redes, ciberseguridad, IA agéntica y el camino al CCNA.
- Keywords: CCNA, CCNA 200-301, Cisco, redes, ciberseguridad, IA agéntica, Hack4u, etc.
- Open Graph y Twitter Cards configurados.
- `metadataBase` apunta a `https://gergg90.vercel.app`.
- Canonical URL configurada.
- `robots: index, follow`.

---

## 12. Rendimiento y Accesibilidad

- Renderizado estático (página prerendered como static content).
- Lazy loading de imágenes fuera del viewport.
- Animaciones respetan `prefers-reduced-motion` implícitamente mediante Framer Motion.
- Navegación por teclado en diplomas (Enter/Espacio abre modal).
- Labels `aria-label` en enlaces y botones.
- Contraste adecuado para texto principal sobre fondo oscuro.

---

## 13. Seguridad y Despliegue

### Headers de seguridad (vercel.json)
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### Configuración Next.js
- `poweredByHeader: false`.
- Formatos de imagen: WebP y AVIF.
- `optimizePackageImports` para `lucide-react` y `framer-motion`.

### Despliegue
- Plataforma: Vercel.
- Rama de producción: `master`.
- Despliegue automático en cada push.

---

## 14. Roadmap Futuro

- Publicar writeups técnicos y de máquinas enlazados desde `public/writeups/index.json`.
- Añadir más certificaciones/diplomas a medida que se obtengan.
- Considerar integración con un headless CMS para writeups.
- Mantener actualizado el array `COMPLETED_MODULE_IDS` en `lib/roadmaps/ccna.ts` a medida que avanza la ruta CCNA.

---

## 15. Historial de Cambios Recientes

| Fecha | Cambio | Archivos afectados |
|-------|--------|---------------------|
| 2026-10-13 | Sección Formación (Ingeniería en Informática, UAH, semestre 01) con traza de semestres y pensum. Roadmap CCNA por 33 módulos. Efectos de descifrado y arranque traceroute. Ruta única de hops en `lib/traza.ts`. | `app/sections/Formacion.tsx`, `lib/formacion.ts`, `lib/traza.ts`, `lib/roadmaps/ccna.ts`, `app/components/Roadmap.tsx`, `app/components/animations/ScrambleText.tsx`, `app/components/TracerouteBoot.tsx`, `app/components/Navbar.tsx`, `app/components/SectionHeader.tsx` |
| 2026-10-13 | Rediseño editorial-terminal (negro cálido, Archivo + DM Mono, sin cards ni lluvia Matrix) y hero de perfil híbrido redes + seguridad + IA. | `app/globals.css`, `app/layout.tsx`, `app/sections/Hero.tsx`, `app/sections/About.tsx`, `app/sections/Skills.tsx`, `app/sections/Certifications.tsx`, `app/components/Navbar.tsx`, `app/components/animations/`, `DESIGN.md`, `PRODUCT.md` |
| 2026-10-13 | Roadmap migrado de CPTS a CCNA 200-301: ruta por dominios del blueprint v1.1, sección `#roadmap-ccna`, popover con nueva key y SEO sin CPTS, OSCP ni eJPT. Retirados `CptsRoadmap`, `CptsPodium`, `HackerBackground` y sus assets. | `lib/roadmaps/ccna.ts`, `app/components/Roadmap.tsx`, `app/sections/RoadmapCCNA.tsx`, `app/components/AnnouncementPopover.tsx`, `app/layout.tsx`, `public/manifest.json` |
| 2026-07-03 | Eliminado conteo total de máquinas en Sobre Mí. | `app/sections/About.tsx` |
| 2026-07-03 | Acortado badge "Escalada de privilegios" en Habilidades. | `app/sections/Skills.tsx` |
| 2026-07-03 | Añadido diploma Hacking Web, reordenados diplomas numéricamente. | `public/certificados/`, `app/sections/Certifications.tsx` |
| 2026-07-03 | Reconstruido roadmap CPTS con pin estilo Mario, START, checks y podio. | `app/components/CptsRoadmap.tsx`, `app/components/CptsPodium.tsx`, `app/sections/RoadmapCPTS.tsx` |
| 2026-07-03 | Fondo Matrix actualizado a 75% morado / 25% verde. | `app/components/HackerBackground.tsx` |

---

## 16. Notas para Mantenedores

- Antes de escribir código, consultar `node_modules/next/dist/docs/`: este proyecto usa Next.js 16 con convenciones que pueden diferir de versiones anteriores.
- Para actualizar el progreso del roadmap, editar únicamente `COMPLETED_MODULE_IDS` y `BOSS_COMPLETED` en `lib/roadmaps/ccna.ts`.
- Al añadir diplomas, nombrar archivos con prefijo numérico (ej. `5_nuevo_diploma.webp`) para mantener el orden.
- Ejecutar `npm run build` antes de cada push para verificar que no hay errores de tipo ni de compilación.
