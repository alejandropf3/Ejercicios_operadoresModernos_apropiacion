
import {evaluar} from './modulo7.js'

import promp_sync from "prompt-sync";
const tomar = promp_sync();

let numeros_ingresados = [];

for (let i = 0; i < 5; i++)
{
    let numero = tomar(`Ingresa el numero ${(i+1)}: `)

    const numero_convertir = Number(numero);
    numeros_ingresados.push(numero_convertir);
}

const resultado = evaluar(...numeros_ingresados);
console.log("El promedio final es: ", resultado)