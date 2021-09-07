import Electrodomestico from "./Electrodomestico.js";
export class Nevera extends Electrodomestico{
    
    constructor(procedencia, consumo, capacidad) {
        super(procedencia, consumo);
        this.capacidad = capacidad;
        this.precio = super.calcularPrecio;
    }

    get calcularPrecio() {
        let preciobase;
        preciobase = this.precio;
        if (this.capacidad > 120) {
            let incremento = parseInt((this.capacidad - 120)/10);
            this.precio = preciobase + ((preciobase*0.05)*incremento);
        }
        return this.precio;
    }
    

}