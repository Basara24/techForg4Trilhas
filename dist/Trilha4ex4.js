"use strict";
class Biblioteca {
    constructor() {
        this.livros = [];
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    buscarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }
}
const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Brave New World", autor: "Aldous Huxley", disponivel: false });
console.log(biblioteca.buscarLivrosDisponiveis());
