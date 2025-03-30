export class Livro {
    private titulo: string;
    private autor: string;
    private numeroDePaginas: number;

    constructor(titulo: string, autor: string, numeroDePaginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroDePaginas = numeroDePaginas;
    }

    public exibirInformacoes(): void {
        console.log(`\nTítulo: "${this.titulo}", Autor: ${this.autor}, Páginas: ${this.numeroDePaginas}`);
    }
}