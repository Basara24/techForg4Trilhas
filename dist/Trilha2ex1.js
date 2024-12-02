"use strict";
class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        }
        else {
            console.log("Valor inválido para depósito.");
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        }
        else {
            console.log("Saldo insuficiente ou valor inválido.");
        }
    }
}
const conta = new ContaBancaria("João");
conta.depositar(500);
conta.sacar(200);
console.log(conta.saldo);
