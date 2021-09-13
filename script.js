//Requisito 5 - inserir texto a lista
const button = document.getElementById("criar-tarefa");
button.addEventListener('click',addTarefa);
const tarefa = document.getElementById('texto-tarefa');

function addTarefa() {
    const listIten = document.createElement('li');
    listIten.innerHTML = tarefa.value;
    document.getElementById('lista-tarefas').appendChild(listIten);
    tarefa.value = ' ';
}