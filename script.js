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

function completedTasks() {
  const liContent = document.querySelectorAll('.content');
  for (let index = 0; index < liContent.length; index += 1) {
    liContent[index].ondblclick = () => {
      liContent[index].classList.toggle('completed');
    };
  }
}

const moveUp = document.querySelector('#mover-cima');
moveUp.addEventListener('click', () => {
  const selected = document.querySelectorAll('li');
  for (let index = 0; index < selected.length; index += 1) {
    if (selected[index].id === 'selected' && index > 0) {
      const aboveLi = selected[index - 1].outerHTML;
      selected[index - 1].outerHTML = selected[index].outerHTML;
      selected[index].outerHTML = aboveLi;
    }
  }
  changeBackgroudColor();
  completedTasks();
});

const moveDown = document.querySelector('#mover-baixo');
moveDown.addEventListener('click', () => {
  const selected = document.querySelectorAll('li');
  for (let index = 0; index < selected.length; index += 1) {
    if (selected[index].id === 'selected' && index < selected.length - 1) {
      const aboveLi = selected[index + 1].outerHTML;
      selected[index + 1].outerHTML = selected[index].outerHTML;
      selected[index].outerHTML = aboveLi;
      break;
    }
  }
  changeBackgroudColor();
  completedTasks();
});

const addTask = document.querySelector('#criar-tarefa');
addTask.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  let createLi = document.createElement('li');
  createLi.className = 'content';
  if (input.value !== '') {
    createLi.innerText = input.value;
    input.value = '';
    document.querySelector('#lista-tarefas').appendChild(createLi);
    createLi = '';
  }
  changeBackgroudColor();
  completedTasks();
});

const clearTasks = document.querySelector('#apaga-tudo');
clearTasks.addEventListener('click', () => {
  document.querySelector('ol').innerHTML = '';
});

const removeDone = document.querySelector('#remover-finalizados');
removeDone.addEventListener('click', () => {
  const liContent = document.querySelectorAll('li');
  for (let index = 0; index < liContent.length; index += 1) {
    if (liContent[index].className === 'content completed') {
      liContent[index].remove();
    }
  }
  changeBackgroudColor();
  completedTasks();
});
