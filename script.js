const valueInput = document.querySelector('input');
const ordenedList = document.querySelector('#lista-tarefas');
const button = document.querySelector('#criar-tarefa');

function itemColor(event) {
  const paint = event;
  paint.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function addTAsk() {
  if (valueInput.value.length > 0) {
    // função já cria automaticamento os itens em ordem
    const newLi = document.createElement('li');
    newLi.innerText = valueInput.value;
    ordenedList.appendChild(newLi);
    valueInput.value = '';

    // evento de click nos itens da lista que muda a cor
    newLi.addEventListener('click', itemColor);
  }
} addTAsk();

function events() {
  // evento de click no button
  button.addEventListener('click', addTAsk);
} events();
