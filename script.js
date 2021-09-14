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

// ADD FORAMATAÇÃO A TEREFAS CONCLUIDAS
function completTasks(event) {
  event.target.classList.toggle('completed');
}

task.addEventListener('dblclick', completTasks);


// ADD EVENTO A BOTÃO DE LIMPAR TODA LISTA DE TAREFAS

const clearButton = document.getElementById('apaga-tudo');

function clearAll (){
  let allTasks = document.querySelectorAll('.task')
  for (let index = 0; index < allTasks.length; index += 1) {
    task.removeChild(allTasks[index]);
  }
}

clearButton.addEventListener ('click', clearAll);

// ADD EVENTO A BOTÃO DE LIMPAR TAREFAS FINALIZADAS

const clearButtonFinish = document.getElementById('remover-finalizados');

function clearFinish (){
  let finishTasks = document.querySelectorAll('.completed')
  for (let index = 0; index < finishTasks.length; index += 1) {
    task.removeChild(finishTasks[index]);
  }
}

clearButtonFinish.addEventListener ('click', clearFinish);

// ADD EVENTO A BOTÃO DE LIMPAR TAREFAS SELECIONADAS

const clearButtonSelect = document.getElementById('remover-selecionado');

function selectedTask (){
  let selectTask = document.querySelectorAll('.selected')
  for (let index = 0; index < selectTask.length; index += 1) {
    task.removeChild(selectTask[index]);
  }
}

clearButtonSelect.addEventListener ('click', selectedTask);