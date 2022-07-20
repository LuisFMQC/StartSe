'use strict';
 
class Produto{
    descricao;
    largura;
    altura;
    profundidade;
    valor;
    constructor(descricao, largura, altura, profundidade, valor){
        this.descricao = descricao;
        this.largura = largura;
        this.altura = altura;
        this.profundidade = profundidade;
        this.valor = valor;
    }
    volumeProduto(){
        return this.largura * this.altura * this.profundidade;
    }
    parcelaValor(parcelas){
        return this.valor / parcelas;
    }
}

const prod = new Produto('Meu Produto', 10, 3, 2, 20);

console.log(prod.volumeProduto());
console.log(prod.parcelaValor(2));
