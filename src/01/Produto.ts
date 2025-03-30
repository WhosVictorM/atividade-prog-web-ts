export class Produto {
    private nome: string;
    private preco: number;
    private quantidadeEmEstoque: number;

    constructor(nome: string, preco: number, quantidadeEmEstoque: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    public vender(quantidade: number): void {
        if (quantidade > this.quantidadeEmEstoque) {
            console.log(`\nNão há estoque suficiente para vender ${quantidade} unidades de ${this.nome}.`);
        } else {
            this.quantidadeEmEstoque -= quantidade;
            console.log(`\nVenda realizada: ${quantidade} unidades de ${this.nome}. Estoque restante: ${this.quantidadeEmEstoque}.`);
        }
    }

    public repor(quantidade: number): void {
        this.quantidadeEmEstoque += quantidade;
        console.log(`\nEstoque reposto: ${quantidade} unidades de ${this.nome}. Estoque atual: ${this.quantidadeEmEstoque}.`);
    }

    public exibirInformacoes(): void {
        console.log(`====================\nProduto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Estoque: ${this.quantidadeEmEstoque}\n`);
    }
}