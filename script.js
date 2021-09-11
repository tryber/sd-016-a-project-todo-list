const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

function addListItem(){
    let listItem = document.createElement('li')
    listItem.innerText = input.value;
    list.appendChild(listItem);

    input.value = '';
}

button.addEventListener('click', addListItem);