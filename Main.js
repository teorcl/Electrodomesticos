import Electrodomestico from "./Electrodomestico.js";
import { Nevera } from "./Nevera.js";
import { Televisor } from "./Televisor.js";

document.open();
let licuadora = new Electrodomestico(true,"A");
let samsung = new Televisor(false,"A",41,true);
//document.write(licuadora);
// //console.log(licuadora);
document.write(licuadora.calcularPrecio);

let whirpool = new Nevera(false,"A",200);
document.write(whirpool.calcularPrecio);
document.write(samsung.calcularPrecio);

