function createListItem(){
    const inputsElements = document.getElementById('texto-tarefa').value;
    const listOfItens = document.getElementById('lista-tarefas');
    const itensOfList = document.createElement('li');
    itensOfList.className ='taskItens';
    itensOfList.innerText = inputsElements;

    listOfItens.appendChild(itensOfList);

    clearInputText();
}

function clearInputText(){
    const addTask = document.getElementById('texto-tarefa');
    addTask.value = '';

}
const buttonInput = document.getElementById('criar-tarefa');
buttonInput.addEventListener('click', createListItem);

const buttoninputClear = document.getElementById('apaga-tudo');
buttoninputClear.addEventListener('click', clear);

function selectItem(origin){
    const selector = document.getElementsByClassName('selected');
    const adictSelect=origin.target;
    for(index=0;index<selector.length;index){
    selector[index].classList.remove('selected');
    
    }
    adictSelect.classList.add('selected');
}
function selectorItem(){
    const listOfItens = document.getElementById('lista-tarefas');
    listOfItens.addEventListener('click', selectItem);
}
function clear(){
    const listOfTasks = document.getElementById('lista-tarefas');
    listOfTasks.innerHTML = '';
}
selectorItem();