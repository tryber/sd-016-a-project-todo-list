
let button = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');
let input = document.querySelector('#texto-tarefa');

let taskList = []


function createTask(){

    for (task of taskList){
        let newTask = document.createElement('li');
        let textTask = document.createTextNode(task)
        newTask.appendChild(textTask);
        list.appendChild(newTask)

        taskList = []
    }
}

createTask()


function addTask(){
    let inputText = input.value
    taskList.push(inputText)
    input.value = ''

    createTask()
}

button.addEventListener('click', addTask)

list.addEventListener('click', function (event){
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'
})










