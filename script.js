
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
        saveList()
    }
}


function addTask(){
    let inputText = input.value
    taskList.push(inputText)
    input.value = ''

    createTask()
    removeAllTasks()
}

button.addEventListener('click', addTask)


function addSelectMode(){
let lis = list.children
list.addEventListener('click', function (event){
   for (let index = 0; index <lis.length; index+=1){
       if (event.target != lis[index]){
           lis[index].classList.remove('selected')
       }else{
           event.target.classList.add('selected')
       }
   }
})
}


addSelectMode()



function addCompletedTasks(){
list.addEventListener('dblclick', function (event){
    event.target.classList.toggle('completed')
    removeFinished()
    saveList()
})
}
addCompletedTasks()



function addRemoverButton(){
    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remover'
    removeButton.id = 'apaga-tudo'
    let sec1 = document.querySelector('#sec1');

    sec1.appendChild(removeButton)
}

addRemoverButton()


function removeAllTasks(){
    let tasks = document.querySelectorAll('#lista-tarefas li')
    let removeButton = document.querySelector('#apaga-tudo')
    removeButton.addEventListener('click', function(){
        for (let index = 0; index < tasks.length; index+=1){
            tasks[index].remove()
        }
    })
}



function createButtonFinished(){
    let button = document.createElement('button')
    button.innerHTML = 'Remover Finalizados'
    button.id = 'remover-finalizados'
    let sec1 = document.querySelector('#sec1')

    sec1.appendChild(button)
}
createButtonFinished()


function removeFinished(){
    let list = document.querySelector('#lista-tarefas')
    let button = document.querySelector('#remover-finalizados');
    let finished = document.querySelectorAll('.completed')
    button.addEventListener('click', function(){
        for (let index = 0; index < finished.length; index+=1){
            finished[index].remove()
        }
        
    })
}


function saveListButton(){
    let sec1 = document.querySelector('#sec1');
    let button = document.createElement('button');
    button.id = 'salvar-tarefas'
    button.innerHTML = 'Salvar'
    sec1.appendChild(button)
}
saveListButton()

function saveList(){
    let button = document.querySelector('#salvar-tarefas');
    button.addEventListener('click', function(){
        localStorage.setItem('save-tasks', list.innerHTML)
    })
}

let saved = localStorage.getItem('save-tasks')
if (saved){
    list.innerHTML = saved
}






