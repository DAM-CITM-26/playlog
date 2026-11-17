
export default function Valoracion({ valor }) {
  return (
    <div
      className="valoracion"
      aria-label={`Valoración: ${valor.toFixed(1)} de 5`}
    >
      <span className="estrellas" aria-hidden="true">
        ★
      </span>
      <span>{valor.toFixed(1)}</span>
      <span className="valoracion-maxima">/ 5</span>
    </div>
  )
}
