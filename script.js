let input = document.getElementById("texto-tarefa");
const createButton = document.getElementById("criar-tarefa");
const addList = document.getElementById("lista-tarefas");

function createTask() {
    const createListElement = document.createElement('li');
    createListElement.innerText = input.value;
    addList.appendChild(createListElement)
    input.value = "";
}

createButton.addEventListener('click', createTask);
