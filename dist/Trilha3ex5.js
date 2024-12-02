"use strict";
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getSalario() {
        return this.salario;
    }
    calcularSalarioComBonus() {
        return this.salario + this.calcularBonus();
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.1;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
function calcularSalarios(funcionarios) {
    funcionarios.forEach(funcionario => {
        console.log(`Salário com bônus: R$${funcionario.calcularSalarioComBonus()}`);
    });
}
const funcionarios = [
    new Gerente("Carlos", 5000),
    new Operario("Ana", 2000)
];
calcularSalarios(funcionarios);
