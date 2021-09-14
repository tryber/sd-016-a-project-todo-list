
let button = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');
let input = document.querySelector('#texto-tarefa');
let li = document.querySelectorAll('#lista-tarefas li')

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
    event.target.removeEventListener('click', event)
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'  
}, { once: true })

list.addEventListener('dblclick', function (event){
    event.target.classList.toggle('completed')
})



function addRemoverButton(){
    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remover'
    removeButton.id = 'apaga-tudo'
    let sec1 = document.querySelector('#sec1');

    sec1.appendChild(removeButton)
}

addRemoverButton()


function removeAllTasks(){
    let removeButton = document.querySelector('#apaga-tudo')
    removeButton.addEventListener('click', function(){
        list.innerHTML = ''
    })
}

removeAllTasks()








