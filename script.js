
const parentElement = document.querySelector('#lista-tarefas')
if (localStorage.getItem('list')) {
  const storage = JSON.parse(localStorage.getItem('list'))
  storage.forEach(task => {
    if (task.completed) {
      const newList = document.createElement('li');
      newList.innerText = task.text;
      parentElement.appendChild(newList);
      newList.classList.add('list-item');
      newList.classList.add('completed');
      newList.addEventListener('dblclick', completedTasks);
      newList.addEventListener('click', activeTask);
    } else {
      const newList = document.createElement('li');
      newList.innerText = task.text;
      parentElement.appendChild(newList);
      newList.classList.add('list-item');
      newList.addEventListener('click', activeTask);
      newList.addEventListener('dblclick', completedTasks);
    }
  });
}

function pinWithStorage() {
  const temLista = document.querySelectorAll('.list-item');
  if(temLista.length > 0) {
    createPin();
  }
}
pinWithStorage();

function completedTasks(doubleClick) {
  doubleClick.target.classList.toggle('completed');
}

function activeTask(click) {
  const listItem = document.querySelectorAll('.list-item');
  console.log(listItem.length)

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

  const temLista = document.querySelectorAll('.list-item');
  if (temLista.length < 1) {
    erasePin();
  }
}
document.getElementById('remover-finalizados').addEventListener('click', eraseCompleted);

function eraseActive() {
  document.querySelector('.active').remove()

  const temLista = document.querySelectorAll('.list-item');
  if (temLista.length < 1) {
    erasePin();
  }
}
document.getElementById('remover-selecionado').addEventListener('click', eraseActive)

function createPin() {
  const pin = document.querySelector('#pin');
  pin.src = '/pin.png';
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

function storage() {
  const listItems = document.querySelectorAll('.list-item');
  const itemArray = [];

  for (let index = 0; index < listItems.length; index += 1) {
    if(listItems[index].classList.contains('completed')) {
    itemArray.push({
      text: listItems[index].innerText,
      completed: true
      }) 
    } else {
    itemArray.push({
      text: listItems[index].innerText,
      completed: false
      })
    }
  localStorage.setItem('list', JSON.stringify(itemArray))
  }
}
document.querySelector('#salvar-tarefas').addEventListener('click', storage);
