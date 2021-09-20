//desafio 5 elaborado com ajuda do aluno Mateus Turola
function createTask() {
  const orderList = document.querySelector('#lista-tarefas');
  const getInput = document.querySelector('#texto-tarefa');
  const itemList = document.createElement('li');
  itemList.innerText = getInput.value;
  itemList.className = 'task';
  orderList.appendChild(itemList);
  getInput.value = '';
}

const buttonCreate = document.querySelector('#criar-tarefa');
buttonCreate.addEventListener('click', createTask);

function removeGrey() {
  const searchSelect = document.querySelectorAll('.select');
  for(let index = 0; index < searchSelect.length; index += 1) {
    searchSelect[index].classList.remove('select');
    searchSelect[index].style.backgroundColor = 'white'
  }

}

function turnGrey(event) {
  removeGrey()
  event.target.style.backgroundColor = "rgb(128, 128, 128)"
  event.target.classList.add('select');
}

const callList = document.getElementById('lista-tarefas');
callList.addEventListener('click', turnGrey);

function doubleClick(event) {
  event.target.classList.toggle('completed');
}

callList.addEventListener('dblclick', doubleClick)


function removeList() {
  const removeTasks = document.querySelectorAll('.task')
  for(let index = 0; index < removeTasks.length; index += 1) {
    callList.removeChild(removeTasks[index])
  }
}

const removeButton = document.getElementById('apaga-tudo')
removeButton.addEventListener('click', removeList)

