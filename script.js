const getButtonAdd = document.getElementById('criar-tarefa');
const getOrderedList = document.getElementById('lista-tarefas');
const getInput = document.getElementById('texto-tarefa');

// Desafio 5
getButtonAdd.addEventListener('click', function(){ 
  let createList = document.createElement('li');
  getOrderedList.appendChild(createList);
  createList.className = 'task'
  createList.innerHTML = getInput.value;
  getInput.value = '';
})

// Desafio 10
const getButtonClearAll = document.getElementById('apaga-tudo');
buttonClearAll.addEventListener('click', function(){
//seu código aqui
})

// Desafio 11
const getButtonClearSelected = document.getElementById('remover-finalizados');
buttonClearSelected.addEventListener('click', function(){
//seu código aqui
})