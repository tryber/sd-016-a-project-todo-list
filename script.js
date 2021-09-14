// Requisitos 5, 6 e 7
let button = document.getElementById('criar-tarefa');
button.addEventListener('click', adicionaTexto)

function adicionaTexto() {
    let input = document.getElementById('texto-tarefa');
    let lista = document.getElementById('lista-tarefas');
    let newList = document.createElement('li');
    newList.className = 'item-da-lista';
    newList.addEventListener('click', colorirItem);
    newList.addEventListener('dblclick', riscaItem);
    newList.addEventListener('click', selecionaItem);
    lista.appendChild(newList);
    newList.innerText = input.value;
    input.value = '';
}

function colorirItem(event) {
        event.target.style.background = 'rgb(128, 128, 128)';
}

// Requisito 8
function verificaSeSelecionado() {
    let itensDaLista = document.getElementById('lista-tarefas');
    itensDaLista.addEventListener('click', function(event){
        for (let i = 0; i < itensDaLista.children.length; i += 1){
            itensDaLista.children[i].style.background = 'white';
        }
        event.target.style.background = 'rgb(128, 128, 128)';
    })
    }
 verificaSeSelecionado();

// Requisito 9
function riscaItem(event) {
    if (event.target.classList.contains('completed')){
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed')
    }
}   

// Requisito 10
    function deleteList() {
    let buttonDelete = document.getElementById('apaga-tudo');
    buttonDelete.addEventListener('click', function() {
        let lista = document.querySelectorAll('li');
        for (let i = 0; i < lista.length; i += 1) {
            lista[i].remove();
        }
    });
}
deleteList();

 // Requisito 11 
       function removeItensFinalizados() {
           let buttonRemoveFinalizados = document.getElementById('remover-finalizados');
           buttonRemoveFinalizados.addEventListener('click', function() {
               let completos = document.querySelectorAll('.completed');
               for (let i = 0; i < completos.length; i += 1) {
                completos[i].remove();
            }
           });
       }
removeItensFinalizados();

// Requisito 12
/* 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
O que será verificado:

Será verificado que existe um elemento button com o id salvar-tarefas

Será verificado que, quando a lista tiver vários elementos, alguns dos quais marcados como finalizados, um recarregamento da página mantém a lista exatamente como está. */


// Requisito 13


// Requisito 14
    function selecionaItem(event) {
        if (event.target.classList.contains('selecionado')){
            event.target.classList.remove('selecionado');
        } else {
            event.target.classList.add('selecionado')
        }
    }   

    function removeSelecionados() {
    let buttonX = document.getElementById('remover-selecionado');
    buttonX.addEventListener('click', function() {
        let selecionados = document.querySelectorAll('.selecionado');
        for (let i = 0; i < selecionados.length; i += 1) {
         selecionados[i].remove();
     }
    });
}
removeSelecionados();