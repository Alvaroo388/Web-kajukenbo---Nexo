# Hero definitivo propuesto · dirección A «Golpe»

Estado: `APROBADO` · Pausa 3 de Nexo. Imagen: [`docs/art/hero-final.png`](art/hero-final.png). La opción A fue elegida expresamente por el usuario el 2026-11-10. El usuario aprobó el hero y autorizó la implementación con la condición de mantener todo el texto en el bloque negro, compacto y sin cortes. La imagen se corrigió y revisó visualmente antes de registrar esta aprobación. La interacción se implementó después en `public/`.

## Composición aprobable

- Negro mate como campo de lectura; banda roja a la izquierda y corte diagonal entre el nombre y la fotografía real `maestro.jpg`.
- Todo el texto informativo y de navegación del hero permanece dentro del campo negro con margen respecto al corte rojo. La banda roja lleva solo el escudo como imagen y el carácter `拳` como signo decorativo; la fotografía no lleva texto superpuesto.
- El escudo de De Mingo aparece intacto en la cabecera. El de Villaseñor conserva una reserva visible hasta que se aporte el archivo autorizado.
- `拳` («puño») ocupa la banda roja como signo visual relacionado con la raíz de boxeo. No pretende traducir «Kajukenbo» ni representar una inscripción histórica de la escuela.
- El título KAJUKENBO se parte visualmente en dos líneas, **KAJU / KENBO**, pero sus cuatro sílabas **KA · JU · KEN · BO** serán controles independientes para ratón, teclado y toque.
- La maqueta muestra BO activo: subrayado dorado y cuadro con «Boxeo chino y occidental. Dos tradiciones de golpeo reunidas en el sistema». La información general de las otras sílabas se redactará con las fuentes de `docs/INFO_NEGOCIO.md`.
- Pie operativo: martes y jueves, 12:00–13:00 y 20:00–21:00; 30 € al mes. La dirección y el contacto siguen como `[[PENDIENTE]]`.

## Cómo guía el resto del sitio

| Elemento | Decisión propuesta |
|---|---|
| Navegación | Cabecera negra compacta con escudo y enlaces directos a significado, historia, escuela y datos prácticos. En móvil, botón de menú accesible sin ocultar la acción principal. |
| Botones | Rectángulos de esquinas rectas y contraste alto. Rojo para la acción principal; dorado solo para estados activos y datos importantes. Foco visible en blanco o dorado. |
| Ritmo | Alternar bloques oscuros de impacto con pausas breves en crema para explicaciones; fotografía real como prueba visual, no como fondo de todas las secciones. |
| Historia | El corte diagonal rojo del hero se transforma en el eje del flujo de acontecimientos. Hitos verificados: origen en Hawái y actividad documentada en Alovera; la fecha y los pasos intermedios locales siguen marcados como pendientes. |
| Movimiento | El título responde por sílaba en un gesto corto; la ficha entra desde el borde del texto. La línea de historia progresa al desplazar la página. Sin 3D ni movimiento que tape información esencial. |

## Adaptación móvil y accesibilidad

- El título pasa a cuatro piezas táctiles en dos filas o una columna, según ancho. La ficha activa aparece debajo, sin depender de hover.
- La fotografía va después del nombre y conserva el rostro dentro del recorte. El carácter `拳` permanece decorativo y no duplica texto leído por tecnología de asistencia.
- Las sílabas serán botones con nombre claro, foco visible y estado comunicado; el contenido explicativo estará disponible también sin JavaScript.
- `prefers-reduced-motion` suprime desplazamientos de tarjeta y progreso animado, manteniendo los cambios de contenido y el orden histórico.

## Límite de esta decisión

La imagen no es una prueba funcional. La tipografía condensada de la maqueta sirve como referencia de forma; antes del frontend se elegirá una fuente utilizable en web con procedencia y licencia registradas. La foto `maestro.jpg` tiene resolución limitada y su escala final se ajustará tras revisión en dispositivos.

**Pausa 3 cumplida:** el usuario respondió «si, pero asegurate que al hacer el hero el texto este todo en el la misma parte, con el fondo negro en este caso, que no se corte, compacta antes de continuar». La imagen corregida cumple esa condición y se registra en `docs/ART_APPROVALS.json`. Procede completar `DESIGN_DNA.json`, `DESIGN.md`, el plan de movimiento y el stack antes del frontend.
