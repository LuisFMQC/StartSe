'use strict';
 
class Musica{
    static formato = 'mp3';
    #titulo;
    #duracao;
    constructor(titulo, duracao){
        this.#titulo = titulo;
        this.#duracao = duracao;
    }
    static converterSegundosEmMinutos(duracao){
        const min = Math.floor(duracao / 60);
        let seg = duracao % 60;
        if(seg < 10 && seg > 0){
            seg = `0${duracao % 60}`;
        } else if (seg < 10){
            seg = '00';
        }
        return `${min}:${seg}`;
    }
    getDuracao(){
        console.log(Produto.volumeProduto(10,15,20));
        return this.#duracao;
    }
}

const musica1 = new Musica('Minha música', 190);

console.log(Musica.converterSegundosEmMinutos(180));

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
    static volumeProduto(largura, altura, profundidade){
        return largura * altura * profundidade;
    }
    parcelaValor(parcelas){
        return this.valor / parcelas;
    }
}

const prod = new Produto('Meu Produto', 10, 3, 2, 20);

console.log(Produto.volumeProduto(1,2,3));
console.log(musica1.getDuracao());