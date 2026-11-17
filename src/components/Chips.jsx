//Opcines es la platforma, Valor es la plataforma selecionada y onCambio es el boolan que dirige a la funcion de filtrarJuegos
export default function Chips({ opciones, valor, onCambio }) {
  return (
    //Caja con los botnes
    <div className="chips" role="group">
      {opciones.map((opcion) => (
        //Recorremos la lista de opciones, por cada se crea un boton.
        //key: Identificador unico para cada boton
        //type: Indicamos que sera un boton normal
        //className: Si el valor del chip es igual al valor selecionado se le asigna la clase activo, si no se le asigna la clase chip
        //aria-pressed: La ia dice q lo ponga es para el lector
        //onClick: Al dar clik llamamos la funcion onCambio y le pasamos la opcion selecionada
        <button
          key={opcion}
          type="button"
          className={opcion === valor ? 'chip activo' : 'chip'}
          aria-pressed={opcion === valor}
          onClick={() => onCambio(opcion)}
        >
          {opcion}
        </button>
      ))}
    </div>
  )
}