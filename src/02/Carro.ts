import { Pneu } from './Pneu';
import { Motor } from './Motor';

export class Carro {
    private modelo: string;
    private ano: number;
    private velocidade: number;
    private pneu: Pneu;
    private motor: Motor;

    constructor(modelo: string, ano: number, pneu: Pneu, motor: Motor) {
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0; 
        this.pneu = pneu;
        this.motor = motor;
    }

    public acelerar(incremento: number): void {
        this.velocidade += incremento;
        console.log(`\nO carro ${this.modelo} acelerou para ${this.velocidade} km/h.`);
    }

    public frear(decremento: number): void {
        this.velocidade = Math.max(0, this.velocidade - decremento);
        console.log(`O carro ${this.modelo} reduziu a velocidade para ${this.velocidade} km/h.`);
    }

    public exibirInformacoes(): void {
        console.log(`\nCarro - Modelo: ${this.modelo}, Ano: ${this.ano}, Velocidade: ${this.velocidade} km/h`);
        this.pneu.exibirInformacoes();
        this.motor.exibirInformacoes();
    }
}