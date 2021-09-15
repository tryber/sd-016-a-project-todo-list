const adicionarTarefa = document.getElementById('criar-tarefa');

adicionarTarefa.addEventListener('click', function () {
  let node = document.createElement('li');
  let text = document.getElementById('texto-tarefa').value; 
  let textnode=document.createTextNode(text);
  document.getElementById('texto-tarefa').value = '';
  if (text === '') {
    alert('🤪 Tá doido? Uma tarefa precisa ser preenchida.');
  } else {
    node.appendChild(textnode);
    document.getElementById("lista-tarefas").appendChild(node);
  }
});
