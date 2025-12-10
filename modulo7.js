export const evaluar = (...valores) =>{

    try
    {   /*Recorrer el arreglo y verificar que todos los datos sean de tipo numerico*/
        for ( const valor of valores){
            if ( typeof valor !== 'number' || isNaN(valor))
            {
                throw new Error(`Dato no numérico encontrado: '${valor}'`);
            }
        }
        /*Creo una nueva lista*/
        const nueva_lista = [...valores];
        let suma = 0;
        for(let i = 0 ; i < nueva_lista.length; i++)
        {
            suma += nueva_lista[i];
        }
        /* calculo y retorno el promedio*/
        let promedio = suma/nueva_lista.length;
        return promedio

    }
    catch (error)
    {
        console.error("Error de Evaluación:", error.message);
        // Retornamos null o un valor de error para indicar que el cálculo falló.
        return null;
    }

}