let click1 = document.querySelector('.criar-tarefa');

click1.addEventListener('click', atualizaLista);

function atualizaLista(){
    let valor = document.querySelector('#texto-tarefa').value;
    let lista = document.querySelector('#lista-tarefas');
    let item = document.createElement('li');
    item.className = 'tarefa';
    item.innerHTML = valor;
    lista.appendChild(item);
    valor.value = '';
}




