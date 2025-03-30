"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = require("./Livro");
const Biblioteca_1 = require("./Biblioteca");
class Main {
    static main() {
        const biblioteca = new Biblioteca_1.Biblioteca("Biblioteca Municipal");
        const livro1 = new Livro_1.Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1216);
        const livro2 = new Livro_1.Livro("1984", "George Orwell", 328);
        const livro3 = new Livro_1.Livro("Dom Casmurro", "Machado de Assis", 256);
        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);
        biblioteca.adicionarLivro(livro3);
        biblioteca.listarLivros();
    }
}
Main.main();
