import { Produto } from './Produto';

class Main {
    public static main(): void {
        const produto1 = new Produto("Camiseta", 29.90, 100);
        const produto2 = new Produto("Calça Jeans", 89.90, 50);

        produto1.exibirInformacoes();
        produto2.exibirInformacoes();

        produto1.vender(10); 
        produto2.vender(55);  

        produto1.repor(20);   
        produto2.repor(10);   

        produto1.exibirInformacoes();
        produto2.exibirInformacoes();
    }
}

Main.main();