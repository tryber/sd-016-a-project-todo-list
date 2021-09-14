let input = document.getElementById("texto-tarefa");
const createButton = document.getElementById("criar-tarefa");
const addList = document.getElementById("lista-tarefas");

function createTask() {
  const createListElement = document.createElement('li');
  createListElement.innerText = input.value;
  addList.appendChild(createListElement)
  createListElement.className="list-item";
  input.value = "";
  createListElement.addEventListener('click', function(){
    createListElement.style.backgroundColor="rgb(128,128,128)";
  })
}

createButton.addEventListener('click', createTask);
