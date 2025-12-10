export const agregarInventario = (lista, nuevo_item ) =>
{
    /* Agregamos los elementos a la lista*/
    const nueva_lista = [...lista, nuevo_item]
    /* Imprimir un mensaje */
    console.log("Inventario actualizado. Total de items: "+ nueva_lista.length)
    /*retornar la nueva lista*/
    return nueva_lista
}