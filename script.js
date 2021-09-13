function createTask() {
    const getTaskInput = document.querySelector('#texto-tarefa');
    const textInput = getTaskInput.value;
    const getList = document.querySelector('#lista-tarefas');
    const taskLine = document.createElement('li');
    taskLine.innerText = textInput;
    getList.appendChild(taskLine);
    getTaskInput.value = ''
}
const getTaskButton = document.querySelector('#criar-tarefa');
getTaskButton.addEventListener('click', createTask);

function changeListColor(){
    const getList = document.querySelectorAll('li');
    for (let index = 0; index < getList.length; index += 1){
        getList[index].addEventListener('click', function(event){
            event.target.style.backgroundColor = 'red';
        })
    }
}
changeListColor();