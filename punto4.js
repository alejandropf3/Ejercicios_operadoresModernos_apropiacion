
import promp_sync from "prompt-sync";
const tomar = promp_sync();
const personalizados = {};

import { confg_inicial, configurarUsuario } from "./modulo4.js";

personalizados.tema = tomar("Ingresa el tipo de tema (color): ");
personalizados.idioma = tomar("Ingresa el idioma (ej: en): ");

let idioma_resultado = configurarUsuario(confg_inicial, personalizados);

console.log(`Configuración por defecto: `, confg_inicial);
console.log(`Configuración personalizada: `, personalizados);
console.log(`Idioma cambiado: `, idioma_resultado);
