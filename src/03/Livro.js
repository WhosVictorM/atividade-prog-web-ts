"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, autor, numeroDePaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroDePaginas = numeroDePaginas;
    }
    exibirInformacoes() {
        console.log(`\nTítulo: "${this.titulo}", Autor: ${this.autor}, Páginas: ${this.numeroDePaginas}`);
    }
}
exports.Livro = Livro;
