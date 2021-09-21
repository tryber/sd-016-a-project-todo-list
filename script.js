const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');
let items = [];
const clearButton = document.getElementById('apaga-tudo');
const clearTaskButton = document.getElementById('remover-finalizados');
const saveButton = document.getElementById('salvar-tarefas');
const upButton = document.getElementById('mover-cima');
const downButton = document.getElementById('mover-baixo');
const removeButton = document.getElementById('remover-selecionado');

function changeBackground(item) {
  items.forEach((element) => {
    const value = element;
    value.classList.remove('selected');
    value.style.backgroundColor = '';
  });
  const task = item;
  task.target.style.backgroundColor = 'rgb(128,128,128)';
  task.target.classList.add('selected');
}

function lineThrough(item) {
  const task = item;
  if (task.target.classList.contains('completed')) {
    task.target.style.textDecoration = 'none';
    task.target.classList.remove('completed');
  } else {
    task.target.classList.add('completed');
    task.target.style.textDecoration = 'line-through';
  }
}

function saveTasks() {
  const itemArray = [];
  // source: https://stackoverflow.com/questions/61758780/how-to-set-css-style-to-local-storage-for-dynamically-created-list-using-javascr
  // usei pra aprender como tratar o json pra receber parâmetros
  items.forEach((item) => {
    if (item.classList.contains('completed')) {
      itemArray.push({
        name: item.innerText,
        completed: true,
      });
    } else {
      itemArray.push({
        name: item.innerText,
        completed: false,
      });
    }
  });
  localStorage.setItem('tasks', JSON.stringify(itemArray));
  alert('Tarefas salvas!');
}

function getItems() {
  items = document.querySelectorAll('.items');
  items.forEach((item) => {
    item.addEventListener('click', changeBackground);
    item.addEventListener('dblclick', lineThrough);
  });
}

function moveUp() {
  items.forEach((item) => {
    const selected = item.classList.contains('selected');
    if (selected && item.previousSibling) {
      lista.insertBefore(item, item.previousSibling);
    } else if (selected) {
      alert('Não há mais movimentos possíveis nesta direção');
    }
  });
}

function moveDown() {
  items.forEach((item) => {
    const selected = item.classList.contains('selected');
    if (selected && item.nextSibling) {
      lista.insertBefore(item, item.nextSibling.nextSibling);
    } else if (selected) {
      alert('Não há mais movimentos possíveis nesta direção');
    }
  });
}

function removeSelected() {
  items.forEach((item) => {
    if (item.classList.contains('selected')) {
      item.remove();
    }
  });
}

// source: https://stackoverflow.com/questions/22991871/localstorage-save-array/22992002
// usei para aprender a transformar em objeto JSON e depois recuperá-lo
if (localStorage.getItem('tasks')) {
  const storage = JSON.parse(localStorage.getItem('tasks'));
  storage.forEach((task) => {
    if (task.completed) {
      const liTask = document.createElement('li');
      liTask.innerText = task.name;
      lista.appendChild(liTask);
      liTask.classList.add('items');
      liTask.classList.add('completed');
      liTask.style.textDecoration = 'line-through';
      getItems();
    } else {
      const liTask = document.createElement('li');
      liTask.innerText = task.name;
      lista.appendChild(liTask);
      liTask.classList.add('items');
      getItems();
    }
  });
}

button.addEventListener('click', () => {
  const liTask = document.createElement('li');
  liTask.innerHTML = input.value;
  lista.appendChild(liTask);
  liTask.classList.add('items');
  input.value = '';
  getItems();
});

clearButton.addEventListener('click', () => {
  items.forEach((item) => {
    item.remove();
  });
  localStorage.clear();
});

clearTaskButton.addEventListener('click', () => {
  items.forEach((item) => {
    if (item.classList.contains('completed')) {
      item.remove();
      saveTasks();
    }
  });
});

saveButton.addEventListener('click', saveTasks);

upButton.addEventListener('click', moveUp);

downButton.addEventListener('click', moveDown);

removeButton.addEventListener('click', removeSelected);
