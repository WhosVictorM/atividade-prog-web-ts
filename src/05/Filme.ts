export class Filme {
    private titulo: string;
    private genero: string;
    private ano: number;

    constructor(titulo: string, genero: string, ano: number) {
        this.titulo = titulo;
        this.genero = genero;
        this.ano = ano;
    }

    public exibirInformacoes(): void {
        console.log(`Título: "${this.titulo}", Gênero: ${this.genero}, Ano: ${this.ano}`);
    }
}