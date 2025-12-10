export const procesarPedido = (pedido, ...extras) => {
    // 1. Destructuración del objeto 'pedido'
    const { cliente, producto, cantidad } = pedido;

    console.log(`\n--- Desestructuración en la función ---`);
    console.log(`Cliente: ${cliente}`);
    console.log(`Producto: ${producto}`);
    console.log(`Cantidad: ${cantidad}`);
    console.log(`--------------------------------------\n`);
    
    // 2. Retorna el objeto final consolidado
    return {
        cliente,      // Propiedad 'cliente'
        producto,     // Propiedad 'producto'
        cantidad,     // Propiedad 'cantidad'
        extras        // Propiedad 'extras' (el array rest)
    };
};