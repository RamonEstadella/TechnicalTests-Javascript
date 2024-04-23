/*
Enunciado:

Dado un Array, crear otro con el primer y el ultimo elemento del original.

Como hacerlo:
- Crear Función con parametro Array
- Filtrar array (queremos solo los numeros)
- Array push del primer y ultimo elemento
- Devolver resultado

*/

function primeroYultimo(elementos) {

    let nuevos_elementos = [];

    nuevos_elementos.push(elementos[0], elementos[elementos.length - 1]);

    return nuevos_elementos;

}