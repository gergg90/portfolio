# Product Requirements Document (PRD)
## Portfolio de Ciberseguridad — Germain Gutierrez

**Versión:** 1.0  
**Fecha:** 2026-07-03  
**Repo:** https://github.com/gergg90/portfolio  
**URL de producción:** https://gergg90.vercel.app

---

## 1. Resumen Ejecutivo

Portfolio profesional de una sola página (single-page application estática) orientado a la ciberseguridad ofensiva, pentesting, CTF y análisis de vulnerabilidades. El sitio combina una estética "hacker/terminal" con tonos morados (identidad CPTS) y acentos verdes Matrix, animaciones premium y una sección interactiva de progreso hacia la certificación HTB CPTS.

El objetivo principal es servir como carta de presentación pública: mostrar perfil, certificaciones, habilidades, roadmap de aprendizaje y canales de contacto.

---

## 2. Objetivo y Alcance

### Objetivos
- Posicionar al autor como analista de ciberseguridad en formación con enfoque ofensivo.
- Exhibir certificaciones verificables (Cisco Credly) y diplomas (Academia Hack4u).
- Documentar públicamente el progreso hacia HTB CPTS.
- Facilitar el contacto profesional y la descarga del CV.

### Alcance Incluido
- Landing page responsive con 7 secciones navegables.
- Fondo animado con partículas y lluvia de caracteres estilo Matrix.
- Roadmap visual interactivo de 28 módulos + boss final CPTS.
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
4. **Certificaciones** — `#certificaciones`
5. **Roadmap CPTS** — `#roadmap-cpts`
6. **Writeups** — `#writeups`
7. **Contacto** — `#contacto`

Cada sección utiliza `SectionWrapper` y `SectionHeader` para mantener consistencia de espaciado y tipografía.

---

## 6. Diseño y Branding

### Identidad Visual
- **Estilo general:** dark mode, inspirado en terminales, Matrix y cultura CTF.
- **Primario:** morado CPTS `#9D4EDD` (confianza, tecnología, identidad HTB).
- **Acento verde:** `#00ff41` para progreso, candados, terminal y elementos "pwned".
- **Acento cyan:** `#00ffff` para highlights secundarios.
- **Destructivo:** `#ff003c` para el boss final bloqueado y advertencias.
- **Fondos:** negro `#000000`, cards `#161b22`, bordes `#30363d`.

### Tipografía
- Sans: `Inter` (variable `--font-sans`).
- Mono: `Geist Mono` (variable `--font-geist-mono`).

### Reglas de Estilo Actuales
- Sin gradientes en títulos de Hero/Roadmap; se usa glow pulsante morado (`.text-purple-glow`).
- Verde se reserva para: candados, línea de progreso completada, etiqueta "En curso", footer pwned y terminal.
- Las cards usan `.card-hover` para elevación y brillo morado al hover.

---

## 7. Componentes UI Reutilizables

| Componente | Ubicación | Propósito |
|------------|-----------|-----------|
| `Navbar` | `app/components/Navbar.tsx` | Navegación fija, scroll-aware, menú móvil. |
| `SectionWrapper` | `app/components/SectionWrapper.tsx` | Envoltorio consistente de secciones. |
| `SectionHeader` | `app/components/SectionHeader.tsx` | Título con `#`, subtítulo y línea divisoria. |
| `HackerBackground` | `app/components/HackerBackground.tsx` | Canvas con partículas y lluvia de caracteres. |
| `CptsRoadmap` | `app/components/CptsRoadmap.tsx` | Roadmap visual de 28 módulos + boss. |
| `CptsPodium` | `app/components/CptsPodium.tsx` | Podio de celebración al completar boss. |
| `ImageModal` | `app/components/ImageModal.tsx` | Lightbox para diplomas. |
| `AnnouncementPopover` | `app/components/AnnouncementPopover.tsx` | Popover de anuncios. |
| Animaciones (`FadeIn`, `SlideUp`, `StaggerContainer`, `StaggerItem`) | `app/components/animations/` | Primitives de entrada animada. |

---

## 8. Secciones Detalladas

### 8.1 Hero (`#inicio`)
- Fondo animado `HackerBackground`.
- Avatar circular con icono de usuario, borde morado y scan line.
- Tagline tipo terminal: `[ inicializando conexión segura... ]`.
- Nombre con glow morado pulsante.
- Rol: "Analista de Ciberseguridad | Pentester | CTF Player".
- CTA primario: "Ver Writeups". CTA secundario: "Descargar CV" (`/docs/CV.pdf`).
- Flecha animada hacia la siguiente sección.

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

### 8.5 Roadmap CPTS (`#roadmap-cpts`)
- Header con barra de progreso: `~/cpts-roadmap/progress.txt`.
- Progreso calculado sobre 28 módulos.
- Disclaimer con enlace a HTB Academy.
- Roadmap visual tipo timeline:
  - Nodo `START` con icono Play verde.
  - 28 módulos numerados, distribuidos alternadamente izquierda/derecha en desktop.
  - Módulos completados muestran check verde y título verde.
  - Módulo actual muestra badge "En curso" y borde verde.
  - Módulos futuros muestran candado verde y nodo morado.
  - Pin CPTS animado que avanza como en un nivel de Mario según progreso.
  - Línea base morada y canal iluminado verde hasta el progreso actual.
- Boss final: card estilo "YOU HAVE BEEN PWNED" con icono de trofeo; mago CPTS transparente debajo.
- `CptsPodium` aparece cuando `BOSS_COMPLETED = true`.

#### Configuración editable
- `COMPLETED_MODULE_IDS` en `RoadmapCPTS.tsx`: array de IDs completados.
- `BOSS_COMPLETED` en `RoadmapCPTS.tsx`: boolean para controlar podio.

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
- **Roadmap:** animación de entrada de cada módulo al hacer scroll; pin CPTS rebota y se mueve suavemente entre nodos.
- **Fondo:** partículas conectadas y lluvia de caracteres katakana/binarios. Proporción de colores: 75% morado / 25% verde.
- **Hover:** elevación de cards, badges a color primario, iconos Cisco a escala.

---

## 10. Assets y Medios

### Imágenes
- `/images/cpts-badge.png` — insignia HTB CPTS, usada en pin, fondo y podio.
- `/images/cpts-wizard-transparent.png` — mago CPTS sin fondo, debajo del boss final.
- `/certificados/*.webp` — diplomas Hack4u optimizados.
- `/docs/CV.pdf` — CV descargable.
- `/og-image.png` — imagen Open Graph (referenciada, debe existir).

### Formatos y Optimización
- Imágenes en WebP cuando sea posible.
- Next.js Image con `sizes` apropiados para diplomas.
- Cache inmutable en `/certificados/` y `/docs/` configurado en Vercel.

---

## 11. SEO y Metadatos

- Título: "Germain Gutierrez | Analista de Ciberseguridad".
- Descripción enfocada en hacking ético, pentesting, CTF y HTB.
- Keywords: ciberseguridad, pentesting, HTB CPTS, OSCP, eJPT, VulnHub, Cisco, etc.
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
- Reemplazar placeholder de certificado en `CptsPodium` por imagen real al aprobar CPTS.
- Añadir más certificaciones/diplomas a medida que se obtengan.
- Considerar integración con un headless CMS para writeups.
- Mantener actualizado el array `COMPLETED_MODULE_IDS` a medida que avanza el path CPTS.

---

## 15. Historial de Cambios Recientes

| Fecha | Cambio | Archivos afectados |
|-------|--------|---------------------|
| 2026-07-03 | Eliminado conteo total de máquinas en Sobre Mí. | `app/sections/About.tsx` |
| 2026-07-03 | Acortado badge "Escalada de privilegios" en Habilidades. | `app/sections/Skills.tsx` |
| 2026-07-03 | Añadido diploma Hacking Web, reordenados diplomas numéricamente. | `public/certificados/`, `app/sections/Certifications.tsx` |
| 2026-07-03 | Reconstruido roadmap CPTS con pin estilo Mario, START, checks y podio. | `app/components/CptsRoadmap.tsx`, `app/components/CptsPodium.tsx`, `app/sections/RoadmapCPTS.tsx` |
| 2026-07-03 | Fondo Matrix actualizado a 75% morado / 25% verde. | `app/components/HackerBackground.tsx` |

---

## 16. Notas para Mantenedores

- Antes de escribir código, revisar `AGENTS.md`: este proyecto usa Next.js 16 con convenciones que pueden diferir de versiones anteriores.
- Para actualizar el progreso CPTS, editar únicamente `COMPLETED_MODULE_IDS` y `BOSS_COMPLETED` en `app/sections/RoadmapCPTS.tsx`.
- Al añadir diplomas, nombrar archivos con prefijo numérico (ej. `5_nuevo_diploma.webp`) para mantener el orden.
- Ejecutar `npm run build` antes de cada push para verificar que no hay errores de tipo ni de compilación.
