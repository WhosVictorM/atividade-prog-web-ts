"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Main.ts
var Produto_1 = require("./Produto");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        // Instanciando dois objetos Produto
        var produto1 = new Produto_1.Produto("Camiseta", 29.90, 100);
        var produto2 = new Produto_1.Produto("Calça Jeans", 89.90, 50);
        // Exibindo informações iniciais dos produtos
        produto1.exibirInformacoes();
        produto2.exibirInformacoes();
        // Simulando uma venda
        produto1.vender(10); // Vendendo 10 camisetas
        produto2.vender(55); // Vendendo 5 calças jeans
        // Simulando uma reposição
        produto1.repor(20); // Repondo 20 camisetas
        produto2.repor(10); // Repondo 10 calças jeans
        // Exibindo informações finais dos produtos
        produto1.exibirInformacoes();
        produto2.exibirInformacoes();
    };
    return Main;
}());
// Executando o programa
Main.main();
