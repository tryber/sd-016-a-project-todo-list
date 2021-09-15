const myList = document.getElementById('lista-tarefas');
const listItem = document.getElementsByTagName('li');
const adicionarTarefa = document.getElementById('criar-tarefa');

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