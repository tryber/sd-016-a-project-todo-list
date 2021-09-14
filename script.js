// CRIA TAREFA
function createTask() {
  const orderList = document.querySelector('#lista-tarefas');
  const getInput = document.querySelector('#texto-tarefa');

  const itemList = document.createElement('li');
  itemList.innerText = getInput.value;
  itemList.className = 'task';
  orderList.append(itemList);
  getInput.value = '';
}

const buttonCreate = document.querySelector('#criar-tarefa');
buttonCreate.addEventListener('click', createTask);

// MUDA COR QUANDO SELECIONADO
const selectItem = document.getElementsByClassName('selected');
function removeSelection() {
  for (let index = 0; index < selectItem.length; index += 1) {
    selectItem[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function changeColorBg(event) {
  removeSelection();
  event.target.classList.add('selected');
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

const task = document.getElementById('lista-tarefas');

task.addEventListener('click', changeColorBg);


function completTasks(event){
  event.target.classList.toggle('completed');
}


task.addEventListener('dblclick',completTasks)