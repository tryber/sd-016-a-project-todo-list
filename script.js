function addNewTask() {
  const button = document.querySelector('#criar-tarefa');
  const task = document.querySelector('#texto-tarefa');
  button.addEventListener('click', () => {
    const taskName = task.value;
    const list = document.querySelector('#lista-tarefas');
    const newTask = document.createElement('li');
    list.appendChild(newTask);
    newTask.innerHTML = taskName;
    document.querySelector('#texto-tarefa').value = '';
  });
}
addNewTask();
