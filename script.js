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

function colorLi(event) {
    let li = document.querySelector('#lista-tarefas').children
    // let li = unorderedList.children;
    for (let index = 0; index < li.length; index += 1) {
        event.target.style.backgroundColor = "rgb(128, 128, 128)"
    }
}

function eventColorLi() {
    let unorderedList = document.querySelector('#lista-tarefas');
    let li = unorderedList.children;
    for (let index = 0; index < li.length; index += 1) {
        li[index].addEventListener('click', colorLi)
    }
}