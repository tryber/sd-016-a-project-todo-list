const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');
let items = [];

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
