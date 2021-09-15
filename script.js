const list = document.getElementById('lista-tarefas');
const buttonAdd = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const finalizados = document.getElementsByClassName('completed');
const lis = document.getElementsByTagName('li');

//  cria itens de lista
function createItenList() {
  const listItem = document.createElement('li');
  listItem.innerText = input.value;
  list.appendChild(listItem);
  input.value = '';
}
buttonAdd.onclick = createItenList;

// seleciona itens de lista
function selectItem(event) {
  for (let i = 0; i < lis.length; i += 1) {
    lis[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
list.addEventListener('click', selectItem);

// marca como item de lista completado
function completeItem(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed')
  }
}
list.addEventListener('dblclick', completeItem);

//  deleta todos itens de lista
function deleteAllLi() {
  list.innerHTML = '';
}
document.getElementById('apaga-tudo').onclick = deleteAllLi;

//  remove itens finalizados
function deletaFinalizados() {
  let num = finalizados.length;
  for (let i = 0; i < num; i += 1) {
    finalizados[0].remove();
  }
}
document.getElementById('remover-finalizados').onclick = deletaFinalizados;

//  remove item selecionado
document.getElementById('remover-selecionado').addEventListener('click', function () {
  const selecionado = document.getElementsByClassName('selected')[0];
  selecionado.remove();
});
