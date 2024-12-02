"use strict";
class ItemLoja {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}
const item = new ItemLoja(1, "Camiseta", 49.99);
console.log(item);
