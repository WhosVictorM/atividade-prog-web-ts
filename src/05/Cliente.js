"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
        this.filmesAlugados = [];
    }
    alugarFilme(filme) {
        if (this.filmesAlugados.length < 3) {
            this.filmesAlugados.push(filme);
            console.log(`\nFilme "${filme['titulo']}" alugado com sucesso!`);
        }
        else {
            console.log("\nLimite de filmes alugados atingido! Você já alugou 3 filmes.");
        }
    }
    listarFilmesAlugados() {
        console.log(`\nFilmes alugados por ${this.nome}:\n`);
        this.filmesAlugados.forEach(filme => filme.exibirInformacoes());
    }
}
exports.Cliente = Cliente;
