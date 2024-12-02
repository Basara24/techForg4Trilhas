"use strict";
class Loja {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}
const loja = new Loja();
loja.adicionarProduto({ codigo: 1, nome: "Notebook" });
loja.adicionarProduto({ codigo: 2, nome: "Smartphone" });
console.log(loja.buscarProdutoPorCodigo(1));
console.log(loja.buscarProdutoPorCodigo(3));
