// CRIA TAREFA
function createTask() {
  const orderList = document.querySelector('#lista-tarefas');
  const getInput = document.querySelector('#texto-tarefa');
  const itemList = document.createElement('li');
  if (getInput.value === '') {
    alert ('Descreva a Tarefa')
    return
  } else{
    itemList.innerText = getInput.value;
    itemList.className = 'task';
    orderList.appendChild(itemList);
    getInput.value = '';
  }
}

const buttonCreate = document.querySelector('#criar-tarefa');
buttonCreate.addEventListener('click', createTask);

// MUDA COR QUANDO SELECIONADO
function removeSelection() {
  const selectItem = document.querySelectorAll('.selected');
  for (let index = 0; index < selectItem.length; index += 1) {
    selectItem[index].style.backgroundColor = 'rgb(248, 219, 140)';
    selectItem[index].classList.remove ('selected');
  }
}

function changeColorBg(event) {
  removeSelection();
  event.target.classList.add ('selected');
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

// ADD FUNÇÃO QUE MOVE AS TAREFAS
function moveUp (){
  const orderList = document.querySelector('#lista-tarefas');
  let taskContent = document.querySelector('.selected')
  let taskList = document.querySelectorAll('.task')

  if (taskContent === null) {
    return
  } else  if (taskContent === taskList[0] ) {
    return
  } else{
    let taskBefore = document.querySelector('.selected').previousElementSibling
    orderList.insertBefore(taskContent,taskBefore )
  }
}

function moveDown (){
  const orderList = document.querySelector('#lista-tarefas');
  let taskContent = document.querySelector('.selected')
  let taskList = document.querySelectorAll('.task')

  if (taskContent === null) {
    return
  } else  if (taskContent === taskList[taskList.length -1] ) {
    return
  } else {
    let taskBefore = document.querySelector('.selected').nextElementSibling

    orderList.insertBefore(taskContent,taskBefore.nextSibling )
  }

}

const upBnt = document.getElementById('mover-cima');
const upDwn = document.getElementById('mover-baixo');

upBnt.addEventListener('click', moveUp);
upDwn.addEventListener('click', moveDown);

// ADD FUNÇÃO AO BOTÃO DE SALVAR LISTA
let btnSave = document.querySelector('#salvar-tarefas')

function saveTasks() {
const lisTask = document.querySelector('#lista-tarefas');

  localStorage.setItem('taskList', JSON.stringify(lisTask.innerHTML));

}
window.onload = () => {
  const orderList = document.querySelector('#lista-tarefas');

  const restoreList = JSON.parse(localStorage.getItem('taskList'));
  if (restoreList !== null) {
    orderList.innerHTML = restoreList;
    // for (let index = 0; index < orderList.children.length; index += 1) {
    //   orderList.children[index].addEventListener('click', changeColorBg);
    //   orderList.children[index].addEventListener('dblclick', completTasks);
    // }
  }
};


btnSave.addEventListener('click', saveTasks )
