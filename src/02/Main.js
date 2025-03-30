"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = require("./Carro");
const Pneu_1 = require("./Pneu");
const Motor_1 = require("./Motor");
class Main {
    static main() {
        const pneu1 = new Pneu_1.Pneu(2022, "Michelin");
        const motor1 = new Motor_1.Motor(2022, "Honda", "Gasolina");
        const pneu2 = new Pneu_1.Pneu(2021, "Pirelli");
        const motor2 = new Motor_1.Motor(2021, "Toyota", "Álcool");
        const carro1 = new Carro_1.Carro("Civic", 2022, pneu1, motor1);
        const carro2 = new Carro_1.Carro("Corolla", 2021, pneu2, motor2);
        carro1.exibirInformacoes();
        carro2.exibirInformacoes();
        motor1.ligar();
        motor2.ligar();
        carro1.acelerar(50);
        carro1.frear(20);
        carro2.acelerar(70);
        carro2.frear(30);
    }
}
Main.main();
