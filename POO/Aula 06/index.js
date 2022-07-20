'use strict';

class Filme {
    constructor(titulo, ano) {
        this.titulo = titulo;
        this.ano = ano;
    }
}

let meuFilme = new Filme('Star Wars', 1968);

console.log(meuFilme.ano);

class Produto {
    constructor(){
        this.tipo = 'Produto X';
    }
}

const prod = new Produto();

console.log(prod.tipo);