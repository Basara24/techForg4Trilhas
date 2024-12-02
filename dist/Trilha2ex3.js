"use strict";
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularValorTotal() {
        return this.preco * this.quantidade;
    }
}
const produto = new Produto("Teclado", 150, 10);
console.log(`Valor total em estoque: R$${produto.calcularValorTotal()}`);
