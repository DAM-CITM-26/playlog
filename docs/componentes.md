# Componentes · Sprint 1 (Tendencia)

Qué será en React cada función de la pantalla principal de la referencia.

| Referencia | Componente en React | Fichero | Nivel | Estado, lógica y datos |
|---|---|---|---|---|
| `Valoracion()` | `Valoracion` | `src/components/Valoracion.jsx` | Átomo | Recibe `valor` |
| `Plataformas()` | `Plataformas` | `src/components/Plataformas.jsx` | Átomo | Recibe `plataformas` |
| `Portada()` | `Portada` | `src/components/Portada.jsx` | Átomo | Recibe `juego`; emoji según el género |
| `Vacio()` | `Vacio` | `src/components/Vacio.jsx` | Átomo | Recibe `icono` y `texto` |
| `TarjetaJuego()` | `TarjetaJuego` | `src/components/TarjetaJuego.jsx` | Molécula | Recibe `juego` y `puesto`; usa `Portada`, `Valoracion` y `Plataformas` |
| `Chips()` | `Chips` | `src/components/Chips.jsx` | Molécula | Controlado: recibe `opciones`, `valor` y `onCambio`; `aria-pressed` en cada chip |
| `ListaJuegos()` | `ListaJuegos` | `src/components/ListaJuegos.jsx` | Organismo | Recibe `juegos`; si está vacía, `Vacio` con «No hay juegos con estos filtros.» |
| `PantallaInicio()` | `Tendencia` | `src/pages/Tendencia.jsx` | Pantalla | **Estado:** `plataforma` y `genero` (`useState`). **Datos:** `JUEGOS`. **Lógica:** `filtrarJuegos` y `ordenarPorTendencia` |
| `filtrarJuegos()`, `ordenarPorTendencia()` | funciones puras | `src/utils/juegos.js` | — | Reciben datos y devuelven datos |
| `estado.plataforma`, `estado.genero` + `pintar()` | `useState` en `Tendencia` | — | — | React vuelve a pintar solo |
| `data-accion="plataforma"` / `"genero"` + el listener de `app.js` | `onClick` en cada chip → `onCambio` | — | — | Callback de hijo a padre |

## Quién hace cada pieza

| Rama | Componentes | Persona |
|---|---|---|
| `s1-tarjeta` | `Valoracion`, `Plataformas`, `Portada`, `TarjetaJuego` | Jie |
| `s1-chips` | `Chips` | Marc |
| `s1-lista` | `Vacio`, `ListaJuegos`, `Tendencia` | Jie |
| `s1-estado` | el estado en `Tendencia` y los chips conectados | Marc |