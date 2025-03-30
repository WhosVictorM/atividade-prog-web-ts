import { Filme } from './Filme';

export class Cliente {
    private nome: string;
    private cpf: string;
    private filmesAlugados: Filme[];

    constructor(nome: string, cpf: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.filmesAlugados = [];
    }

    public alugarFilme(filme: Filme): void {
        if (this.filmesAlugados.length < 3) {
            this.filmesAlugados.push(filme);
            console.log(`\nFilme "${filme['titulo']}" alugado com sucesso!`);
        } else {
            console.log("\nLimite de filmes alugados atingido! Você já alugou 3 filmes.");
        }
    }

    public listarFilmesAlugados(): void {
        console.log(`\nFilmes alugados por ${this.nome}:\n`);
        this.filmesAlugados.forEach(filme => filme.exibirInformacoes());
    }
}