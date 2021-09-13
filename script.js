const buttonCreatTarefa = document.querySelector('#criar-tarefa');
const listOrder = document.querySelector('#lista-tarefas')

buttonCreatTarefa.addEventListener('click', inputButton);

function inputButton () {
    const inputButton = document.querySelector('#texto-tarefa');
    const creatList = document.createElement('li');
    const addText = inputButton.value;
    creatList.innerText = addText
    listOrder.appendChild(creatList);
    inputButton.value = "";
}