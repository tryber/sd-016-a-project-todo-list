function taskInsert() {
  const taskInput = document.getElementById('texto-tarefa').value;
  let taskList = document.getElementById('lista-tarefas').innerHTML;
  taskList += "<li>" + taskInput + "</li>"
  document.getElementById('lista-tarefas').innerHTML = taskList;
  document.getElementById('texto-tarefa').value = "";
}
