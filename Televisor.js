import Electrodomestico from "./Electrodomestico.js";
export class Televisor extends Electrodomestico{
    
    constructor(procedencia, consumo, tamano, isTDT) {
        super(procedencia, consumo);
        this.tamano = tamano;
        this.isTDT = isTDT;
        this.precio=super.calcularPrecio;
    }

    /**-------------METODOS------------------**/
    get calcularPrecio() {
        let preciobase;
        preciobase = this.precio;
        if (this.tamano>40){
            this.precio =preciobase + (preciobase*0.3);
        }
        //this.precio += 250000;
        this.precio = (this.isTDT===true)?preciobase+250000:preciobase;
        return this.precio;
    }
}