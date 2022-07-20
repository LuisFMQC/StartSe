'use strict';
 
class Produto{
    codigo;
    nome;
    valor;
    constructor(codigo, nome, valor){
        this.codigo = codigo;
        this.nome = nome;
        this.valor = valor;
    }
}

class Disciplina{
    codigo;
    nome;
    nota;
    constructor(codigo, nome, nota){
        this.codigo = codigo;
        this.nome = nome;
        this.nota = nota;
    }
}

const d1 = new Disciplina(123,'Matemática',8);

console.log(d1);

const d2 = d1;

console.log(d2);

d2.codigo = 543;
d2.nome = 'Álgebra';
d2.note = 7;

console.log(d1);
console.log(d2);

