"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor(nome, idade, nota) {
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;
    }
    estaAprovado() {
        return this.nota >= 7;
    }
    exibirInformacoes() {
        console.log(`\nNome: ${this.nome}, Idade: ${this.idade}, Nota: ${this.nota}`);
        console.log(`Status: ${this.estaAprovado() ? "Aprovado" : "Reprovado"}`);
    }
}
exports.Aluno = Aluno;
