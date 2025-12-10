import { fusionarColecciones } from './modulo8.js'

const numeros = [11, 20, 60]
const letras = ["a", "b", "c"]
// const objeto = {dato: 1, tipo: "objeto"} (utilizar como ejemplo)

const resultado = fusionarColecciones(numeros, letras);
// const resultado = fusionarColecciones(numeros, objeto);

console.log(`Elementos del arreglo 1: ${numeros}`)
console.log(`Elementos del arreglo 2: ${letras}`)
// console.log(`Elementos del objeto: ${objeto}`)
console.log(`Resultado de fusion: ${resultado}`)
