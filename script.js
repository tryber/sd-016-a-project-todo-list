let adicionarTarefa = document.getElementById('criar-tarefa');

adicionarTarefa.addEventListener('click', function () {
  var node = document.createElement("li");
  var text = document.getElementById("texto-tarefa").value; 
  var textnode=document.createTextNode(text);
  document.getElementById("texto-tarefa").value = '';
  if (text === ''){
    alert("🤪 Tá doido? Uma tarefa precisa ser preenchida.");
  } else {
    node.appendChild(textnode);
  document.getElementById("lista-tarefas").appendChild(node);
  }
});
