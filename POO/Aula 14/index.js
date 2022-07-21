'use strict';
 
class Produto {
    tipo;
    constructor(tipo){
        this.tipo = tipo;
    }
    getDados(){
        return `Tipo: ${this.tipo}`;
    }
}

class Livro extends Produto {
    titulo;
    numPag;
    constructor(titulo, numPag){
        super('Livro');
        this.titulo = titulo;
        this.numPag = numPag;
        console.log(super.getDados());
    }
    exibeGetDados(){
        console.log(`${super.getDados()}. ${this.titulo} - ${this.numPag}`);
    }
}

const prod = new Produto('Produto Genérico');

const liv = new Livro('Meu Livro', 150);

liv.exibeGetDados();

