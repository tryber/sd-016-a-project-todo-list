// para inserir as tarefas

function taskInsert() {
  const taskInput = document.getElementById('texto-tarefa').value; // receber valor do input
  let taskList = document.getElementById('lista-tarefas').innerHTML; // inicializar variável para inserir tarefas
  taskList += ('<li>' + taskInput + '</li>'); // criando os itens de lista
  document.getElementById('lista-tarefas').innerHTML = taskList; // adicionando o item na lista ordenada
  document.getElementById('texto-tarefa').value = ''; // zerar valor do input
  let tasks = document.querySelectorAll("li"); // definir id 'task' para as tarefas criadas
  for (let index = 0; index < tasks.length; index++) {
  tasks[index].id = 'task';
}
}

// para selecionar as tarefas criadas


// para remover as tarefas da lista


