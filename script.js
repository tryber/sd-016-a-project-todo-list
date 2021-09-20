function selectItemLista(event) { /* requisito 7 e 8*/
  /* requisito 7 */
  let selectItemList = event.target
  let itemSelecionado = document.querySelector('.Selecionado');
  if (itemSelecionado !== null) {
    itemSelecionado.classList.remove('Selecionado');
  } 
  selectItemList.classList.add('Selecionado');
  
}

function completedTarefa(event) {  /* requisito 9*/
let completedItem = event.target
if (completedItem.className.match('completed') === null) {
completedItem.classList.add('completed');
} else {
  completedItem.classList.remove('completed');
}
}

function addItemList() {
  let imputValue = document.querySelector('#texto-tarefa').value;
  let itemDaLista = document.createElement('li');
  itemDaLista.innerText = imputValue;
  let lista = document.querySelector('#lista-tarefas');
  lista.appendChild(itemDaLista);
  document.querySelector('#texto-tarefa').value = "";
  itemDaLista.addEventListener('click', selectItemLista); /* requisito 7 e 8*/

  itemDaLista.addEventListener('dblclick', completedTarefa);/* requisito 9*/
}

let addButton = document.querySelector("#criar-tarefa"); // Seleciona o Botão

addButton.addEventListener('click', addItemList);
