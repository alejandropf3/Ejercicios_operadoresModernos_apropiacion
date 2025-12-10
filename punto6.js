
import { analizarVenta } from './modulo6.js'

const ventas = [{producto: "teclado", detalles: {precio: "50", unidades: "3"}},
    {producto: "mouse", detalles: {precio: "20", unidades: "5"}}
];

let total_primera_venta = analizarVenta(ventas);

console.log("Producto: ", ventas[0].producto)
console.log("Precio unitario: $",ventas[0].detalles.precio)
console.log("Numero de unidades: ",ventas[0].detalles.unidades)
console.log("Total vendido del primer producto: $",total_primera_venta);