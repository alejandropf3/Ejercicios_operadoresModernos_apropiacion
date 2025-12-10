export const analizarVenta = (lista_ventas) =>{
    /* Tomo el primer elemento del arreglo*/
    const [{detalles: {precio,  unidades}}] = lista_ventas;

    let total_vendido = precio * unidades;
    /* Calculo y retorno el final*/
    return total_vendido

}