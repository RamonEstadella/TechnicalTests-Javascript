/*
Enunciado:

Dado un array de números, devolver el array sin elementos duplicados.
Si hay un string eliminarlo del Array.

Como hacerlo:
- Crear una función con parametro ARRAY
- recorrer el ARRAY y eliminar Strings
- Usar objeto para eliminar duplicados

*/

function eliminarDuplicados(elementos) {

    // Filtrar Array de modo que sean TODO números
    elementos = elementos.filter(elemento => {
        return typeof elemento === "number";
    });

    // Eliminar elementos de un Iterable duplicados
    let sin_duplicados = new Set(elementos); // Devuelve el Array sin duplicados como un set ( {formato objeto} ), ¡NO como un Array!

    // Convertimos el objeto del Set a un Array y lo retornamos
    return Array.from(sin_duplicados);
}

console.log(eliminarDuplicados([1,2,2,1,'Ramon', 6,7,3]));
