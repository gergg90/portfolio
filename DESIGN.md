# Diseño — Portfolio de Germain Gutierrez

Documento vivo de la identidad visual. Los tokens viven en `app/globals.css`; este archivo explica qué significan y cómo usarlos.

## Dirección

**Editorial-terminal.** El perfil se lee como una traza de red: la página es un `traceroute` hacia Germain. Cada sección es un salto (`hop 02/07`), la línea superior dibuja el recorrido con el scroll y el contacto es el destino.

Lo que se rechaza: la plantilla hacker (lluvia Matrix, glow neón, cards en grid) y el portfolio de pentester genérico.

Referencias de tono: silviamalavasi.com (negro cálido, display grande, scroll narrativo) y kyoosangchoi.com (monocromo, mono con tracking, frase de hero con palabras que rotan).

## Color

| Token | Valor | Uso |
|---|---|---|
| `--background` | `#0a0907` | Fondo general. Negro cálido, no negro puro. |
| `--foreground` | `#ece8e1` | Texto principal. Hueso, nunca blanco puro. |
| `--muted-foreground` | `#9a948a` | Texto secundario y etiquetas. |
| `--border` | `rgb(236 232 225 / 0.12)` | Líneas divisorias. |
| `--card` | `#13110e` | Superficies de apoyo (popover, menú móvil). No se usa para cards en grid. |
| `--primary` | `#9d4edd` | Acento de marca: palabra rotativa, foco, hover. |
| `--primary-ink` | `#b57ee6` | Morado legible sobre negro para texto (`.text-primary-ink`). |
| `--cisco` | `#049fd9` | Solo CCNA y Cisco: certificaciones, roadmap, traza. |
| `--signal` | `#00ff41` | Solo progreso completado y estado vivo (`.live-dot`). |
| `--destructive` | `#ff003c` | Solo estados destructivos. |

Regla de uso: el morado es marca, el azul es Cisco, el verde es estado. Mezclarlos fuera de su papel rompe el sistema.

## Tipografía

- **Display:** Archivo, con el eje `wdth` a 118 y peso 800 (`.font-display`). Titulares de sección con `clamp(1.85rem, 7vw, 5.5rem)` y el hero hasta `6rem`. Interletrado -0.03em, nunca más cerrado.
- **Texto:** Archivo en peso normal, con medida de 65 a 75 caracteres.
- **Datos:** DM Mono en `.label-mono`: 12 px, interletrado 0.12em, cifras tabulares. Se usa para rutas (`/sobre-mí/`), hops, fechas, porcentajes y etiquetas de estado. No se usa como disfraz de "técnico" en texto corrido.

## Forma

- Sin cards. Las listas son filas separadas por `border-top` de 1 px (`.row-link`). En hover, la línea se vuelve morada y la flecha se desplaza.
- Sin sombras decorativas. La profundidad la dan las líneas y el espacio.
- Radios de 8 px en botones pequeños. Ningún elemento usa píldoras, salvo el punto de estado.
- Espaciado: secciones con `py-24` en móvil y `py-36` en escritorio. Más espacio arriba de un título que debajo.

## Movimiento

Un gesto principal y el resto en silencio:

1. **Entrada del hero:** cada línea sube desde una máscara.
2. **Traza del navbar:** la línea morada superior crece con el scroll, y la etiqueta `hop NN/07` cambia con la sección.
3. **Revelado por palabra:** titulares de sección y manifiesto de About.
4. **Opacidad ligada al scroll:** el párrafo de About se "enciende" palabra a palabra.
5. **Roadmap:** la traza azul Cisco se dibuja con el scroll.

Curva de easing: `cubic-bezier(0.16, 1, 0.3, 1)`. Todo el movimiento se desactiva con `prefers-reduced-motion` (`MotionProvider`).

## Componentes

- `SectionHeader`: titular display, ruta mono con hop y subtítulo opcional.
- `Navbar`: nombre en mono a la izquierda, rutas de sección a la derecha y menú a pantalla completa en móvil.
- `Roadmap`: ruta vertical por dominios con estados completado, en curso y pendiente.
- `AnnouncementPopover`: caja de borde fino sobre `--card`, sin sombra.
- `ImageModal`: lightbox de diplomas, sin cambios de estructura.

## Accesibilidad

- Contraste: el texto principal y el secundario superan 4.5:1 sobre el fondo.
- Foco visible: anillo morado de 1 px con 4 px de desfase en los elementos interactivos.
- Selección de texto con fondo morado y texto oscuro.
- Movimiento reducido: todas las animaciones tienen un estado final sin transición.

## Anti-referencias

- Lluvia de caracteres y canvas de fondo.
- Glow pulsante en títulos y bordes neón.
- Cards con borde y sombra en grid.
- Gradientes en texto o en líneas de sección.
- Avatar con icono genérico y textos tipo "[inicializando...]".
