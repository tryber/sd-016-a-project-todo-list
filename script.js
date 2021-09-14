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
    eventCompletedTarefa();
    removeCompletedTarefa();
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
    let li = document.querySelector('#lista-tarefas').children;
    // parecido com o exercico do course do tirar e por a classe tech;
    for (let index = 0; index < li.length; index += 1) {
        // remove de tudo para garantir e dps adiciona
        event.target.classList.add('completed')
    }
}


function eventCompletedTarefa() {
    let li = document.querySelector('#lista-tarefas').children;
    for (let index = 0; index < li.length; index += 1) {
        li[index].addEventListener('dblclick', completedTarefa)
    }
}

function removeCompletedTarefa(event) {
    let li = document.querySelector('#lista-tarefas').children;
    event.target.classList.remove('completed')
}


function removeCompletedTarefa() {
    let li = document.querySelector('#lista-tarefas').children;
    for (let index = 0; index < li.length; index += 1) {
        li[index].addEventListener('dblclick', completedTarefa)
    }
}

function removeAllTarefas() {
    // fonte para o código abaixo foi encontrada e baseado na seguinte página, na resposta de Gibolt
    // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    let tarefaList = document.querySelector('#lista-tarefas')
    while (tarefaList.firstChild) {
        // remove filho enquanto houver algum firschild na ul
        // assim evita que tenha de apagar um por vez pq no loop pegava cada elemento por vez na posicao index;
        tarefaList.removeChild(tarefaList.firstChild);
    }
}

function removeAllButton() {
    let removeButton = document.querySelector('#apaga-tudo');
    removeButton.addEventListener('click', removeAllTarefas)
}
removeAllButton()
