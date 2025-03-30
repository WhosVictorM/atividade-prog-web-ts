export class Pneu {
    private anoDeFabricacao: number;
    private marca: string;

    constructor(anoDeFabricacao: number, marca: string) {
        this.anoDeFabricacao = anoDeFabricacao;
        this.marca = marca;
    }

    public exibirInformacoes(): void {
        console.log(`Pneu - Marca: ${this.marca}, Ano de Fabricação: ${this.anoDeFabricacao}`);
    }
}