import {Financiamento} from './financiamento.js';
import {FinanciamentoCarencia} from './carencia.js';

const comCarencia = document.querySelector('#checkbox');
const listaSuspensa = document.querySelector('#listaSuspensa');
const valorBem = document.querySelector('#textoValor');
const valorEntrada = document.querySelector('#textoEntrada');
const taxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');
const calcula = document.querySelector('#botaoCalcular');
const corpoTabela = document.querySelector('#corpoTabela');

function exibeListaSuspensa() {
    if(this.checked){
        listaSuspensa.removeAttribute('hidden', 'hidden');
    } else {
        listaSuspensa.setAttribute('hidden', 'hidden');
    }
}

function calcFinanciamento(){
    corpoTabela.innerHTML = '';
    const valor = parseFloat(valorBem.value);
    const entrada = parseFloat(valorEntrada.value);
    const juros = parseFloat(taxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);
    let simulacao;
    if(comCarencia.checked){
        const carencia = listaSuspensa.value;
        simulacao = new FinanciamentoCarencia(valor, entrada, juros, prazo, carencia);
    } else {
        simulacao = new Financiamento(valor, entrada, juros, prazo);
    }
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
}


comCarencia.addEventListener('change', exibeListaSuspensa);
calcula.addEventListener('click', calcFinanciamento);