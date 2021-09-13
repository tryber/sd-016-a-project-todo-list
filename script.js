// Requisito 4,5,6
const button = document.getElementById('criar-tarefa');
button.addEventListener('click', adicionaTarefa);
function adicionaTarefa() {
    const input = document.querySelector('#texto-tarefa');
    const lista = document.querySelector('#lista-tarefas');
    const tarefa = document.createElement('li');
    tarefa.className = 'tarefa';
    tarefa.innerHTML = input.value;
    tarefa.style.backgroundColor = 'white';
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
    const tasks = document.getElementsByClassName('tarefa');
    for (let index = 0; index < tasks.length; index +=1) {
        tasks[index].style.backgroundColor = 'white';
    }
    origin.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
// Requisito 8
