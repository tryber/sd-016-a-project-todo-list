// para inserir as tarefas

function taskInsert() {
  const taskInput = document.getElementById('texto-tarefa').value; // receber valor do input
  let taskList = document.getElementById('lista-tarefas').innerHTML; // inicializar variável para inserir tarefas
  taskList += ('<li>' + taskInput + '</li>'); // criando os itens de lista
  document.getElementById('lista-tarefas').innerHTML = taskList; // adicionando o item na lista ordenada
  document.getElementById('texto-tarefa').value = ''; // zerar valor do input
  let tasks = document.querySelectorAll("li"); // definir id 'task' para as tarefas criadas
  for (let index = 0; index < tasks.length; index++) {
  tasks[index].classList.add('task');
}
}

// para sublinhar as tarefas finalizadas - referencia: https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
document.addEventListener('dblclick', function (event) {
  if ( event.target.classList.contains('completed') ) {
      event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

// para selecionar as tarefas criadas



// para remover as tarefas finalizadas da lista


// para remover todas as tarefas da lista - referencia: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
function removeTasks() {
  let taskList = document.getElementById("lista-tarefas");
while (taskList.firstChild) {
  taskList.removeChild(taskList.firstChild);
}
}


