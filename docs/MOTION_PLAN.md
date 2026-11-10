# Plan de movimiento · Golpe

Estado: `DEFINIDO` antes del código funcional, 2026-11-10.

| Elemento | Disparador y secuencia | Tiempo | Entrada alternativa |
|---|---|---|---|
| Sílabas del hero | Hover, foco o clic cambia estado activo y texto de la ficha, con entrada corta de opacidad/desplazamiento. | 180 ms | Teclado Tab + Enter/Espacio; toque. El texto inicial BO existe en HTML sin JavaScript. |
| Línea histórica | `IntersectionObserver` añade clase a cada hito al entrar en viewport; la línea roja crece conforme avanza la lectura. | 450 ms por hito | Todos los hitos siguen visibles si no hay JS o `IntersectionObserver`. |
| Enlaces y acciones | Subrayado/desplazamiento mínimo en hover o foco. | 150 ms | Foco visible y color suficiente. |

`prefers-reduced-motion: reduce` suprime transformaciones, transiciones y desplazamiento suave. Ningún contenido depende de animación para leerse. No hay vídeo ni 3D. El JS no construye contenido histórico; solo cambia estados o clases.
