"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(modelo, ano, pneu, motor) {
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0;
        this.pneu = pneu;
        this.motor = motor;
    }
    acelerar(incremento) {
        this.velocidade += incremento;
        console.log(`\nO carro ${this.modelo} acelerou para ${this.velocidade} km/h.`);
    }
    frear(decremento) {
        this.velocidade = Math.max(0, this.velocidade - decremento);
        console.log(`O carro ${this.modelo} reduziu a velocidade para ${this.velocidade} km/h.`);
    }
    exibirInformacoes() {
        console.log(`\nCarro - Modelo: ${this.modelo}, Ano: ${this.ano}, Velocidade: ${this.velocidade} km/h`);
        this.pneu.exibirInformacoes();
        this.motor.exibirInformacoes();
    }
}
exports.Carro = Carro;
