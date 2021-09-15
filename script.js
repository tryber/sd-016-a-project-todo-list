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