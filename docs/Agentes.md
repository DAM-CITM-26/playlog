
# AGENTS.md - Playlog

## Descripción del proyecto

Playlog es una aplicación web de videojuegos
desarrollada con React y Vite.

El proyecto se organiza por sprints y utiliza
una metodología Mobile First.

Referencia:
https://dam-citm-26.github.io/referencias/playlog/

## Sprint actual

Sprint 1 - Tendencia.

Implementar únicamente la pantalla de juegos
en tendencia.

## Tecnologías

- React
- JavaScript
- JSX
- CSS
- Vite

## Estructura

src/
  components/ - Componentes reutilizables
  pages/      - Pantallas
  data/       - Datos de ejemplo
  utils/      - Funciones auxiliares
  App.jsx     - Componente principal
  index.css   - Estilos globales

## Funcionalidades del Sprint 1

1. Mostrar la cabecera Playlog.
2. Mostrar los juegos en tendencia.
3. Ordenar los juegos por tendencia.
4. Filtrar por plataforma.
5. Filtrar por género.
6. Combinar ambos filtros.
7. Mostrar valoraciones y plataformas.
8. Mostrar mensaje si no hay resultados.
9. Aplicar un diseño Mobile First.

## Reglas de componentes

- Usar componentes funcionales de React.
- Utilizar JSX.
- Separar cabecera, tarjetas y lista.
- Usar props para comunicar componentes.
- Utilizar useState para los filtros.
- Evitar duplicar código.
- Utilizar key en las listas.
- Mantener la accesibilidad con etiquetas ARIA.

## Reglas de estilos

- Priorizar dispositivos móviles.
- Usar las variables CSS existentes.
- Mantener el tema oscuro.
- No utilizar estilos inline salvo valores dinámicos.
- Utilizar media queries con min-width.
- Permitir scroll horizontal en los chips.

## Datos

Los videojuegos se encuentran en:
src/data/juegos.js

No modificar la estructura original de los datos.

Los filtros y la ordenación se encuentran en:
src/utils/juegos.js

## Restricciones

No implementar funcionalidades de otros sprints.

Quedan excluidos:
- Catálogo
- Biblioteca
- Registro de videojuegos
- Valoraciones de usuarios
- Persistencia de datos
- Backend
- Autenticación

## Comprobaciones

Antes de finalizar un cambio:

1. Ejecutar npm run lint.
2. Ejecutar npm run build.
3. Comprobar la vista móvil.
4. Comprobar los filtros.
5. Comprobar que no hay errores de React.
