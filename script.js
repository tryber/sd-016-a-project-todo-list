const adicionarTarefa = document.getElementById('criar-tarefa');
const myList = document.querySelector('ol').childNodes;
// const lista = document.getElementsByTagName('li');

// console.log(myList, lista);

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


function selecionaItem(alvo) {
  for (let i = 0; i < myList.length; i += 1) {
    myList[i].classList.remove('select_list_item');
  }
  alvo.target.classList.add('select_list_item');
}

function adicionarEscutador() {
  for (let i = 0; i< myList.length; i += 1) {
    myList[i].addEventListener('click', selecionaItem);
  }
}

adicionarEscutador();
