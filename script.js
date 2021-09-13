function addTAsk() {
  const valueInput = document.querySelector('input');
  const ordenedList = document.querySelector('#lista-tarefas');
  if (valueInput.value.length > 0) {
    const newLi = document.createElement('li');
    newLi.innerText = valueInput.value;

    ordenedList.appendChild(newLi);
    valueInput.value = '';
  } else {
    alert('Adicione uma tarefa!');
  }
}
addTAsk();

function events() {
  const button = document.querySelector('#criar-tarefa');

  button.addEventListener('click', addTAsk);
} events();
