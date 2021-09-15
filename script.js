function getItemFromStorage() {
  const colectedItem = localStorage.getItem('lista1');
  const parentElement = document.getElementById('lista-tarefas')
  const array = colectedItem.split(',');
  const savedItems = document.createElement('li')

  JSON.stringify

  for (let index = 0; index < array.length; index += 1) {
    savedItems.innerText = array[index];
    savedItems.className = 'list-item';
    // savedItems[index].className = 'list-item';
    parentElement.appendChild(savedItems);
  }
  createPin();
}
getItemFromStorage();

function completedTasks(doubleClick) {
  doubleClick.target.classList.toggle('completed');
}

function activeTask(click) {
  const listItem = document.querySelectorAll('.list-item');

  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].classList.remove('active');
    click.target.classList.add('active');
  }
}

function createListItem() {
  const listItem = document.createElement('li');
  const input = document.getElementById('texto-tarefa');
  const parentElement = document.getElementById('lista-tarefas');
  listItem.className = 'list-item';
  listItem.innerText = input.value;
  listItem.addEventListener('dblclick', completedTasks);
  listItem.addEventListener('click', activeTask);
  parentElement.appendChild(listItem);
  input.value = '';
}
const btnCreateTask = document.getElementById('criar-tarefa')
btnCreateTask.addEventListener('click', createListItem);

function eraseAll() {
  const listItems = document.querySelectorAll('.list-item');

  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].remove();
  }
}
const btnEraseAll = document.getElementById('apaga-tudo');
btnEraseAll.addEventListener('click', eraseAll);

function eraseCompleted() {
  const listCompletedItems = document.querySelectorAll('.completed');

  for (let index = 0; index < listCompletedItems.length; index += 1) {
    listCompletedItems[index].remove();
  }
}
document.getElementById('remover-finalizados').addEventListener('click', eraseCompleted);

function eraseActive() {
  document.querySelector('.active').remove()
}
document.getElementById('remover-selecionado').addEventListener('click', eraseActive)

function storage() {
  const lista = document.querySelectorAll('.list-item');
  let key = 'lista1'
  let array = [];
  for (let index = 0; index < lista.length; index += 1) {
    array.push(lista[index].innerHTML)
  }
  localStorage.setItem(key, array);
} 
document.querySelector('#salvar-tarefas').addEventListener('click', storage)

function createPin() {
  const pin = document.querySelector('#pin')
  pin.src = '/pin.png'
}
btnCreateTask.addEventListener('click', createPin);

function erasePin() {
  const pin = document.querySelector('#pin')
  pin.src = '';
}
btnEraseAll.addEventListener('click', erasePin);

function moveUp() {
  const activeItem = document.querySelector('.active');
  const elementBefore = document.querySelector('.active').previousElementSibling;
    
  activeItem.parentNode.insertBefore(elementBefore, activeItem);
  elementBefore.parentNode.insertBefore(activeItem, elementBefore);
}
document.querySelector('#mover-cima').addEventListener('click', moveUp);

function moveDown() {
  const activeItem = document.querySelector('.active');
  const elementNext = document.querySelector('.active').nextElementSibling;

  activeItem.parentNode.insertBefore(activeItem, elementNext);
  elementNext.parentNode.insertBefore(elementNext, activeItem);
}
document.querySelector('#mover-baixo').addEventListener('click', moveDown);