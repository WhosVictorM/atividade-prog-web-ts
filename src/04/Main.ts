import { Aluno } from './Aluno';

class Main {
    public static main(): void {
        const aluno1 = new Aluno("João", 20, 8.5);
        const aluno2 = new Aluno("Maria", 19, 6.0);
        const aluno3 = new Aluno("Pedro", 22, 7.0);

        aluno1.exibirInformacoes();
        aluno2.exibirInformacoes();
        aluno3.exibirInformacoes();
    }
}

Main.main();