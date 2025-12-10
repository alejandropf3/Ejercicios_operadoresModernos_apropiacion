export const actualizarPerfil = (perfil, ...nuevos_datos) =>{

    const nuevoPerfil = { ...perfil, ...Object.assign({}, ...nuevos_datos) };

    return nuevoPerfil

}