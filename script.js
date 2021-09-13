window.onload = function () {
  taskButton();
  clearButton();
  removeCrossedButton();
};

function taskButton () {
  let buttonT = document.querySelector('#criar-tarefa');
  buttonT.addEventListener('click', addTask);
};

function addTask () {
  let inputTask = document.querySelector('#texto-tarefa');
  let currentTask = inputTask.value;
  let itemList = document.querySelector('#lista-tarefas');
  let newItem = document.createElement('li');
  newItem.innerHTML = currentTask;
  newItem.className = 'lista';
  newItem.addEventListener('click', select);
  newItem.addEventListener('dblclick' , crossItem);
  itemList.appendChild(newItem);
  inputTask.value = '';
};

function select (event) {
  let currentItem = event.target
  let currentClasses = currentItem.classList

  for (let classCount = 0 ; classCount < currentClasses.length ; classCount += 1){
    currentItem.classList.remove('selected')    
  };
  unselect();
  currentItem.classList.add('selected');
};

function unselect (){
  let currentList = document.querySelectorAll('.selected')
  for (let index = 0 ; index < currentList.length ; index += 1){
    currentList[index].classList.remove('selected')
  };
};

function crossItem (event){
  let currentItem = event.target;
  let allClasses = currentItem.className;
  let checkClass = allClasses.includes('completed');

  if(checkClass === true){
    currentItem.classList.remove('completed');

  }else {
    currentItem.classList.add('completed');
  };
};

function clearButton () {
  let buttonC = document.querySelector('#apaga-tudo');
  buttonC.addEventListener('click', clearList);
};

function clearList () {
  let allList = document.querySelectorAll('.lista');
  for(let index = 0 ; index < allList.length ; index += 1){
    allList[index].remove();
  };
};

function removeCrossedButton () {
  let buttonR = document.querySelector('#remover-finalizados')
  buttonR.addEventListener('click', clearCrossed);
};

function clearCrossed () {
  let allCrossed = document.querySelectorAll('.crossed-line');
  for (let index = 0 ; index < allCrossed.length ; index += 1){
    allCrossed[index].remove();
  };
};