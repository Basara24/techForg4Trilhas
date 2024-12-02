interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    livros: Livro[];

    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Brave New World", autor: "Aldous Huxley", disponivel: false });

console.log(biblioteca.buscarLivrosDisponiveis());