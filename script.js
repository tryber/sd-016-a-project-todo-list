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
    for (let index = 0; index < li.length; index += 1) {
        li[index].style.backgroundColor = "rgb(255, 255, 255)"
        // ou deixar vazio para não confudir demais
        li[index].id = 'not-selected'
    }
    // add Id para confirmar a seleção e para dps fazer o lance do botão
    // usar o mesmo conceito inicialmente do backgroundColor -> add para um e remove/add outro a outro
    event.target.id = 'selected'
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
        // talvez add um " " ao class para nao ficar vazio    
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
    //chama as li filhas do ol -- partindo do principio que havera tarefas completed
    let tarefaList = document.querySelectorAll('.completed')
    for (let index = 0; index < tarefaList.length; index += 1) {
    //chama o pai ol para deletar as filhas li completed na posicao index
        tarefaList[index].parentElement.removeChild(tarefaList[index])
    }
}

function removeCompletedButton() {
    let removeCompletedButton = document.querySelector('#remover-finalizados');
    removeCompletedButton.addEventListener('click', removerCompleted)
}
removeCompletedButton()

function moveToPrevious () {
    // quem move é cinza -> o selected
    // o uso do outerHTML foi baseado no código do Humberto Castro, e confirmado no link abaixo
    // o outerHTML pegar o fragmento html e pode substituir o html
    // https://w3schools.unlockfuture.com/jsref/prop_html_outerhtml.html
    let selectedElement = document.querySelector("#selected").outerHTML;
    let notSelectedElement = document.querySelector('#not-selected').outerHTML
    // as infos contidas em selectedElement tem de migrar para os not-selected
    // comparar se as infos de selectedElemente existem ou nao no not-selected -- são diferentes
    if (selectedElement !== notSelectedElement) {
        // então mandar os dados para o proximo e o previo
        // pega o elemento previo -- seta para cima -- que irá receber as infos do irmao previamente selecionado
        document.querySelector('#selected').previousSibling.outerHTML = selectedElement
        // pega o elemento inicialmente selecionado, que irá receber o not selected pq a seta subiu quando selected vai para o irmão de cima
        document.querySelector('#selected').nextSibling.outerHTML = notSelectedElement
    }
}

function eventMoveToPrevious() {
    let moveUpButton = document.querySelector('#mover-cima')
    moveUpButton.addEventListener('click', moveToPrevious)
}
eventMoveToPrevious()

// aparentemente o problema agora ta focado no primeiro e ultimo item da lista, e algo relacionado a mudança dos nomes internos (?)

function moveToNext() {
    // Essa funcao tambem foi criada baseada no apresentado pelo Humberto
    // mesmo esquema do moveToPrevious;
    let selectedElement = document.querySelector("#selected").outerHTML;
    let notSelectedElement = document.querySelector('#not-selected').outerHTML
    if (selectedElement !== notSelectedElement) {
        // a lógica muda pq está descendo
        // como esta descendo, o next precisa receber o outerHTML do selected
        document.querySelector('#selected').nextSibling.outerHTML = selectedElement
        // como o selected esta descendo, o elemento previamente selecionado precisa ficar com o not-selected
        // remover o previous pq na lista o selected ficou mantido e dois ficam coloridos; com outerHTML vai logo substituir o selecteed
        // document.querySelector('#selected').previousSibling.outerHTML = notSelectedElement --> ruminar mais isso aqui para entender melhor
        document.querySelector('#selected').outerHTML = notSelectedElement
    }

}

function eventMoveToNext() {
    let moveDownButton = document.querySelector('#mover-baixo')
    moveDownButton.addEventListener('click', moveToNext)
}
eventMoveToNext();

function removeSelected() {
    // só há um selected por vez
    let selectedElement = document.querySelector("#selected")
    // conceito parecido com o removercompleted
    selectedElement.parentElement.removeChild(selectedElement)
}

function eventRemoveSelected() {
    let removeSelectedButton = document.querySelector('#remover-selecionado')
    removeSelectedButton.addEventListener('click', removeSelected)
}
eventRemoveSelected();

// ainda está faltando a função para salvar a lista, mas ela foi comentada nas monitorias -- check anotações -- a aula ainda esta atrasada --
