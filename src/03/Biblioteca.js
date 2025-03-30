"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor(nome) {
        this.nome = nome;
        this.livros = [];
    }
    adicionarLivro(livro) {
        if (this.livros.length < 10) {
            this.livros.push(livro);
            console.log(`\nLivro "${livro['titulo']}" adicionado à biblioteca.`);
        }
        else {
            console.log("\nA biblioteca está cheia! Não é possível adicionar mais livros.");
        }
    }
    listarLivros() {
        console.log(`\nLivros disponíveis na biblioteca "${this.nome}":`);
        this.livros.forEach(livro => livro.exibirInformacoes());
    }
}
exports.Biblioteca = Biblioteca;
