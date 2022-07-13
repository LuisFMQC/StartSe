(function(){
    'use strict';
    const listaTarefas = document.querySelector('#listaTarefas');
    const caixaTexto = document.querySelector('#caixaDeTexto');
    const botaoAdicionar = document.querySelector('#botaoAdicionar');
    const listaSuspensa = document.querySelector('#listaSuspensa');

    botaoAdicionar.addEventListener('click', function(){
        const textoDaTarefa = caixaTexto.value;
        caixaTexto.value = '';
        listaTarefas.appendChild(adicionaTarefa(textoDaTarefa));
        exibeOcultaListaSuspensa();
        caixaTexto.focus();
    });

    function adicionaTarefa(textoDaTarefa){
        const elementLi = document.createElement('li');
        const elementSpan = document.createElement('span');
        elementLi.className = 'naorealizada';
        elementSpan.setAttribute('id','tarefa');
        elementSpan.textContent = textoDaTarefa;

        elementLi.className = 'naorealizada';
        elementLi.appendChild(elementSpan);
        elementLi.appendChild(adicionaBotaoRemover());
        /* elementLi.appendChild(adicionaBotaoRealizada()); */

        elementSpan.addEventListener('click', function(){
            if(this.id === 'tarefa'){
                if(this.parentNode.className === 'naorealizada'){
                    this.parentNode.className = 'realizada';
                }
                else {
                    this.parentNode.className = 'naorealizada';
                }
            }
        });

        return elementLi;
    }

    function adicionaBotaoRemover() {
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = '✗';
        botaoRemover.setAttribute('id','remover');

        botaoRemover.addEventListener('click', function(){
            event.target.parentNode.remove();
            exibeOcultaListaSuspensa();
            console.log(listaSuspensa.selectedIndex);
        });

        return botaoRemover;
    }

    function exibeOcultaListaSuspensa(){
        const elementSpan = document.querySelector('#tarefa');
        if(elementSpan === null){
            listaSuspensa.setAttribute('hidden', 'hidden');
        }
        else {
            listaSuspensa.removeAttribute('hidden');
        }
    }

    listaSuspensa.addEventListener('change', function(){
        const vetorTarefas = listaTarefas.querySelectorAll('#tarefa');
        for(let tarefa of vetorTarefas){
            if(listaSuspensa.selectedIndex === 1 && tarefa.parentNode.className === 'naorealizada'){
                tarefa.dispatchEvent(new Event('click'));
            }
            if(listaSuspensa.selectedIndex === 2 && tarefa.parentNode.className === 'realizada'){
                tarefa.dispatchEvent(new Event('click'));
            }
        }
        if(listaSuspensa.selectedIndex === 3){
            const vetorBotoes = listaTarefas.querySelectorAll('#remover');
            for(let tarefa of vetorBotoes){
                tarefa.dispatchEvent(new Event('click'));
            }
        }
    });
    /* function adicionaBotaoRealizada() {
        const botaoRealizada = document.createElement('button');
        botaoRealizada.textContent = '✓';
        botaoRealizada.setAttribute('id','realizada');

        botaoRealizada.addEventListener('click', function(){
            event.target.parentNode.className = 'realizada';
        });

        return botaoRealizada;

    } */
})();