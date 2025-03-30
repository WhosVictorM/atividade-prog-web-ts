export class Aluno {
    private nome: string;
    private idade: number;
    private nota: number;

    constructor(nome: string, idade: number, nota: number) {
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;
    }

    public estaAprovado(): boolean {
        return this.nota >= 7;
    }

    public exibirInformacoes(): void {
        console.log(`\nNome: ${this.nome}, Idade: ${this.idade}, Nota: ${this.nota}`);
        console.log(`Status: ${this.estaAprovado() ? "Aprovado" : "Reprovado"}`);
    }
}