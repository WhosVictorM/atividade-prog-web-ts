"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Filme_1 = require("./Filme");
const Cliente_1 = require("./Cliente");
class Main {
    static main() {
        const filme1 = new Filme_1.Filme("O Senhor dos Anéis: A Sociedade do Anel", "Fantasia", 2001);
        const filme2 = new Filme_1.Filme("A Origem", "Ficção Científica", 2010);
        const filme3 = new Filme_1.Filme("Vingadores Guerra Infinita", "Ficção Científica", 2018);
        const filme4 = new Filme_1.Filme("A Casa Das Brasileirinhas", "XXX", 2025);
        const cliente = new Cliente_1.Cliente("João Silva", "123.456.789-00");
        cliente.alugarFilme(filme1);
        cliente.alugarFilme(filme2);
        cliente.alugarFilme(filme4);
        cliente.alugarFilme(filme3);
        cliente.listarFilmesAlugados();
    }
}
Main.main();
