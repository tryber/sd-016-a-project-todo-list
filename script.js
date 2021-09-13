const getButtonAdd = document.getElementById('criar-tarefa');
const getList = document.getElementById('lista-tarefas');
const getInput = document.getElementById('texto-tarefa');

// Desafio 5
getButtonAdd.addEventListener('click', function(){ 
  let createTask = document.createElement('li');
  getList.appendChild(createTask);
  createTask.className = 'task'
  createTask.innerHTML = getInput.value;
  getInput.value = '';
})

// Desafio 7
function paintMyList() {
  const getTasks = document.getElementsByClassName('tasks');
  getTasks.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })
}
paintMyList();

// Desafio 10
const getButtonClearAll = document.getElementById('apaga-tudo');
getButtonClearAll.addEventListener('click', function(){
      getList.removeChild(getList.childNodes[0]);
})

// Desafio 11
const getButtonClearSelected = document.getElementById('remover-finalizados');
buttonClearSelected.addEventListener('click', function(){
//seu código aqui
})