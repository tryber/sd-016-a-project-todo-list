// Requisito 4,5,6
const button = document.getElementById('criar-tarefa');
button.addEventListener('click', adicionaTarefa);
function adicionaTarefa() {
    const input = document.querySelector('#texto-tarefa');
    const lista = document.querySelector('#lista-tarefas');
    const tarefa = document.createElement('li');
    tarefa.className = 'tarefa';
    tarefa.innerHTML = input.value;
    lista.appendChild(tarefa);
    input.value = '';
    addEvent();
}
// Requisito 7
function addEvent() {
    const tarefas = document.getElementsByClassName('tarefa');
    for (let index = 0; index < tarefas.length; index += 1) {
        tarefas[index].addEventListener('click', taskColor);
    }
}
function taskColor(origin) {
    origin.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
// Requisito 8
