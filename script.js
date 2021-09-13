// Requisito 5
const buttonInput = document.querySelector('#buttonInput');
const main = document.querySelector('main');
const buttonCreateTask = document.createElement('button');
buttonCreateTask.id = 'criar-tarefa';
buttonCreateTask.innerHTML = 'Create';
buttonInput.appendChild(buttonCreateTask);
buttonCreateTask.addEventListener('click',addTask);

function addTask() {
  let ol = document.querySelector('ol');
  let input = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  document.querySelector('#texto-tarefa').value = '';
}
