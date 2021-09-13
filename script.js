function addtask() {
    const taskText  = document.querySelector('#texto-tarefa');
    const text = taskText .value;
    const list = document.querySelector('#lista-tarefas');
    const generateList  = document.createElement('li');
    generateList .innerHTML = text
    list.appendChild(generateList );
    taskText .value = ''
}
const taskButton = document.querySelector('#criar-tarefa');
taskButton.addEventListener('click', addtask)