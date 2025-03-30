"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aluno_1 = require("./Aluno");
class Main {
    static main() {
        const aluno1 = new Aluno_1.Aluno("João", 20, 8.5);
        const aluno2 = new Aluno_1.Aluno("Maria", 19, 6.0);
        const aluno3 = new Aluno_1.Aluno("Pedro", 22, 7.0);
        aluno1.exibirInformacoes();
        aluno2.exibirInformacoes();
        aluno3.exibirInformacoes();
    }
}
Main.main();
