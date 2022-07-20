'use strict';
 
class Produto{
    static grande = 12;
    static media = 7;
    static pequeno = 1; 
    codigo;
    nome;
    valor;
    tamanho;
    constructor(codigo, nome, valor, tamanho){
        this.codigo = codigo;
        this.nome = nome;
        this.valor = valor;
        this.tamanho = tamanho;
    }
}

class Veiculo{
    tamanho;
    constructor(tamanho){
        this.tamanho = tamanho;
    }
}


const p1 = new Produto(855, 'Meu Produto', 54, Produto.grande);
const p2 = new Produto(955, 'Meu Produto 2', 98, Produto.pequeno);
const v = new Veiculo(Produto.media);

console.log(p1);
console.log(p2);
console.log(v);




