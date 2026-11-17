
import TarjetaJuego from './TarjetaJuego'
import Vacio from './Vacio'

export default function ListaJuegos({ juegos }) {
  if (juegos.length === 0) {
    return (
      <Vacio
        icono="🔎"
        texto="No hay juegos con estos filtros."
      />
    )
  }

  return (
    <div className="grid lista-juegos">
      {juegos.map((juego, indice) => (
        <TarjetaJuego
          key={juego.id}
          juego={juego}
          puesto={indice + 1}
        />
      ))}
    </div>
  )
}
