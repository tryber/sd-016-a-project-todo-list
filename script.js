
const divCont = document.getElementById('input-container')
function creatingInput() {
  const input = document.createElement('input')
  input.id = 'texto-tarefa'
  divCont.appendChild(input)
}
creatingInput();