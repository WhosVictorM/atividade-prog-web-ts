export class Motor {
    private anoDeFabricacao: number;
    private marca: string;
    private tipoDeCombustivel: string;

    constructor(anoDeFabricacao: number, marca: string, tipoDeCombustivel: string) {
        this.anoDeFabricacao = anoDeFabricacao;
        this.marca = marca;
        this.tipoDeCombustivel = tipoDeCombustivel;
    }

    public ligar(): void {
        console.log(`\nMotor da marca ${this.marca} ligado.`);
    }

    public exibirInformacoes(): void {
        console.log(`Motor - Marca: ${this.marca}, Ano de Fabricação: ${this.anoDeFabricacao}, Tipo de Combustível: ${this.tipoDeCombustivel}`);
    }
}