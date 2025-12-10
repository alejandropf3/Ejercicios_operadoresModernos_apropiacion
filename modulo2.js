export const agregarInventario = (lista, nuevo_item ) =>
{
    const nueva_lista = [...lista, nuevo_item]

    console.log("Inventario actualizado. Total de items: "+ nueva_lista.length)

    return nueva_lista
}