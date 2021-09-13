
const divCont = document.getElementById('input-container')
function creatingInput() {
  const input = document.createElement('input')
  input.id = 'texto-tarefa'
  divCont.appendChild(input)
}
creatingInput();

const olCont = document.getElementById('ol-container');
function creatingOl() {
    const orderedList = document.createElement('ol');
    orderedList.id = 'lista-tarefas';
    olCont.appendChild(orderedList);
}

creatingOl();