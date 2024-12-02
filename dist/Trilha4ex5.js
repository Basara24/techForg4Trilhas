"use strict";
class BibliotecaGestao {
    constructor() {
        this.livros = [];
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    filtrarPorGenero(genero) {
        return this.livros.filter(livro => livro.genero === genero);
    }
    buscarPorAutor(autor) {
        return this.livros.filter(livro => livro.autor === autor);
    }
    obterLivrosDisponiveisOrdenados() {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}
const bibliotecaGestao = new BibliotecaGestao();
bibliotecaGestao.adicionarLivro({ titulo: "Duna", autor: "Frank Herbert", genero: "Ficção", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false });
bibliotecaGestao.adicionarLivro({ titulo: "Fundação", autor: "Isaac Asimov", genero: "Ficção", disponivel: true });
console.log(bibliotecaGestao.filtrarPorGenero("Ficção"));
console.log(bibliotecaGestao.buscarPorAutor("Isaac Asimov"));
console.log(bibliotecaGestao.obterLivrosDisponiveisOrdenados());
