
import { useState } from 'react'

import Chips from '../components/Chips'
import ListaJuegos from '../components/ListaJuegos'

import { JUEGOS } from '../data/juegos'

import {
  filtrarJuegos,
  ordenarPorTendencia,
} from '../utils/juegos'

const OPCIONES_PLATAFORMA = [
  'Todas',
  'PC',
  'PlayStation',
  'Xbox',
  'Switch',
]

const OPCIONES_GENERO = [
  'Todos',
  'Acción',
  'Aventura',
  'RPG',
  'Deportes',
  'Estrategia',
]

export default function Tendencia() {
  const [plataforma, setPlataforma] = useState('Todas')
  const [genero, setGenero] = useState('Todos')

  // Filtramos según la plataforma y el género.
  const juegosFiltrados = filtrarJuegos(JUEGOS, {
    plataforma,
    genero,
  })

  // Ordenamos los resultados por tendencia descendente.
  const juegosOrdenados = ordenarPorTendencia(juegosFiltrados)

  return (
    <section className="pantalla-tendencia">
      <div className="titulo-pagina">
        <h2>🔥 Tendencia</h2>
        <p>
          Descubre los videojuegos más populares.
        </p>
      </div>

      <section className="seccion filtros">
        <h3 id="titulo-plataformas">Plataforma</h3>

        <div aria-labelledby="titulo-plataformas">
          <Chips
            opciones={OPCIONES_PLATAFORMA}
            valor={plataforma}
            onCambio={setPlataforma}
          />
        </div>
      </section>

      <section className="seccion filtros">
        <h3 id="titulo-generos">Género</h3>

        <div aria-labelledby="titulo-generos">
          <Chips
            opciones={OPCIONES_GENERO}
            valor={genero}
            onCambio={setGenero}
          />
        </div>
      </section>

      <section
        className="seccion resultados"
        aria-labelledby="titulo-resultados"
      >
        <div className="resultados-cabecera">
          <h3 id="titulo-resultados">
            Juegos en tendencia
          </h3>

          <span className="contador">
            {juegosOrdenados.length} juegos
          </span>
        </div>

        <ListaJuegos juegos={juegosOrdenados} />
      </section>
    </section>
  )
}
