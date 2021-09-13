function createTask() {
    const getTaskInput = document.querySelector('#texto-tarefa');
    const textInput = getTaskInput.value;
    const getList = document.querySelector('#lista-tarefas');
    const taskLine = document.createElement('li');
    taskLine.innerHTML = textInput;
    getList.appendChild(taskLine);
    getTaskInput.value = ''
}
const getTaskButton = document.querySelector('#criar-tarefa');
getTaskButton.addEventListener('click', createTask)