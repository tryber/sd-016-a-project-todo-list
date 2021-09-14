window.onload = function () {
  taskButton();
  clearButton();
  removeCrossedButton();
  eraseSelected();
  saveButton();
  recoverList();
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
  moveButtons();
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
  let allCrossed = document.querySelectorAll('.completed');
  for (let index = 0 ; index < allCrossed.length ; index += 1){
    allCrossed[index].remove();
  };
};

function eraseSelected () {
  let buttonA = document.querySelector('#remover-selecionado');
  buttonA.addEventListener('click', apagaSelecionado);
};

function apagaSelecionado () {
  let selected = document.querySelector('.selected');
  selected.remove();
};

function saveButton () {
  let buttonS = document.querySelector('#salvar-tarefas');
  buttonS.addEventListener('click', salvarTarefas);
}

function salvarTarefas () {
  let lista = document.querySelectorAll('.lista');
  let listaKeys = generateKeys();
  localStorage.clear();

  for (let index = 0 ; index < lista.length ; index += 1){
    localStorage.setItem(listaKeys[index], lista[index].innerHTML);
    localStorage.setItem('class'+index, lista[index].className);
  };
};

function generateKeys () {
  let listaKeys = [];
  let lista = document.querySelectorAll('.lista');
  for (let index = 0 ; index < lista.length ; index += 1){
    listaKeys.push('tarefa'+index);
  };
  return listaKeys;
};

function recoverList () {
  let lista = document.querySelector('#lista-tarefas');  
  for (let index = 0 ; index < localStorage.length/2 ; index += 1){
    let tarefaArmazenada = localStorage.getItem('tarefa'+index);
    let classeArmazenada = localStorage.getItem('class'+index);
    let novaTarefa = document.createElement('li');
    novaTarefa.innerHTML = tarefaArmazenada;
    novaTarefa.className = classeArmazenada;
    novaTarefa.addEventListener('click', select);
    novaTarefa.addEventListener('dblclick' , crossItem);
    lista.appendChild(novaTarefa);
  }

};

function moveButtons () {
  let selected = document.querySelector('.selected');
  if (selected != null){
    let buttonUp = document.querySelector('#mover-cima');
  buttonUp.addEventListener('click', moverCima);
  let buttonDown = document.querySelector('#mover-baixo');
  buttonDown.addEventListener('click', moverBaixo);
  };  
};

function moverCima () {
  let selecionado = document.querySelector('.selected');
  let textoSelecionado = selecionado.innerHTML;
  let lista = Array.from(document.querySelectorAll('.lista'));

  for (let index = 0 ; index < lista.length ; index += 1){
    let textoLista = lista[index].innerHTML;

    if(textoLista === textoSelecionado && index > 0){
      let currentSelected = textoLista;
      let upItem = lista[index-1].innerHTML;
      selecionado.innerHTML = upItem;
      lista[index-1].innerHTML = currentSelected;
      selecionado.classList.remove('selected');
      lista[index-1].classList.add('selected');
    }
  }
}

function moverBaixo(){
  let selecionado = document.querySelector('.selected');
  let textoSelecionado = selecionado.innerHTML;
  let lista = Array.from(document.querySelectorAll('.lista'));

  for (let index = 0 ; index < lista.length ; index += 1){
    let textoLista = lista[index].innerHTML;
    if(textoLista === textoSelecionado && index < lista.length -1){
      let newIndex = index +1;
      let currentSelected = textoLista;
      let downItem = lista[newIndex].innerHTML;
      selecionado.innerHTML = downItem;
      lista[newIndex].innerHTML = currentSelected;
      selecionado.classList.remove('selected');
      lista[newIndex].classList.add('selected');
      break;
    }    
  }
}
