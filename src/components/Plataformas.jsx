
export default function Plataformas({ plataformas }) {
  return (
    <div className="plataformas" aria-label="Plataformas disponibles">
      {plataformas.map((plataforma) => (
        <span key={plataforma} className="tag">
          {plataforma}
        </span>
      ))}
    </div>
  )
}
