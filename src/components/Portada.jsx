
const ICONOS = {
  'Acción': '⚔️',
  'Aventura': '🗺️',
  'RPG': '🐉',
  'Deportes': '⚽',
  'Estrategia': '♟️',
}

const COLORES = {
  'Acción': '#9B354C',
  'Aventura': '#226C82',
  'RPG': '#6344A1',
  'Deportes': '#287D61',
  'Estrategia': '#7D6031',
}

export default function Portada({ juego }) {
  return (
    <div
      className="portada"
      style={{
        backgroundColor: COLORES[juego.genero] || '#1A1B33',
      }}
      role="img"
      aria-label={`Portada de ${juego.titulo}`}
    >
      <span aria-hidden="true">
        {ICONOS[juego.genero] || '🎮'}
      </span>
    </div>
  )
}
