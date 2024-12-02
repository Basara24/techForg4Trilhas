"use strict";
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    paraFahrenheit() {
        return (this.valor * 9) / 5 + 32;
    }
    paraKelvin() {
        return this.valor + 273.15;
    }
}
const temp = new Temperatura(25);
console.log(`Fahrenheit: ${temp.paraFahrenheit()}`);
console.log(`Kelvin: ${temp.paraKelvin()}`);
