export function name(juegos) { //Cojemos el juegos.js de datos
    return[...juegos].sort((a, b) => b.tendencia -a.tendencia)//Hacemos una copia de la lista ([...juegos])
}//Con la funcion .sort lo que hacemos sera ordenar los juegos. Para eso se restara la tendecia de un juego con el de otro, si da postivo ira delante, en el caso contrario ira detras.

export funcion filtrarJuegos(juegos, {plataforma, genero}){ //De la lista juegos cojemos las variables de plataforma y genero
    return juegos.filter( //filter() es una funcion que crea una lista nueva con todas las variables que devuelven true
        (juego) => //Cada elemento de la lista le llama juego
            (plataforma === 'Todas' || juego.plataformas.includes(plataforma)) && // Se muestra el juego si se pulsa "Plataformas: Todas" o Si incluye la plataforma selecionada
            (genero === 'Todos' || juego.genero === genero), //Lo mismo pero con el genero
    ) 
}