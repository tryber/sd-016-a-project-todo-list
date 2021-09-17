let input = document.getElementById("texto-tarefa");
const createButton = document.getElementById("criar-tarefa");
const addList = document.getElementById("lista-tarefas");

function createTask() {
  const createListElement = document.createElement('li');
  createListElement.innerText = input.value;
  addList.appendChild(createListElement)
  createListElement.className="list-item";
  input.value = "";
}

function changeBackgroundColor(e) {
const listItem = addList.children;
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].className = 'default-background';
    e.target.className = 'selected-item-background';
  }
}

addList.addEventListener('click', changeBackgroundColor);
createButton.addEventListener('click', createTask);