/*
Enunciado:
Haz un Reloj que en tiempo real vaya mostrando la hora a cada segundo.

Solo puedes usar el objeto Date para conseguir la hora por primera vez, pero NO para
actualizar la Hora.

Como hacerlo:
- Crear una clase
- Inicializar propiedades con la hora actual
- Método con setInterval
- Método para mostrar la hora
- Método para sumar segundos a la hora y actualizar horas minutos y segundos

*/

// Método 1

function relojRapido() {
    setInterval( () => {
        const fecha = new Date(); // Se ejecuta Date() cada 1 segundo, así que no cumple con los requisitos del enunciado.
        const horas = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();

        console.log(`${horas}:${minutos}:${segundos}`);
    }, 1000)
}

relojRapido();

// TODO No entiendo el Método 2:

class Reloj {

    constructor() { 
        this.fecha = new Date();
        this.horas = this.fecha.getHours();
        this.minutos = this.fecha.getMinutes();
        this.segundos = this.fecha.getSeconds();
    }

    actualizar(segundos) {
        this.segundos += segundos;

        // Actualizar segundos
        if(this.segundos >= 60) {
            this.minutos++;
            this.segundos = 0;
        }

        // Actualizar minutos
        if(this.minutos >= 60) {
            this.horas++;
            this.minutos = 0;
        }

        // Actualizar horas
        if(this.horas >= 24) {
            this.horas = 0;
        }
    }

    mostrar() {
        this.actualizar(1);
        console.log(`${this.horas}:${this.minutos}:${this.segundos}`)
    }

    encender() {
        setInterval( () => {
            this.mostrar();
        }, 1000);
    }

}

let mi_reloj = new Reloj();

mi_reloj.encender();

