abstract class Funcionario {
    constructor(private nome: string, private salario: number) {}

    getSalario(): number {
        return this.salario;
    }

    abstract calcularBonus(): number;

    calcularSalarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.1;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarios(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        console.log(`Salário com bônus: R$${funcionario.calcularSalarioComBonus()}`);
    });
}

const funcionarios: Funcionario[] = [
    new Gerente("Carlos", 5000),
    new Operario("Ana", 2000)
];

calcularSalarios(funcionarios);