import { agregarInventario } from './modulo2.js';

const inventario = ["Camara","tripode","microfono"]
let nuevo_inventario = inventario;

let item = "computadora";
nuevo_inventario = agregarInventario(nuevo_inventario, item)

console.log(`Inventario original (sin cambios): ${inventario}`)
console.log(`Nuevo inventario (con cambios): ${nuevo_inventario}`)