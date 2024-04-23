/*

Enunciado:

Dado un Array de números, devolver el Array con sus numeros elevados al cuadrado.

Cómo hacerlo:
- Crear una función con parámetros números
- Filtrar Array
- Modificar contenido Array
- Devolver resultado

*/

function alCuadrado(numeros) {

    let numeros_cuadrados = numeros
        .filter(numero => typeof numero === "number")
        .map(numero => Math.pow(numero, 2))
    ;

    return numeros_cuadrados;
}

console.log(numeros_cuadrados(3)); // 9