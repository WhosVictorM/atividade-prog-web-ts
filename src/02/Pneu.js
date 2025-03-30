"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pneu = void 0;
class Pneu {
    constructor(anoDeFabricacao, marca) {
        this.anoDeFabricacao = anoDeFabricacao;
        this.marca = marca;
    }
    exibirInformacoes() {
        console.log(`Pneu - Marca: ${this.marca}, Ano de Fabricação: ${this.anoDeFabricacao}`);
    }
}
exports.Pneu = Pneu;
