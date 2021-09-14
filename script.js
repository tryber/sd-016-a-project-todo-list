const getTaskButton = document.querySelector('#criar-tarefa');
const getContainerButtons = document.querySelector('#container-buttons');
const deleteButton = document.querySelector('#apaga-tudo');
const delCompletedButton = document.querySelector('#remover-finalizados');

function changeTaskColor(event) {
    const getList = document.querySelectorAll('li');
    for (let index = 0; index < getList.length; index += 1) {
        getList[index].style.backgroundColor = 'unset';
    } 
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function setTaskList() {
    const getList = document.querySelectorAll('li');
    for (let index = 0; index < getList.length; index += 1) {
        getList[index].addEventListener('click', changeTaskColor);  
    }  
}

function createTask() {
    const getTaskInput = document.querySelector('#texto-tarefa');
    const textInput = getTaskInput.value;
    const getList = document.querySelector('#lista-tarefas');
    const taskLine = document.createElement('li');
    taskLine.innerText = textInput;
    getList.appendChild(taskLine);
    getTaskInput.value = '';
    setTaskList();
    completedTask();
}
getTaskButton.addEventListener('click', createTask);


function completedTask() {
    const getList = document.querySelectorAll('li');
    for (let index = 0; index < getList.length; index += 1) {
        getList[index].ondblclick = function (event) {
            event.target.classList.toggle('completed');
        }
    };  
} 

function deleteList() {
    const getList = document.querySelectorAll('li');
    for (let index = 0; index < getList.length; index += 1) {
      getList[index].remove();
    } 
}
deleteButton.addEventListener('click', deleteList);

function deleteCompletedTask() {
    const getCompleted = document.querySelectorAll('.completed');
    for (let index = 0; index < getCompleted.length; index += 1) {
        getCompleted[index].remove();
      } 
}
delCompletedButton.addEventListener('click', deleteCompletedTask)