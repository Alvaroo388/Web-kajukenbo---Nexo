# Tres direcciones artísticas · segunda presentación

Estado: `APROBADO` · Pausa 2 de Nexo. El usuario rechazó la primera serie por genérica y pidió rehacer las tres opciones con personalidad, tipografías distintas y símbolos chinos. Esta serie la sustituye; las imágenes anteriores permanecen solo en el historial Git. El usuario eligió la opción A; todavía no hay hero final aprobado ni frontend implementado.

| ID | Imagen estática | Dirección visual | Tipografía y símbolo | Ventaja | Riesgo a resolver |
|---|---|---|---|---|---|
| A · **Golpe** | [`option-a.png`](art/option-a.png) | Cartel de combate: banda roja intensa, retrato aportado por la escuela a sangre, título partido en dos golpes y corte diagonal. | **Agency FB** condensada, enorme y angular; `拳` como carácter de «puño» a escala mural. | El nombre se convierte en la interacción principal: el cuadro de BO ya aparece como muestra. | La fotografía original tiene poca resolución para un recorte grande; habrá que ajustar el tamaño en la web final. |
| B · **Tinta y linaje** | [`option-b.png`](art/option-b.png) | Papel de entrenamiento sobre fondo negro, foto vertical del grupo, trazo de tinta irregular y sello rojo. | **Brush Script MT** para «Kajukenbo», Book Antiqua para relato; `武術` («artes marciales») y `拳` («puño») como caligrafía y sello. | Deja ver a la comunidad y da forma narrativa a la historia desde Hawái hasta Alovera. | El papel cálido debe equilibrarse con el negro y rojo dominante del resto de la web. |
| C · **Escudo de escuela** | [`option-c.png`](art/option-c.png) | Póster de dojo casi serigráfico: plano negro, cuña roja, marco octagonal del escudo y las dos fotografías reales. | **Stencil** para rótulos, **Copperplate Gothic** para el nombre; `武` («marcial») y `拳` («puño») en blanco sobre rojo. | Expresa la identidad de la escuela y sus materiales existentes sin depender de una foto hero de gran resolución. | El escudo de Villaseñor todavía falta; su integración deberá respetar el equilibrio de ambos emblemas. |

Las tres opciones comparten los colores aprobados, el escudo de De Mingo y el mismo contenido confirmado, pero cambian de forma sustancial la composición, la escala, la tipografía, el papel de la fotografía y la jerarquía. Los caracteres chinos se usan por su significado visual y lingüístico; **no** se presentan como traducción de «Kajukenbo» ni como inscripción histórica de la escuela. Para `拳`, `武` y `武術` se consultaron las entradas del Ministerio de Educación de Taiwán: [拳](https://dict.concised.moe.edu.tw/dictView.jsp?ID=26091&la=1&powerMode=0), [武](https://dict.concised.moe.edu.tw/dictView.jsp?ID=42954&la=1&powerMode=0) y [武術](https://dict.concised.moe.edu.tw/dictView.jsp?ID=42972).

## Comportamiento que sugiere cada hero

| ID | Título, cursor y foco | Flujo de historia | Móvil y movimiento reducido |
|---|---|---|---|
| A | Cada sílaba actúa como una pieza contundente. Hover, foco o toque activan una ficha lateral con arte y descripción; el carácter `拳` permanece decorativo. | Hitos como golpes sucesivos sobre una línea roja diagonal que se endereza al entrar en la lectura. | Las sílabas pasan a una retícula de dos por dos; ficha bajo la activa. `prefers-reduced-motion` elimina desplazamientos y deja cambios de estado inmediatos. |
| B | El nombre sobre el trazo de tinta se segmenta en cuatro áreas de interacción; la explicación se abre como anotación en el papel. | Capítulos como hojas de un cuaderno; línea de tinta y fotografía cambian sin ocultar texto esencial. | Papel y fotografía se suceden en orden de lectura. En movimiento reducido, capítulos estáticos y navegación por anclas. |
| C | Cuatro sílabas del título activan zonas del marco octagonal y muestran una ficha clara al lado del escudo. | El relato sigue el perímetro del octógono hasta desembocar en una línea vertical hacia Alovera. | Escudo, título y fichas en una columna; los dos retratos se reorganizan sin recorte de personas. En movimiento reducido no gira el marco. |

## Fuentes, derechos y límites

Las tres imágenes PNG son maquetas estáticas originales compuestas por Codex y rasterizadas localmente con Sharp; usan fotos y escudo aportados por el usuario con permiso de publicación confirmado. La procedencia figura en `docs/ASSETS.md`. El escudo de Villaseñor, la dirección exacta y el relato detallado de llegada a Alovera permanecen pendientes. El registro visual de Nexo no contiene proyectos anteriores, por lo que no permite una comparación histórica de repetición. Las imágenes no demuestran las animaciones descritas.

## Decisión del usuario

El 2026-11-10 el usuario respondió «LA OPcion a». Selección: **A · Golpe**, sin fusión ni modificaciones adicionales indicadas. A partir de esta elección se preparará la imagen del hero definitivo. Su aprobación y la autorización para implementar serán una tercera decisión separada.
