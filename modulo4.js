/*Definimos las configuraciones por defecto*/
export const confg_inicial = { tema: "claro", idioma: "es"};

export const configurarUsuario = (confg_inicial, personalizada) =>{

    /*Destructurar el resultado para extraer únicamente la propiedad idioma*/
    const { idioma } = {...confg_inicial, ...personalizada}
    /*Retornar ididoma*/
    return idioma
}