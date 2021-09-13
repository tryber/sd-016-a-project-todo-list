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
}

function eventCreateTarefa() {
    let createButton = document.getElementById('criar-tarefa');
    createButton.addEventListener('click', createTarefa)
}
eventCreateTarefa();

/////////////////////////////

function colorLi(event) {
    let li = document.querySelector('#lista-tarefas').children
    // let li = unorderedList.children;
    for (let index = 0; index < li.length; index += 1) {
        li[index].style.backgroundColor = "rgb(255, 255, 255)"
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'
}

function eventColorLi() {
    let li = document.querySelector('#lista-tarefas').children
    for (let index = 0; index < li.length; index += 1) {
        li[index].addEventListener('click', colorLi)
    }
}

///////////////////////////

function completedTarefa(event) {
    // as tarefas sao as li filhas de ul
    let li = document.querySelector('#lista-tarefas').children;
    for (let index = 0; index < li.length; index += 1) {
        event.target.classList.add('completed')
    }
}

function removeCompletedTarefa() {
    let li = document.querySelector('#lista-tarefas').children;
    for (let index = 0; index < li.length; index += 1) {
        if (li[index].className === 'completed') {
        li[index].classList.remove('completed')    
        }
    }
    eventCompletedTarefa() 
}

function eventCompletedTarefa() {
    let li = document.querySelector('#lista-tarefas').children;
    for (let index = 0; index < li.length; index += 1) {
        li[index].addEventListener('dblclick', completedTarefa)
    }
}
eventCompletedTarefa() 

function eventRemoveCompletedTarefa() {
    let li = document.querySelector('#lista-tarefas').children;
    for (let index = 0; index < li.length; index += 1) {
        li[index].addEventListener('dblclick', removeCompletedTarefa)
    }
}
eventRemoveCompletedTarefa();

// teste que dá classe selected para apenas 1 li
// cria todos os Li
// todos sem classe e com background color igual
// cria função que add uma determinada classe ao Li[i] selecionado
// ao li selecionado aplicar a mudança de color