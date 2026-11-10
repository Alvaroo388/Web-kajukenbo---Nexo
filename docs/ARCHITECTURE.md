# Arquitectura y entorno · P1_STATIC

Estado: `DEFINIDO` para el frontend local; hosting aún `[[PENDIENTE]]`.

`project.json` declara una página informativa sin composición de servidor, formularios, pagos, cuentas, base de datos, subida de archivos ni integración externa. El perfil derivado es `P1_STATIC`. Las interacciones del nombre y de la historia se ejecutan en el navegador y no guardan datos.

Stack: HTML semántico, CSS propio y módulos JavaScript nativos. `public/` es el origen; `npm run build` copia de forma real y reproducible la web a `dist/`, único directorio para un futuro hosting estático. `npm run dev` sirve `public/` en `127.0.0.1:4173` para revisión local. `npm test` valida datos confirmados y pendientes, además del contrato inicial del proyecto. No hay dependencias de runtime ni CDN.

Separación: `public/index.html` contiene estructura y contenido inicial; `public/styles.css`, presentación y responsive; `public/js/content.mjs`, datos de sílabas, horario, cuota y pendientes; `public/js/main.mjs`, estados de interacción y progreso visual. Los JPEG aportados se mantienen como originales fuera de `public/`; los WebP optimizados están en `public/assets/`.

Entorno de producción: `[[PENDIENTE: HOSTING OBJETIVO, DOMINIO Y WEBROOT]]`. La publicación requerirá verificar `dist/` como webroot, HTTPS y rutas de recursos antes de activarla. El repositorio y `docs/` no forman parte del build público.
