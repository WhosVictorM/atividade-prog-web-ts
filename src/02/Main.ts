import { Carro } from './Carro';
import { Pneu } from './Pneu';
import { Motor } from './Motor';

class Main {
    public static main(): void {
        const pneu1 = new Pneu(2022, "Michelin");
        const motor1 = new Motor(2022, "Honda", "Gasolina");

        const pneu2 = new Pneu(2021, "Pirelli");
        const motor2 = new Motor(2021, "Toyota", "Álcool");

        const carro1 = new Carro("Civic", 2022, pneu1, motor1);
        const carro2 = new Carro("Corolla", 2021, pneu2, motor2);

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