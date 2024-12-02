"use strict";
class Animal {
    constructor() {
        this.energia = 0;
    }
    comer(quantidade) {
        this.energia += quantidade;
    }
    statusEnergia() {
        console.log(`Energia atual: ${this.energia}`);
    }
}
class Leao extends Animal {
    comer() {
        console.log("O leão está caçando...");
        super.comer(15);
    }
}
class Passaro extends Animal {
    comer() {
        console.log("O pássaro está se alimentando...");
        super.comer(10);
    }
}
const leao = new Leao();
const passaro = new Passaro();
leao.comer();
leao.statusEnergia();
passaro.comer();
passaro.statusEnergia();
