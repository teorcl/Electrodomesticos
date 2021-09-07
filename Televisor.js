import Electrodomestico from "./Electrodomestico.js";
export class Televisor extends Electrodomestico{
    
    constructor(procedencia, consumo, tamano) {
        super(procedencia, consumo);
        this.tamano = tamano;
        this.isTDT = false;
    }

    /**-------------METODOS------------------**/
    get calcularPrecio() {
        this.precio = super.calcularPrecio();
        if (this.tamano>40){
            this.precio =this.precio + (this.precio*0.3);
        }
        //this.precio += 250000;
        this.precio = (isTDT===true)?this.precio+250000:this.precio;
        return this.precio;
    }
}