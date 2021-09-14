function createTarefa() {
    // chamar texto dentro do input
    let inputValue = document.querySelector('#texto-tarefa')
    let tarefaInput = inputValue.value;
    // chama a ol pai vazia 
    let unorderedList = document.querySelector('#lista-tarefas');
    // cria as li que serão adicionadas ao ol pai
    let tarefaLi = document.createElement('li');
    // a cada li vai entrar o nome da tarefa do input
    tarefaLi.innerHTML = tarefaInput;
    unorderedList.appendChild(tarefaLi);
    // zerar o valor do input para a proxima tarefa
    inputValue.value = ''
    eventColorLi();
    eventCompletedTarefa() 
}

function eventCreateTarefa() {
    let createButton = document.getElementById('criar-tarefa');
    createButton.addEventListener('click', createTarefa)
}
eventCreateTarefa();

function colorLi(event) {
    let li = document.querySelector('#lista-tarefas').children
    // let li = unorderedList.children;
    for (let index = 0; index < li.length; index += 1) {
        li[index].style.backgroundColor = "rgb(255, 255, 255)"
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'
}
/// entulhar eventos no mesmo elemento para add e remove deu problema
function eventColorLi() {
    let li = document.querySelector('#lista-tarefas').children
    for (let index = 0; index < li.length; index += 1) {
        li[index].addEventListener('click', colorLi)
    }
}

function completedTarefa(event) {
    let li = document.querySelector('#lista-tarefas').children
    for (let index = 0; index < li.length; index += 1) {
        if (li[index].className === 'completed') {
            li[index].classList.remove('completed')    
        }
        else {
            event.target.classList.add('completed')
        }        
    }    
}

function eventCompletedTarefa() {
    let li = document.querySelector('#lista-tarefas').children;
    for (let index = 0; index < li.length; index += 1) {
        li[index].addEventListener('dblclick', completedTarefa)
    }
}

//////////////////////////

function removeAllTarefas() {
    let tarefaList = document.querySelector('#lista-tarefas').children;
    for (let index = 0; index < tarefaList.length; index += 1) {
        tarefaList[index].remove()
    }
}

function removeAllButton() {
    let removeButton = document.querySelector('#apaga-tudo');
    removeButton.addEventListener('click', removeAllTarefas)
}
removeAllButton()
