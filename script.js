// Localiza o input
const taskInput = document.querySelector('#texto-tarefa');

// Localiza lista ordenada de tarefas
const olTask = document.querySelector('#lista-tarefas');

// Localiza o botão de adicionar nova tarefa
const addTaskBtn = document.querySelector('#criar-tarefa');

// Funções
// Adicionar cor de fundo ao item de lista quando for clicado e tira dos outros
function changeListItemColor(event) {
    for (let index = 0; index < olTask.children.length; index += 1) {
        const currentListItem = olTask.children[index];
        currentListItem.style.backgroundColor = 'white';
    }

    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Risca a linha caso a tarefa tenha sido realizada + retorna ao estado original
function completeTask(event) {
    const currentListItem = event.target;
    currentListItem.classList.toggle('completed');
}

// Adicionar nova tarefa
function addNewTask() {
    const newTask = document.createElement('li');
    newTask.classList.add('item-de-lista');
    newTask.innerHTML = taskInput.value;
    newTask.addEventListener('click', changeListItemColor);
    newTask.addEventListener('dblclick', completeTask);
    olTask.appendChild(newTask);
    taskInput.value = '';
}

addTaskBtn.addEventListener('click', addNewTask);

