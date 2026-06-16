# 🛡️ Portfolio de Ciberseguridad - Germain Gutierrez

Portfolio profesional orientado a ciberseguridad, pentesting, CTF y análisis de vulnerabilidades.

![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.40.0-ff0055?style=flat-square&logo=framer)

## 🚀 Demo en Vivo

**[https://gergg90.vercel.app](https://gergg90.vercel.app)**

## ✨ Características

- 🎨 **Diseño Hacker/Terminal** - Paleta de colores estilo Matrix (verde neón, negro)
- 🎬 **Animaciones Premium** - Framer Motion con transiciones suaves
- 🖼️ **Galería de Diplomas** - Lightbox interactivo con imágenes WebP optimizadas
- 🏆 **Certificaciones Verificadas** - Links directos a Credly (7 certificaciones Cisco)
- 📝 **Writeups** - Sección para máquinas de HackTheBox y explicaciones técnicas
- 📱 **Responsive Design** - Optimizado para móvil, tablet y desktop
- ♿ **Accesibilidad** - WCAG compliant con navegación por teclado
- ⚡ **Performance** - Imágenes WebP, lazy loading, optimización automática
- 🔒 **Seguridad** - Headers de seguridad configurados

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Next.js | 16.2.9 | Framework |
| React | 19.2.4 | UI Library |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 12.40.0 | Animations |
| shadcn/ui | 4.11.0 | UI Components |
| Lucide React | 1.18.0 | Icons |

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/gergg90/portfolio.git

# Navegar al directorio
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Build de producción
npm run start        # Inicia servidor de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
```

## 📁 Estructura del Proyecto

```
portfolio/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── animations/      # FadeIn, SlideUp, StaggerContainer
│   │   ├── HackerBackground.tsx
│   │   ├── ImageModal.tsx
│   │   ├── Navbar.tsx
│   │   └── SectionHeader.tsx
│   ├── sections/            # Secciones de la página
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── Writeups.tsx
│   │   └── Contact.tsx
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── public/
│   ├── certificados/        # Diplomas (WebP)
│   ├── docs/                # CV descargable
│   └── writeups/            # Writeups (PDF)
├── vercel.json              # Configuración de Vercel
├── next.config.ts           # Configuración de Next.js
└── package.json
```

## 🎯 Secciones

### 1. **Hero**
- Avatar circular con efecto de escaneo
- Nombre con gradiente verde-cyan
- Botones de acción (Ver Writeups, Descargar CV)
- Fondo animado con partículas y código binario

### 2. **Sobre Mí**
- Biografía profesional
- Experiencia en CTF (20+ máquinas)
- Compromiso con aprendizaje continuo

### 3. **Habilidades**
6 categorías organizadas:
- Herramientas Ofensivas (Metasploit, Burp Suite, Nmap, etc.)
- Técnicas de Pentesting (OWASP Top 10, SQLi, XSS, etc.)
- Scripting & Automatización (Python, Bash)
- Redes & Protocolos (TCP/IP, BGP, OSPF, etc.)
- Seguridad Defensiva (Wazuh, Caldera)
- Sistemas Operativos (Kali, Parrot, Linux)

### 4. **Certificaciones**
- **7 certificaciones Cisco** con links a Credly
- Badge visual "CISCO" en color azul (#049fd9)
- **3 diplomas Hack4u** con galería de imágenes
- Lightbox interactivo para ver diplomas en tamaño completo

### 5. **Writeups**
- Sección preparada para contenido futuro
- Estructura para HackTheBox y writeups técnicos
- Archivos PDF en `public/writeups/`

### 6. **Contacto**
- Email: germain.gg90@gmail.com
- LinkedIn: linkedin.com/in/gergg90
- GitHub: github.com/gergg90
- Descarga de CV
- Footer CTA: "you have been pwned!"

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Verde Matrix | `#00ff41` | Primary |
| Cyan | `#00ffff` | Accent |
| Negro | `#000000` | Background |
| Gris oscuro | `#161b22` | Cards |
| Rojo | `#ff003c` | Destructive |
| Azul Cisco | `#049fd9` | Certificaciones |

## 🚀 Despliegue

Este proyecto está desplegado en **Vercel**.

### Despliegue Automático
Cada push a `master` desencadena un despliegue automático:

```bash
git add .
git commit -m "feat: nueva funcionalidad"
git push origin master
# Vercel despliega automáticamente en ~1-2 minutos
```

### Despliegue Manual
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## 📊 Performance

| Métrica | Score |
|---------|-------|
| Performance | ~95 |
| Accessibility | ~100 |
| Best Practices | ~100 |
| SEO | ~100 |

## 🔒 Seguridad

Headers de seguridad configurados en `vercel.json`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Germain Gutierrez**
- Email: germain.gg90@gmail.com
- LinkedIn: [linkedin.com/in/gergg90](https://www.linkedin.com/in/gergg90/)
- GitHub: [github.com/gergg90](https://github.com/gergg90)

---

**Hecho con ❤️ y Next.js + shadcn/ui + Framer Motion**
