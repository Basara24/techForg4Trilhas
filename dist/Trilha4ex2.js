"use strict";
class Texto {
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    exibir() {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}
const documento = new Texto("Introdução ao TypeScript", "TypeScript é um superconjunto do JavaScript.");
console.log(documento.exibir());
