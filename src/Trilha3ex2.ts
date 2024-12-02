abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    constructor(private raio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.raio, 2);
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(private lado: number) {
        super();
    }

    calcularArea(): number {
        return Math.pow(this.lado, 2);
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach((figura, index) => {
        console.log(`Área da figura ${index + 1}: ${figura.calcularArea()}`);
    });
}

const figuras: FiguraGeometrica[] = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 3)
];

imprimirAreas(figuras);