import { registrarActividad } from "./modulo3.js";

import promp_sync from "prompt-sync";
const tomar = promp_sync();

let actividad = {}

let propiedad = tomar('Ingresa la propiedad 1 (ej: nombre): ')
let valor = tomar('Ingresa el valor que contiene la propiedad: ')

actividad[propiedad] = valor

propiedad = tomar('Ingresa la propiedad 2 (ej: nombre): ')
valor = tomar('Ingresa el valor que contiene la propiedad: ')

actividad[propiedad] = valor

registrarActividad(actividad);
