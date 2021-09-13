// Localiza o input
const taskInput = document.querySelector('#texto-tarefa');

// Localiza lista ordenada de tarefas
const olTask = document.querySelector('#lista-tarefas');

// Localiza o botão de adicionar nova tarefa
const addTaskBtn = document.querySelector('#criar-tarefa');

// Funções
// Adicionar cor ao item de lista quando for clicado
function changeListItemColor(event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
}

// Adicionar nova tarefa
function addNewTask() {
    const newTask = document.createElement('li');
    newTask.classList.add('item-de-lista');
    newTask.innerHTML = taskInput.value;
    newTask.addEventListener('click', changeListItemColor);
    olTask.appendChild(newTask);
    taskInput.value = '';
}

addTaskBtn.addEventListener('click', addNewTask);