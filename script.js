function addTAsk() {
  const valueInput = document.querySelector('input');
  const ordenedList = document.querySelector('#lista-tarefas');
  if (valueInput.value.length > 0) {
    // função já cria automaticamento os itens em ordem
    const newLi = document.createElement('li');
    newLi.innerText = valueInput.value;
    ordenedList.appendChild(newLi);
    valueInput.value = '';
  }
} addTAsk();

function itemColor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function events() {
  const button = document.querySelector('#criar-tarefa');
  const itemList = document.querySelector('#lista-tarefas');
  // evento de click no button
  button.addEventListener('click', addTAsk);
  // evento de click nos itens da lista
  itemList.addEventListener('click', itemColor);
} events();
