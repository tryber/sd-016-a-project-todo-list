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

// Localiza o botão de salvar tarefas
const saveTasksBtn = document.querySelector('#salvar-tarefas');

// Lista de tarefas
let taskList = [];

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

// Criar tarefa
function createTask(content, status) {
    const newTask = document.createElement('li');
    newTask.innerHTML = content;
    if (status) {
        newTask.classList.add('completed');
    }
    newTask.addEventListener('click', changeListItemColor);
    newTask.addEventListener('dblclick', completeTask);
    olTask.appendChild(newTask);
}

// Adicionar nova tarefa
function addNewTask() {
    createTask(taskInput.value, false);
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

// Atualiza lista de tarefas e salva no localStorage
function saveListToLocalStorage() {
    const currentList = olTask.children;
    const newList = [];
    for (let index = 0; index < currentList.length; index += 1) {
        const currentListItem = currentList[index].innerHTML;
        let status = false;
        if (currentList[index].classList.contains('completed')) {
            status = true;
        }
        const itemObject = {
            content: currentListItem,
            completed: status
        };
        newList.push(itemObject);
    }
    taskList = newList;
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

saveTasksBtn.addEventListener('click', saveListToLocalStorage);

// Carregar lista do localStorage
function loadList() {
    const savedList = JSON.parse(localStorage.getItem('tasks'));
    for (let index = 0; index < savedList.length; index += 1) {
        const currentContent = savedList[index].content;
        const currentStatus = savedList[index].completed;
        createTask(currentContent, currentStatus);
    }
}

// // Carregamento da página
window.onload = function onLoad() {
    if (localStorage.getItem('tasks') !== null) {
        loadList();
    }
}