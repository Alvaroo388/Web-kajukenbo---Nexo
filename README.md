# Kajukenbo de Mingo · Alovera

Proyecto frontend de la escuela de Kajukenbo de José Antonio de Mingo en Alovera. Repositorio del cliente, separado de [Nexo Methodology v4](https://github.com/Alvaroo388/nexo-methology-v4).

## Estado

`APTO PARA ENTREGA DEL FRONTEND` · Implementado, revisado y subido a este repositorio. El diseño base quedó confirmado el 2026-11-10, el usuario eligió la opción A de [tres direcciones visuales](docs/ART_DIRECTIONS.md) y aprobó el [hero final corregido](docs/FINAL_HERO.md) con autorización para implementar. Las tres decisiones están registradas en `docs/ART_APPROVALS.json`.

## Alcance aprobado

- Web informativa, solo frontend y en español.
- Inicio con desglose interactivo de KA · JU · KEN · BO.
- Historia con un flujo animado desde el origen del arte hasta Alovera, dejando pendientes los hitos locales no verificados.
- Escudo de De Mingo e imágenes reales de la escuela; reserva visible para el escudo de Villaseñor, aún no aportado.
- Paleta negra y roja, blanco y un acento destacado; estética marcial oriental sin inventar elementos históricos.
- Subir avances a este repositorio de GitHub. No se incorpora la documentación del repositorio de metodología.

## Expediente

- [Hechos y fuentes](docs/INFO_NEGOCIO.md)
- [Diseño base para confirmar](docs/DESIGN_BASE.md)
- [Registro de aprobaciones](docs/ART_APPROVALS.json)
- [Recursos y derechos](docs/ASSETS.md)

## Desarrollo local

Requiere Node.js 20 o superior. `npm run dev` abre una vista local en `http://127.0.0.1:4173`. `npm test` comprueba los datos e invariantes relevantes; `npm run build` crea la salida estática en `dist/`. El hosting y dominio de producción están pendientes. No se copió la documentación de Nexo; solo se incluyó el esquema JSON necesario para validar `project.json`.

La arquitectura está en [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). El expediente visual está en [DESIGN.md](DESIGN.md), [DESIGN_DNA.json](DESIGN_DNA.json) y [docs/MOTION_PLAN.md](docs/MOTION_PLAN.md).
