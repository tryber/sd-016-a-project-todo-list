// Capturar o botão
const selectbutton = document.querySelector('#criar-tarefa');
// Capturar frase do input com id
const inputFrase = document.getElementById('texto-tarefa');
// Agora quando clicar no botão adicionar o que foi escrito na ol
selectbutton.addEventListener('click', function() {
  if (inputFrase.value === ''){
    return alert ("Nenhum intem encontrado");
  }
  const createli = document.createElement('li');
  createli.innerText = inputFrase.value;
  document.querySelector('#lista-tarefas').appendChild(createli);
  inputFrase.value = '';
})

const selectorOl = document.querySelector('#lista-tarefas');

function MudaBackground() {
  const selectorColor = document.querySelectorAll('li');
  for (let index = 0; index < selectorColor.length; index += 1){
    selectorColor[index].style.backgroundColor = "white";
  }
}

selectorOl.addEventListener('click', MudaBackground);