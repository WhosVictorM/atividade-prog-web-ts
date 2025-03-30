import { Filme } from './Filme';
import { Cliente } from './Cliente';

class Main {
    public static main(): void {
        const filme1 = new Filme("O Senhor dos Anéis: A Sociedade do Anel", "Fantasia", 2001);
        const filme2 = new Filme("A Origem", "Ficção Científica", 2010);
        const filme3 = new Filme("Vingadores Guerra Infinita", "Ficção Científica", 2018);
        const filme4 = new Filme("A Casa Das Brasileirinhas", "XXX", 2025);

        const cliente = new Cliente("João Silva", "123.456.789-00");

        cliente.alugarFilme(filme1);
        cliente.alugarFilme(filme2);
        cliente.alugarFilme(filme4);
        cliente.alugarFilme(filme3);

        cliente.listarFilmesAlugados();
    }
}

Main.main();