function addNewTask() {
  const btnAddNewTask = document.querySelector('#criar-tarefa');
  const inputTask = document.querySelector('#texto-tarefa');
  const lisTask = document.querySelector('#lista-tarefas');

  btnAddNewTask.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.innerHTML = inputTask.value;
    lisTask.appendChild(listItem);
    inputTask.value = '';
  });
}

addNewTask();
