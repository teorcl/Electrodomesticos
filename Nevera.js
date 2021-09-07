import Electrodomestico from "./Electrodomestico.js";
export class Nevera extends Electrodomestico{
    
    constructor(procedencia, consumo, capacidad) {
        super(procedencia, consumo);
        this.capacidad = capacidad;
    }

    get calcularPrecio() {
        this.precio = super.calcularPrecio();
        if (this.capacidad > 120) {
            incremento = (this.capacidad - 120)/10;
            this.precio = this.precio + (this.precio)*0.05*incremento;
        }
        return this.precio;
    }
    

}