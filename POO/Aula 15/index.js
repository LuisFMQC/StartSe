'use strict';
 
class Produto {
    #tipo;
    #valor;
    constructor(tipo, valor){
        this.#validaValor(valor);
        this.#tipo = tipo;
        this.#valor = valor;
    }
    #validaValor(valor){
        if(typeof(valor) !== 'number')
            console.log('Valor inválido!');
    }
    getDados(){
        return `Tipo: ${this.#tipo}
Valor: ${this.#valor}`;
    }
}

class Livro extends Produto {
    #titulo;
    #numPag;
    constructor(titulo, numPag, valor){
        super('Livro', valor);
        this.#titulo = titulo;
        this.#numPag = numPag;
    }
}

const prod = new Produto('Produto Genérico', 55);

const liv = new Livro('Meu livro', 130, 99);

console.log(liv.getDados());
