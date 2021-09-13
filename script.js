// Requisitos 5, 6 e 7
let button = document.getElementById('criar-tarefa');
button.addEventListener('click', adicionaTexto)

function adicionaTexto() {
    let input = document.getElementById('texto-tarefa');
    let lista = document.getElementById('lista-tarefas');
    let newList = document.createElement('li');
    newList.className = 'item-da-lista';
    newList.addEventListener('click', colorirItem);
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




