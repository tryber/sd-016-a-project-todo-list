// Localiza o input
const taskInput = document.querySelector('#texto-tarefa');

// Localiza lista ordenada de tarefas
const olTask = document.querySelector('#lista-tarefas');

// Localiza o botão de adicionar nova tarefa
const addTaskBtn = document.querySelector('#criar-tarefa');

// Localiza o botão de apagar tudo
const deleteAllBtn = document.querySelector('#apaga-tudo');

// Localiza o botão de remover finalizados
const deleteCompletedBtn = document.querySelector('#remover-finalizados');

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

// Apagar todas as tarefas
function deleteAllTasks() {
    const itemList = olTask.children;
    for (let index = itemList.length - 1; index >= 0; index -= 1) {
        const currentItem = itemList[index];
        olTask.removeChild(currentItem);
    }
}

deleteAllBtn.addEventListener('click', deleteAllTasks);

// Remover tarefas finalizadas
function deleteCompletedTasks() {
    const itemList = olTask.children;
    for (let index = itemList.length - 1; index >= 0; index -= 1) {
        const currentItem = itemList[index];
        if (currentItem.classList.contains('completed')) {
            olTask.removeChild(currentItem);
        }
    }
}

deleteCompletedBtn.addEventListener('click', deleteCompletedTasks);
