'use strict';
 
class CupomDesconto{
    #desconto1 = 10;
    #desconto2 = 20;
    constructor(){ };
    getDesconto(gastos){
        if(gastos >= 1000 && gastos <= 3000)
            console.log(`Você tem direito a ${this.#desconto1}% de descontos!`);
        else if (gastos > 3000)
        console.log(`Você tem direito a ${this.#desconto2}% de descontos!`);
        else
        console.log(`Infelizmente, você não tem descontos no momento!`);
    }
}

class Cliente{
    #nome;
    #gastosAcumulados = 0;
    #cupom;
    constructor(nome){
        this.#nome = nome;
        this.#cupom = new CupomDesconto();
    }
    getBeneficios(){
        this.#cupom.getDesconto(this.#gastosAcumulados);
    }
    setGastos(valor){
        this.#gastosAcumulados += valor;
    }
}

const clienteNovo = new Cliente('Cliente novo');
clienteNovo.setGastos(5000);
clienteNovo.getBeneficios();


