# Modelo de datos

## Juego

| Campo | Tipo | Ejemplo |
|---|---|---|
| `id` | número | `1` |
| `titulo` | texto | `"Ecos de Neón"` |
| `plataformas` | lista de textos (`PC`, `PlayStation`, `Xbox`, `Switch`) | `["PC", "PlayStation"]` |
| `genero` | texto (`Acción`, `Aventura`, `RPG`, `Deportes`, `Estrategia`) | `"Acción"` |
| `valoracionMedia` | número (0-5, con un decimal) | `4.5` |
| `tendencia` | número (0-100, más alto = más en tendencia) | `98` |
| `descripcion` | texto | `"Un shooter rápido en una ciudad de neón donde cada bala cuenta."` |

```json
{
  "id": 1,
  "titulo": "Cyberpunck2077",
  "plataformas": ["PC", "PlayStation"],
  "genero": "Acción",
  "valoracionMedia": 4.5,
  "tendencia": 98,
  "descripcion": "Un shooter rápido en una ciudad de neón donde cada bala cuenta."
}
```