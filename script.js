// Chamar o input, o botão e a ol.
const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

// Código elaborado com a ajuda da Laura Fumagalli e Camila Rannieli, turma 16 - tribo A.
function addItem() {
  // Criar a variável com o elemento li.
  const newItemList = document.createElement('li');
  newItemList.innerText = input.value;
  // Adicionar a tag li como filho da tag ol e depois de adicionar o texto o input precisa ficar vazio.
  taskList.appendChild(newItemList);
  input.value = '';
  // Adicionar o evento click no botão para poder adicionar o texto que for escrito no input.
}
button.addEventListener('click', addItem);

// Código elaborado com a ajuda da Laura Fumagalli, Turma 16 - Tribo A.
function paintList(event) {
  //  Todos os elementos da lista (li) precisam ter PRIMEIRAMENTE um fundo branco.
  const listItem = document.getElementsByTagName('li');
  console.log(listItem);
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].style.backgroundColor = 'white';
  }
  // Ao clicar em um elemento da lista o fundo dele ficará cinza rgb (128, 128, 128).
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
// Adicionar o evento click nos itens da lista.
taskList.addEventListener('click', paintList);
