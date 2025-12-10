export const fusionarColecciones = (arreglo1 , arreglo2) =>{

    try
    {
        if (!Array.isArray(arreglo1))
        {
            throw new Error(`Error de tipo: El primer argumento no es un arreglo (es ${typeof lista1}).`);
        }
        /*Verifico que ambos arreglos sean de tipo array*/
        if (!Array.isArray(arreglo2))
        {
            throw new Error(`Error de tipo: El segundo argumento no es un arreglo (es ${typeof lista2}).`);
        }

        const arreglo_final = [...arreglo1, ...arreglo2]
        /* Fusiono y retorno el arreglo final*/
        return arreglo_final
    }
    catch (error)
    {
        console.error("Fusión fallida:", error.message);
        // Retorna null para indicar que la operación no se pudo completar.
        return null;
    } 

}