# Tres direcciones artísticas · Kajukenbo de Mingo

Estado: `EN_REVISIÓN` · Pausa 2 de Nexo. El diseño base fue confirmado por el usuario el 2026-11-10. Se presentan exactamente tres imágenes estáticas de hero; ninguna es una página implementada ni demuestra el movimiento final. Selección humana pendiente.

| ID | Dirección e imagen | Composición y jerarquía | Ventaja | Riesgo a controlar |
|---|---|---|---|---|
| A | **Corte / dojo** · [`option-a.svg`](art/option-a.svg) | Fondo negro, letras KA/JU/KEN/BO apiladas y monumentales a la izquierda; fotografía del maestro a la derecha; corte rojo diagonal; navegación compacta y CTA rojo sólido. | Hace del nombre el gesto visual protagonista y explica de inmediato la interacción solicitada. | La densidad exige controlar saltos de línea y tamaño de la tarjeta explicativa en móvil. |
| B | **Crónica / linaje** · [`option-b.svg`](art/option-b.svg) | Apertura editorial a dos páginas: papel cálido con titular serif a la izquierda y fotografía de la escuela a la derecha; línea roja, índice superior y CTA negro. | Favorece el relato histórico y muestra la comunidad real de la escuela. | El uso de fondo claro debe conservar el negro y rojo como identidad global en las secciones restantes. |
| C | **Emblema / ritual** · [`option-c.svg`](art/option-c.svg) | Negro profundo, columna roja vertical, escudo en marco octagonal, fotografía vertical a la derecha y título horizontal serif. Navegación superior discreta y CTA dorado. | Da protagonismo al escudo y crea un tono sobrio y ceremonial. | La jerarquía del título y la interacción de sílabas requieren especial cuidado en pantallas pequeñas. |

## Movimiento propuesto, todavía sin implementar

| ID | Título y respuesta al cursor o foco | Historia al desplazar | Transiciones y objetos | Móvil y movimiento reducido |
|---|---|---|---|---|
| A | Cada bloque de sílaba se ilumina en rojo; tarjeta informativa entra con un corte lateral corto. | La cronología avanza como una línea roja segmentada; fotografías y fechas se alternan. | Cortes rápidos y desplazamientos breves, sin 3D ni parallax. | Sílabas en botones táctiles; la tarjeta aparece por toque y foco. Sin desplazamientos automáticos con `prefers-reduced-motion`. |
| B | El título completo permanece estable; un índice KA/JU/KEN/BO bajo él cambia el contenido de una nota editorial. | La historia se lee como capítulos; una regla roja progresa con el scroll y el índice marca el capítulo actual. | Fundidos discretos de imágenes y pies, sin ocultar el texto hasta que cargue JavaScript. | Columna de texto antes de imagen; índice horizontal desplazable sin recortar contenido. Movimiento reducido sin fundidos ni progreso animado. |
| C | El título se divide visualmente en cuatro zonas al hover/foco; una ficha aparece debajo del marco del escudo. | Hitos en un eje vertical dorado; el marco octagonal cambia de escala de forma contenida al entrar en cada periodo. | Una transición pausada del escudo y una respuesta precisa de botones. Sin 3D. | Escudo más pequeño seguido del título y fichas táctiles; eje vertical estático con `prefers-reduced-motion`. |

## Fuentes y límites

Las tres imágenes son composiciones SVG originales preparadas para esta decisión. Incluyen `images.jpg`, `maestro.jpg` o `medallas.jpg`, archivos aportados por el usuario; el usuario confirmó el permiso de publicación de las dos fotografías. El escudo de Villaseñor no está disponible y se señala como pendiente. Las fechas y el relato exacto de llegada a Alovera continúan pendientes según `INFO_NEGOCIO.md`. La comparación visual con el registro Nexo está limitada porque `design/registry/visual-history.json` no contiene proyectos previos.

## Decisión humana pendiente

El usuario debe elegir **A**, **B**, **C**, pedir cambios o describir una fusión. No se generará el hero definitivo hasta recibir esta decisión expresa. La confirmación y el hash de este documento se registrarán en `docs/ART_APPROVALS.json`.
