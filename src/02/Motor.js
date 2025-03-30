"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = void 0;
class Motor {
    constructor(anoDeFabricacao, marca, tipoDeCombustivel) {
        this.anoDeFabricacao = anoDeFabricacao;
        this.marca = marca;
        this.tipoDeCombustivel = tipoDeCombustivel;
    }
    ligar() {
        console.log(`\nMotor da marca ${this.marca} ligado.`);
    }
    exibirInformacoes() {
        console.log(`Motor - Marca: ${this.marca}, Ano de Fabricação: ${this.anoDeFabricacao}, Tipo de Combustível: ${this.tipoDeCombustivel}`);
    }
}
exports.Motor = Motor;
