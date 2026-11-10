# Preflight de la candidata · 2026-11-10

Estado: `COMPLETADO`; veredicto independiente en [2026-11-11-independent.md](2026-11-11-independent.md). Alcance: commit de trabajo aún sin publicar, frontend estático de Kajukenbo de Mingo. Entorno observado: Windows, Node 24.21.0, Chrome DevTools conectado a `http://127.0.0.1:4173`; resoluciones emuladas 320×700, 390×844, 801×850 y 1440×900.

## Evidencia de implementación

| Comprobación | Resultado observado |
|---|---|
| Puerta de diseño Nexo v4.4.1 | `nexo_design.py gate` → `OK: current art contract satisfied`; evidencia humana contrastada con el chat. |
| Contrato de proyecto | `Get-Content project.json -Raw \| Test-Json -SchemaFile schemas/project.schema.json` → `True`. |
| Tests y build | `npm test` → 13/13 tras la prueba adicional de concordancia; `npm run build` → `dist/` con solo HTML, CSS, JS y tres WebP. |
| Hero en cuatro anchos | Sin desplazamiento horizontal; título y ficha dentro del panel negro. Verificados también a 320 y 801 px con fuente alternativa Impact. |
| Interacción | Clic en KA: `aria-pressed` pasa a KA, BO se desactiva y la ficha muestra «KA / KARATE». Hover/foco comparten la misma función; los botones nativos permiten teclado y toque. |
| Historia | Al entrar en la sección, los hitos son legibles y la línea pasa de 0 % a 50 % tras mostrar los dos primeros. El revisor detectó que un salto directo al último hito dejaba la línea corta; se añadió test de regresión y se verificó en Chrome `seen=[false,false,false,true]`, progreso 100 %. |
| Fotos | Escudo, retrato y foto de grupo cargan; foto de grupo con ancho natural 692 px tras entrar en viewport. |
| Movimiento reducido | Emulación `prefers-reduced-motion: reduce`: transición efectiva 0.00001 s, hitos visibles, sin overflow. |
| Auditoría automática | Lighthouse móvil, navegación: accesibilidad 100, buenas prácticas 100, SEO 100, 51 auditorías superadas y 0 fallidas. No equivale a certificación de accesibilidad. |
| Recursos HTTP | Documento, CSS, módulos y recursos iniciales responden 200. Consola sin errores. |

## Pendientes de contenido

Dirección, contacto, condiciones exactas de cuota, relato de llegada a Alovera y escudo Villaseñor permanecen visibles como `[[PENDIENTE]]`. El hosting, dominio y webroot de producción no están definidos; no se ha desplegado.

## Límite de la revisión

Las capturas se inspeccionaron en la herramienta del navegador durante esta sesión; no se añadió una imagen de QA al repositorio. La revisión independiente posterior informa por separado sus pruebas y veredicto.
