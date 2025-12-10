import { procesarPedido } from './modulo1'; // Asegúrate de usar la extensión .js

const pedidoInicial = {
    cliente: "Ana García",
    producto: "Laptop i7",
    cantidad: 1
};

// Se pasan argumentos adicionales que serán capturados por el parámetro rest
const pedidoFinal = procesarPedido(
    pedidoInicial, 
    "Garantía Extendida", 
    "Mouse Inalámbrico", 
    "Funda Protectora"
);

console.log("✅ Objeto Final Consolidado:\n");
console.log(pedidoFinal);