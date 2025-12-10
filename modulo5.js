export const actualizarPerfil = (perfil, ...nuevos_datos) =>{
    
    /*Esto crea un NUEVO objeto de forma inmutable.*/
    const nuevoPerfil = { ...perfil, ...Object.assign({}, ...nuevos_datos) };

    return nuevoPerfil

}