import { Livro } from './Livro';
import { Biblioteca } from './Biblioteca';

class Main {
    public static main(): void {
        const biblioteca = new Biblioteca("Biblioteca Municipal");

        const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1216);
        const livro2 = new Livro("1984", "George Orwell", 328);
        const livro3 = new Livro("Dom Casmurro", "Machado de Assis", 256);

        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);
        biblioteca.adicionarLivro(livro3);

        biblioteca.listarLivros();
    }
}


Main.main();