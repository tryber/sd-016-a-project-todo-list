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

function eventColorLi() {
    let li = document.querySelector('#lista-tarefas').children
    for (let index = 0; index < li.length; index += 1) {
        li[index].addEventListener('click', colorLi)
    }
}

function completedTarefa(event) {
// let li = document.querySelector('#lista-tarefas').children;
// ou passa só um ou passa todos ou passa um e nao o utro -- remover for para teste
// for (let index = 0; index < li.length; index += 1) {
    // usando o contains seguindo o indicado no seguinte link
    // https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed')        
    } else {
      event.target.classList.add('completed')
    }
}

function eventCompletedTarefa() {
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

function removerCompleted() {
    //chama as li filhas do ol
    let completedTarefas = document.getElementsByClassName('completed')
    for (let index = 0; index < completedTarefas.length; index += 1) {
        // chama o pai ol para deletar as filhas li completed
        completedTarefas[index].parentElement.removeChild(completedTarefas[index])
    }
}

function removeCompletedButton() {
    let removeCompletedButton = document.querySelector('#remover-finalizados');
    removeCompletedButton.addEventListener('click', removerCompleted)
}
removeCompletedButton()
