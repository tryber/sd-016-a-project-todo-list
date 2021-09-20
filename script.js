const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  const task = document.createElement('li');
  // https://www.w3schools.com/jsref/met_document_createtextnode.asp
  const texto = document.createTextNode(input);
  task.appendChild(texto);
  task.innerText = input.value;
  document.querySelector('#lista-tarefas').appendChild(task);
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('click', changeBg);
  input.value = '';
  list.addEventListener('dblclick', completed);
});

function changeBg(color) {
  const line = document.querySelector('#lista-tarefas').children;
  for (let index = 0; index < line.length; index += 1) {
    line[index].style.backgroundColor = 'white';
  }
  color.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
// https://www.w3schools.com/jsref/prop_element_classlist.asp
function completed(dblclick) {
  dblclick.target.classList.toggle('completed');
}
