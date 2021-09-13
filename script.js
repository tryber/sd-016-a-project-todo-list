function changeBackgroudColor() {
  const liContent = document.querySelectorAll('.content');
  for (let index = 0; index < liContent.length; index += 1) {
    liContent[index].addEventListener('click', () => {
      const selected = document.querySelector('#selected');
      if (selected === null) {
        liContent[index].id = 'selected';
      } else {
        selected.id = '';
        liContent[index].id = 'selected';
      }
    });
  }
}

function CompletedTasks() {
  const liContent = document.querySelectorAll('.content');
  for (let index = 0; index < liContent.length; index += 1) {
    liContent[index].addEventListener('dblclick', () => {
      if (liContent[index].className !== 'completed') {
        liContent[index].className = 'completed';
      } else if (liContent[index].className === 'completed') {
        liContent[index].className = '';
      }
    });
  }
}

const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  let createLi = document.createElement('li');
  createLi.className = 'content';
  createLi.innerText = input.value;
  input.value = '';
  document.querySelector('#lista-tarefas').appendChild(createLi);
  createLi = '';
  changeBackgroudColor();
  CompletedTasks();
});

const clearTasks = document.querySelector('#apaga-tudo');
clearTasks.addEventListener('click', () => {
  document.querySelector('ol').innerHTML = '';
});

const removeDone = document.querySelector('#remover-finalizados');
removeDone.addEventListener('click', () => {
  const liContent = document.querySelectorAll('.completed');
  for (let index = 0; index < liContent.length; index += 1) {
    if (liContent[index].className === 'completed') {
      liContent[index].remove();
    }
  }
});
