let taskList = document.getElementById('lista-tarefas').innerHTML;
let createdItem;
let taskId;
let task;
// para criar as tarefas
function taskInsert() {
  const taskInput = document.getElementById('texto-tarefa').value;
  taskList += '<li>' + taskInput + '</li>';
  document.getElementById('lista-tarefas').innerHTML = taskList;
  document.getElementById('texto-tarefa').value = '';
}

// selecionar as tarefas
function selectItem() {

}

// remover tarefas
function removeTask() {

}
