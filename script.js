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

button.addEventListener('click', () => {
  const liTask = document.createElement('li');
  liTask.innerHTML = input.value;
  lista.appendChild(liTask);
  liTask.classList.add('items');
  input.value = '';
  items = document.querySelectorAll('.items');
  items.forEach((item) => {
    item.addEventListener('click', changeBackground);
  });
});
