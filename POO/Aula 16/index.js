'use strict';
 
class Laboratorio {
    #nome;
    #capacidade;
    constructor(nome, capacidade){
        this.#nome = nome;
        this.#capacidade = capacidade;
    }
    getNome(){
        return this.#nome;
    }
    getCapacidade(){
        return this.#capacidade;
    }
    setNome(nome){
        this.#nome = nome;
    }
    setCapacidade(capacidade){
        this.#capacidade = capacidade;
    }
}

const lab = new Laboratorio('Informática', 45);

lab.setNome('Meu novo lab');
lab.setCapacidade(80);
console.log(lab);