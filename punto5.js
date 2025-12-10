
import { actualizarPerfil } from "./modulo5.js";

const perfil = {
    nombre: "pedro",
    edad: "20"
};

const perfil_actualizado = actualizarPerfil(perfil, {nombre: "mateo", edad: "29"}, {email: "mateomaster09@gmail.com", telefono: "3105509243"})

console.log(`Perfil inicial`, perfil)
console.log(`Perfil actualizado`, perfil_actualizado)