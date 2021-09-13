const changeBackgroundColor = (event) => {
  const elementStyle = event.target.style;
  elementStyle.backgroundColor = 'rgb(128, 128, 128)';
  elementStyle.borderRadius = '4px';
  elementStyle.color = 'rgb(235 , 94 , 40)';
  elementStyle.fontWeight = 'bolder';
  elementStyle.fontSize = '20px';
};

function addTasks() {
  const inputText = document.querySelector('#texto-tarefa');
  const getOrderedList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  listItem.innerHTML = inputText.value;
  listItem.addEventListener('click', changeBackgroundColor);

  getOrderedList.appendChild(listItem);
  inputText.value = '';
}

function createEventListeners() {
  const buttonCreateTasks = document.querySelector('#criar-tarefa');
  buttonCreateTasks.addEventListener('click', addTasks);
}
createEventListeners();
