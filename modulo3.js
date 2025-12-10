export const registrarActividad = (actividad) =>{

    try {
        // Validar que la propiedad 'nombre' exista
        if (!actividad.nombre) {
            throw new Error("La actividad no es válida: Falta la propiedad 'nombre'.");
        }
        
        // Validar que la propiedad 'fecha' exista
        if (!actividad.fecha) {
            throw new Error("La actividad no es válida: Falta la propiedad 'fecha'.");
        }
        
        // Si todo está correcto
        console.log("Registro exitoso:");
        console.log(actividad);
        
    } catch (error) {
        // Captura y muestra el error
        console.error("Error de Registro:", error.message);
    }

}