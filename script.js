// Chamar o input, os botões e a ol.
const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearItems = document.getElementById('apaga-tudo');
const clearTasks = document.getElementById('remover-finalizados');

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
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].style.backgroundColor = 'white';
  }
  // Ao clicar em um elemento da lista o fundo dele ficará cinza rgb (128, 128, 128).
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
// Adicionar o evento click nos itens da lista.
taskList.addEventListener('click', paintList);

// Código elaborado com a ajuda da Laura Fumagalli, Turma 16 - Tribo A.
function doubleCLick(event) {
  // Adicionar a classe 'completed' nos elementos da li.
  event.target.classList.toggle('completed');
  // A função toggle nesse caso vai adicionar a classe 'completed' quando o elemento não tiver e vai retirar a classe 'completed' quando o elemento tiver. Obs: só funciona com o classList. Fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
}
// Adicionar o evento de double click nos itens da lista.
taskList.addEventListener('dblclick', doubleCLick);

// Criar um botão que ao clicar nele apaga todas as tarefas criadas.
function clearList() {
  //Adicionar o evento de click no botão que apaga tudo.
  clearItems.addEventListener('click', function () {
    // Chamar os elementos da lista, que são elementos li.
    const clearListItems = document.querySelectorAll('li');
    // Quando o usuário clicar no botão apagar tudo ele vai percorrer todos os itens da lista (li) para poder apagar um por um.
    for (let i = 0; i < clearListItems.length; i += 1) {
      const eraser = clearListItems[i];
      // Remover os elementos da lista que são filhos da ol.
      taskList.removeChild(eraser);
    }
  });
}
clearList();

// Criar um botão que ao clicar nele remove as tarefas FINALIZADAS.
function clearFinishTasks() {
  // Adicionar o evento click no botão que apaga as tarefas finalizadas.
  clearTasks.addEventListener('click', function () {
    // Chamar os elementos da lista (li), que possuem a classe completed.
    const clearTasksItems = document.querySelectorAll('.completed');
    // Quando o usuário clicar no botão apagar tarefas finalizadas ele vai percorrer todos os itens da lista (li) para poder apagar uma por uma das tarefas completed.
    for (let i = 0; i < clearTasksItems.length; i += 1) {
      const eraserTasks = clearTasksItems[i];
      // Remover os elementos com a classe completed que são filhos da ol.
      taskList.removeChild(eraserTasks);
    }
  });
}
clearFinishTasks();
