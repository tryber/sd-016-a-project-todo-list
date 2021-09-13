const orderedList = document.querySelector('#lista-tarefas');
const text = document.querySelector('#texto-tarefa');
let adicionar = true;

function createList() {
  let valueOfText = text.value;
  let li = document.createElement('li');
  li.innerText = valueOfText;
  orderedList.appendChild(li);
  text.value = '';
}


