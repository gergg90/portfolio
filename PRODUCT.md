# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Reclutadores y responsables de contratación** de redes y ciberseguridad. Llegan desde LinkedIn, GitHub o el CV y necesitan entender en segundos quién es Germain, qué sabe hacer y cómo contactarle o descargar su CV.
- **La comunidad de redes y seguridad** (Cisco NetAcad, Hack4u, CTF): pares que validan el perfil técnico y siguen su progreso.
- **Contactos profesionales** que vuelven para ver su avance hacia el CCNA 200-301.

## Product Purpose

Es el portfolio personal de una sola página de Germain Gutierrez (https://gergg90.vercel.app) y su carta de presentación profesional. Funciona si un visitante sale sabiendo que Germain es un perfil híbrido de **redes + seguridad + IA**, ve evidencias verificables y lo contacta o descarga el CV.

## Positioning

No es otro portfolio de pentester. Combina tres ejes que rara vez van juntos en un perfil junior: fundamentos de redes Cisco (camino al CCNA 200-301), formación en seguridad ofensiva y defensiva (Hack4u) y desarrollo de apps con IA agéntica (Claude Code y otros agentes). El propio sitio está construido y mantenido con agentes.

## Operating Context

- Se visita sobre todo desde enlaces en LinkedIn, GitHub y el PDF del CV, tanto en escritorio como en móvil.
- El progreso del CCNA se actualiza a mano en el código. La ruta de estudio está trazada con Hermes AI.
- `master` despliega a producción en Vercel en cada push.

## Capabilities and Constraints

- Next.js 16 (App Router), React 19, Tailwind 4, shadcn/ui (base-nova), Framer Motion 12 y Lucide.
- Single page con secciones ancladas: inicio, sobre mí, habilidades, certificaciones, roadmap CCNA, writeups (placeholder) y contacto.
- Todo el contenido visible está en español.
- **Abandonado:** HTB CPTS. No debe aparecer ni proponerse.
- No se cuantifican las máquinas CTF resueltas.
- Contenido externo (fase futura de noticias): solo texto, enlaces `http(s)` validados y `rel="noopener noreferrer"`.
- **Sin decidir:** si la sección Writeups se mantiene (Fase 4) y la lista definitiva de módulos CCNA de Hermes AI (mientras tanto se usan los dominios del blueprint 200-301 v1.1).

## Brand Commitments

- Nombre: Germain Gutierrez. GitHub `gergg90`, LinkedIn `/in/gergg90/` y email `germain.gg90@gmail.com`.
- Color de marca: morado `#9D4EDD`. Todo lo de Cisco y CCNA usa el azul Cisco `#049fd9`. Solo modo oscuro.
- Tono: directo, técnico y cercano, en español.

## Evidence on Hand

- 7 certificaciones Cisco NetAcad con badge en Credly (URLs en `app/sections/Certifications.tsx`), incluida *CCNA: Switching, Routing, and Wireless Essentials*.
- 4 diplomas de la Academia Hack4u en `public/certificados/*.webp`.
- Matrícula en Ingeniería en Informática, Universidad Alejandro de Humboldt, primer semestre. Pensum oficial de 10 semestres en unihumboldt.edu.ve.
- CV en `public/docs/CV.pdf`.
- **No existen:** foto real (pendiente para la Fase 4), og-image ni favicons PNG, writeups publicados, testimonios ni experiencia laboral cuantificada. No se inventan.

## Product Principles

1. Evidencia antes que adjetivos: cada afirmación de perfil apunta a una certificación, un diploma o un progreso real.
2. El perfil es híbrido: redes, seguridad e IA comparten el protagonismo y ningún eje se presenta como el único.
3. El progreso es honesto: el roadmap muestra lo completado y lo pendiente tal cual.
4. Contactar o descargar el CV está siempre a un gesto de distancia.

## Accessibility & Inclusion

Se verifica a 375 px sin scroll horizontal, con navegación por teclado y foco visible, y respetando `prefers-reduced-motion`.
