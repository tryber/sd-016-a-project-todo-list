const list = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa')
function createItenList() {
    const listItem = document.createElement('li');
    listItem.innerText = input.value;
    list.appendChild(listItem);
    input.value = '';
}
button.onclick = createItenList;