function addsTaskItem() {
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  taskItem.innerText = document.querySelector('#texto-tarefa').value;
  document.querySelector('#lista-tarefa').appendChild(taskItem);
  document.querySelector('#texto-tarefa').value = '';
}

document.querySelector('#criar-tarefa').addEventListener('click', addsTaskItem);

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('task-item')) {
    const color = 128;
    const white = 255;
    const line = event.target;
    const list = document.querySelectorAll('.task-item');
    for (let i = 0; i < list.length; i += 1) {
      list[i].style.setProperty('--main-background', `rgb(${white}, ${white}, ${white})`);
    }
    line.style.setProperty('--main-background', `rgb(${color}, ${color}, ${color})`);
  }
});

document.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('task-item')) {
    const lineThrough = event.target;
    lineThrough.className = 'completed';
    lineThrough.style.textDecoration = 'line-through';
  } else if (event.target.classList.contains('completed')) {
    const noDeco = event.target;
    noDeco.className = 'task-item';
    noDeco.style.textDecoration = 'none';
  }
});
