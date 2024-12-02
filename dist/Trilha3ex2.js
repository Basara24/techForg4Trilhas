"use strict";
class FiguraGeometrica {
}
class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}
class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return Math.pow(this.lado, 2);
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
function imprimirAreas(figuras) {
    figuras.forEach((figura, index) => {
        console.log(`Área da figura ${index + 1}: ${figura.calcularArea()}`);
    });
}
const figuras = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 3)
];
imprimirAreas(figuras);
