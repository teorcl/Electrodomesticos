import Electrodomestico from "./Electrodomestico.js";
import { Nevera } from "./Nevera.js";

document.open();
// const licuadora = new Electrodomestico(true,"A");
// //document.write(licuadora);
// //console.log(licuadora);
// document.write(licuadora.calcularPrecio);

const whirpool = new Nevera(true,"B",150);
document.write(whirpool.calcularPrecio);

