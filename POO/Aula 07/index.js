'use strict';

class Financiamento {
    valorFinanciamento;
    taxaJuros;
    numero;
    constructor(valorFinanciamento, taxaJuros, numero){
        this.valorFinanciamento = valorFinanciamento;
        this.taxaJuros = taxaJuros;
        this.numero = numero;
    }
}

const fin = new Financiamento(10000, 1, 7894);

console.log(fin);

