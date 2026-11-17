
export default function Vacio({
  icono = '🎮',
  texto = 'No hay juegos con estos filtros.',
}) {
  return (
    <div className="vacio" role="status">
      <div className="icono" aria-hidden="true">
        {icono}
      </div>

      <p>{texto}</p>
    </div>
  )
}
