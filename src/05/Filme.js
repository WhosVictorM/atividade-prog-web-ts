"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
class Filme {
    constructor(titulo, genero, ano) {
        this.titulo = titulo;
        this.genero = genero;
        this.ano = ano;
    }
    exibirInformacoes() {
        console.log(`Título: "${this.titulo}", Gênero: ${this.genero}, Ano: ${this.ano}`);
    }
}
exports.Filme = Filme;
