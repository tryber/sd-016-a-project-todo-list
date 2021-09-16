const myList = document.getElementById('lista-tarefas');
const listItem = document.getElementsByTagName('li');
const adicionarTarefa = document.getElementById('criar-tarefa');
const clearAll = document.getElementById('apaga-tudo');
const clearDoneList = document.getElementById('remover-finalizados');

adicionarTarefa.addEventListener('click', function () {
  const node = document.createElement('li');
  const text = document.getElementById('texto-tarefa').value;
  const textnode = document.createTextNode(text);

  document.getElementById('texto-tarefa').value = '';
  if (text === '') {
    alert('🤪 Tá doido? Uma tarefa precisa ser preenchida.');
  } else {
    node.appendChild(textnode);
    document.getElementById('lista-tarefas').appendChild(node);
  }
});

function selectItem(event) {
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].classList.remove('select_list_item');
  }
  event.target.classList.add('select_list_item');
}

myList.addEventListener('click', selectItem);

function done(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

myList.addEventListener('dblclick', done);

function apagaTudo() {
 if( document.querySelectorAll('li').length === 0 ){
   alert('Para apagar a lista é preciso ter uma tarefa adicionada');
 } else {
   myList.innerHTML = '';
 }   
}
clearAll.addEventListener('click', apagaTudo);  


function apagaFeitos() {
  const clearCompleted = document.getElementsByClassName('completed');

  if( document.querySelectorAll('li').length === 0 ){
    alert('A Lista esta vazia e não há Itens definidos como Feitos.');
  }

  if ( clearCompleted.length === 0) {
    alert('Não há Itens definidos como Feitos.');
  }
  
  for(var i = clearCompleted.length - 1; i >= 0; i--) {
    clearCompleted[i].remove()
  }
  
}
clearDoneList.addEventListener('click', apagaFeitos);
