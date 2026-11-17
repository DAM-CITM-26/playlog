
import Portada from './Portada'
import Valoracion from './Valoracion'
import Plataformas from './Plataformas'

export default function TarjetaJuego({ juego, puesto }) {
  return (
    <article className="card tarjeta-juego">
      <div className="tarjeta-portada">
        <Portada juego={juego} />

        <span
          className="puesto"
          aria-label={`Posición ${puesto}`}
        >
          #{puesto}
        </span>
      </div>

      <div className="card-cuerpo">
        <h3>{juego.titulo}</h3>

        <p className="card-meta">
          {juego.genero}
        </p>

        <Valoracion valor={juego.valoracionMedia} />

        <Plataformas plataformas={juego.plataformas} />
      </div>
    </article>
  )
}
