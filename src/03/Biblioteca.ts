import { Livro } from './Livro';

export class Biblioteca {
    private nome: string;
    private livros: Livro[];

    constructor(nome: string) {
        this.nome = nome;
        this.livros = [];
    }

    public adicionarLivro(livro: Livro): void {
        if (this.livros.length < 10) {
            this.livros.push(livro);
            console.log(`\nLivro "${livro['titulo']}" adicionado à biblioteca.`);
        } else {
            console.log("\nA biblioteca está cheia! Não é possível adicionar mais livros.");
        }
    }

    public listarLivros(): void {
        console.log(`\nLivros disponíveis na biblioteca "${this.nome}":`);
        this.livros.forEach(livro => livro.exibirInformacoes());
    }
}