export default class Electrodomestico{
    
    //Metodo constructor
    constructor(procedencia, consumo) {//procedencia False para importado, true para nacional
        this.procedencia = procedencia;
        this.consumo = consumo; //Consumo es A, B o C
        this.precio = 0.0;  
    } 
    
    //Metodos
    isProcedencia() {
        return procedencia;
    }

    setProcedencia(procedencia) {
        this.procedencia = procedencia;
    }

    getConsumo() {
        return consumo;
    }

    setConsumo(consumo) {
        this.consumo = consumo;
    }

    getPrecio() {
        return precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }

    get calcularPrecio(){
        if(this.procedencia) {this.precio = this.precio + 250000;}
        else {this.precio = this.precio + 350000;}
        switch (this.consumo){
            case "A":
                this.precio = this.precio + 450000;
                break;
            case "B":
                this.precio = this.precio + 350000;
                break;
            case "C":
                this.precio = this.precio + 250000;
                break;
            default:
                document.write("Ingrese A,B o C");
                console.log("Ingrese A,B o C");

        }
        return this.precio;
    }

    // mostrarInfo(){
    //     this.precio=this.calcularPrecio;
    //     return `<br>Precio: ${this.precio}</br>`
    // }
     

}