const todoTextInput = document.querySelector('#texto-tarefa');
const todoSubmitButton = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');

let selected = null;

todoSubmitButton.addEventListener('click', () => {
  const item = document.createElement('li');
  item.innerText = todoTextInput.value;
  item.addEventListener('click', () => {
    if (selected) {
      selected.style.backgroundColor = 'rgb(0, 0, 0)';
    }
    item.style.backgroundColor = 'rgb(128, 128, 128)';
    selected = item;
  });
  item.addEventListener('dblclick', () => {
    item.classList.toggle('completed');
  });
  todoList.appendChild(item);
  todoTextInput.value = '';
});
