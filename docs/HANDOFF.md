# Handoff · Kajukenbo de Mingo

Estado: `APTO PARA ENTREGA DEL FRONTEND` · Checkpoint solicitado por el usuario y actualizado tras implementar y subir el código. Metodología: Nexo v4.4.1, consultada fuera de este repositorio. Rama `main`; frontend publicado en el repositorio del proyecto, sin despliegue en hosting.

## Resumen para reanudar

- Objetivo autorizado: frontend informativo para Kajukenbo de Mingo en Alovera, con hero interactivo KA · JU · KEN · BO, historia animada, estética marcial negra y roja, fotografías reales, escudos de De Mingo y Villaseñor y datos desconocidos visibles como pendientes. El usuario pidió subir avances a `Alvaroo388/Web-kajukenbo---Nexo` sin copiar la documentación de Nexo.
- Diseño base aprobado en `docs/DESIGN_BASE.md`; segunda serie de tres imágenes en `docs/ART_DIRECTIONS.md`; el usuario eligió **A · Golpe**. Los hashes de ambas decisiones constan en `docs/ART_APPROVALS.json`.
- Hero final corregido en `docs/art/hero-final.png` y explicado en `docs/FINAL_HERO.md`. El usuario respondió «sí» a su aprobación e implementación con la condición de que todo el texto informativo permanezca en el área negra, compacto y sin cortarse. La imagen se corrigió, se revisó y la aprobación con hash quedó registrada en `docs/ART_APPROVALS.json`.
- Recursos: `images.jpg` (escudo De Mingo), `maestro.jpg` y `medallas.jpg` aportados por el usuario. Confirmó permiso para publicar las dos fotos. Escudo de Villaseñor pendiente. Derechos y procedencia en `docs/ASSETS.md`.
- Datos confirmados: martes y jueves de 12:00 a 13:00 y de 20:00 a 21:00; 30 € al mes. Dirección, contacto y cronología exacta hasta Alovera pendientes en `docs/INFO_NEGOCIO.md`.
- Alcance técnico: solo frontend, sin backend ni formulario propio. Perfil `P1_STATIC` en `project.json` y `docs/ARCHITECTURE.md`. DNA, plan de movimiento y código están implementados. No se ha publicado la web en hosting.
- Pruebas observadas: `nexo_design.py gate` en verde, `npm test` 13 pruebas superadas, `npm run build` correcto y `project.json` validado con `Test-Json -SchemaFile`. Render real comprobado a 320, 390, 801 y 1440 px; sin desbordamiento, texto del hero dentro del campo negro. Clic en KA actualiza ficha y estado; línea de historia avanza al hacer scroll y llega al 100 % tras salto directo al último hito. Fotografía de grupo cargada y revisada. Lighthouse móvil 100/100/100, cero auditorías fallidas. Revisión independiente exhaustiva: apta para entrega del frontend.
- Siguiente acción exacta cuando el cliente aporte datos: integrar escudo Villaseñor, dirección, contacto y relato local confirmado. Si se decide publicar en hosting, verificar dominio, webroot, HTTPS y funcionamiento de `dist/` en ese entorno.

## Fuentes propietarias

`docs/ART_APPROVALS.json`, `docs/DESIGN_BASE.md`, `docs/ART_DIRECTIONS.md`, `docs/FINAL_HERO.md`, `docs/INFO_NEGOCIO.md`, `docs/ASSETS.md`, `README.md`. En Nexo: `AGENTS.md`, `docs/agent/INDEX.md`, `docs/agent/methodology/ART_DIRECTION_FLOW.md`, `docs/agent/standards/TECHNICAL_BASELINE.md`, `FRONTEND.md`, `ACCESSIBILITY.md`, `CONTENT_AND_DATA.md`, `TESTING.md`, `AI_DEVELOPMENT.md`.
