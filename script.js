const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');
let items = [];
const clearButton = document.getElementById('apaga-tudo');
const clearTaskButton = document.getElementById('remover-finalizados');
const saveButton = document.getElementById('salvar-tarefas');

function saveTasks() {
  const itemArray = [];
  items.forEach((item) => {
    itemArray.push(item.innerText);
  });
  localStorage.setItem('tasks', JSON.stringify(itemArray));
}

window.onload = () => {
  // source: https://stackoverflow.com/questions/22991871/localstorage-save-array/22992002
  // usei para aprender a transformar em objeto JSON e depois recuperá-lo
  if (localStorage.getItem('tasks')) {
    const storage = JSON.parse(localStorage.getItem('tasks'));
    storage.forEach((task) => {
      const liTask = document.createElement('li');
      liTask.innerText = task;
      lista.appendChild(liTask);
      liTask.classList.add('items');
      items = document.querySelectorAll('.items');
    });
  }
};

function changeBackground(item) {
  items.forEach((element) => {
    const value = element;
    value.style.backgroundColor = '';
  });
  const task = item;
  task.target.style.backgroundColor = 'rgb(128,128,128)';
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

button.addEventListener('click', () => {
  const liTask = document.createElement('li');
  liTask.innerHTML = input.value;
  lista.appendChild(liTask);
  liTask.classList.add('items');
  input.value = '';
  items = document.querySelectorAll('.items');
  items.forEach((item) => {
    item.addEventListener('click', changeBackground);
    item.addEventListener('dblclick', lineThrough);
  });
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
