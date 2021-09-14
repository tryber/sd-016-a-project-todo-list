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
      break;
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

const save = document.querySelector('#salvar-tarefas');
save.addEventListener('click', () => {
  const liContent = document.querySelectorAll('li');
  const content = [];
  for (let index = 0; index < liContent.length; index += 1) {
    content.push(liContent[index].outerHTML);
  }
  localStorage.setItem('content', JSON.stringify(content));
});

const removeItem = document.querySelector('#remover-selecionado');
removeItem.addEventListener('click', () => {
  document.querySelector('#selected').remove();
});

window.onload = () => {
  if (localStorage.getItem('content') !== null) {
    const content = JSON.parse(localStorage.getItem('content'));
    for (let index = 0; index < content.length; index += 1) {
      const createLi = document.createElement('li');
      const list = document.querySelector('#lista-tarefas');
      list.appendChild(createLi);
      createLi.outerHTML = content[index];
    }
  }
  changeBackgroudColor();
  completedTasks();
};
