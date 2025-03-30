"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
// Produto.ts
var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    // Método para vender um produto
    Produto.prototype.vender = function (quantidade) {
        if (quantidade > this.quantidadeEmEstoque) {
            console.log("\nN\u00E3o h\u00E1 estoque suficiente para vender ".concat(quantidade, " unidades de ").concat(this.nome, "."));
        }
        else {
            this.quantidadeEmEstoque -= quantidade;
            console.log("\nVenda realizada: ".concat(quantidade, " unidades de ").concat(this.nome, ". Estoque restante: ").concat(this.quantidadeEmEstoque, "."));
        }
    };
    // Método para repor o estoque
    Produto.prototype.repor = function (quantidade) {
        this.quantidadeEmEstoque += quantidade;
        console.log("\nEstoque reposto: ".concat(quantidade, " unidades de ").concat(this.nome, ". Estoque atual: ").concat(this.quantidadeEmEstoque, "."));
    };
    // Método para exibir informações do produto
    Produto.prototype.exibirInformacoes = function () {
        console.log("====================\nProduto: ".concat(this.nome, ", Pre\u00E7o: R$").concat(this.preco.toFixed(2), ", Estoque: ").concat(this.quantidadeEmEstoque, "\n"));
    };
    return Produto;
}());
exports.Produto = Produto;
