'use strict';
 
class Produto{
    codigo;
    nome;
    constructor(codigo, nome){
        this.codigo = codigo;
        this.nome = nome;
    }
}

class Disciplina{
    codigo;
    nome;
    constructor(codigo, nome){
        this.codigo = codigo;
        this.nome = nome;
    }
}

const d1 = new Disciplina(123,'Matemática');

console.log(d1.codigo);

const p1 = new Produto(321,'Produto Y');

console.log(p1.nome);

const d2 = new Disciplina(124,'Português');

console.log(d2.codigo);

