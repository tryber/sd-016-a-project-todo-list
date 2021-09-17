


function createListItem(){
    const inputsElements = document.getElementById('texto-tarefa').value;
    const listOfItens = document.getElementById('lista-tarefas');
    const itensOfList = document.createElement('li');
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

//function itensInteraction(){}
