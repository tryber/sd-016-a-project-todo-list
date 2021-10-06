/* eslint-disable quotes */
/* eslint-disable no-use-before-define */
const taskList = document.querySelector('#lista-tarefas');
const taskItem = '.task-item';

const completedTask = () => {
  const lis = document.querySelectorAll('.task-item');

  lis.forEach((item) => {
    item.addEventListener('dblclick', (event) => {
      if (!event.target.classList.contains('completed')) {
        event.target.classList.add('completed');
      } else {
        event.target.classList.remove('completed');
      }
    });
  });
};

const createTask = () => {
  const buttonCreateTask = document.querySelector('#criar-tarefa');
  const inputCreateTask = document.querySelector('#texto-tarefa');
  buttonCreateTask.addEventListener('click', () => {
    const inputValue = inputCreateTask.value;
    if (!inputValue) {
      console.log('Valor inválido');
    } else {
      taskList.innerHTML += `<li class='task-item'>${inputValue}</li>`;
      inputCreateTask.value = '';
      inputCreateTask.focus();
    }

    completedTask();
  });
};

const highlightTask = () => {
  const ol = document.querySelector('#lista-tarefas');
  const gray = 'gray-bgcolor';

  ol.addEventListener('click', (event) => {
    const lis = document.querySelectorAll(taskItem);
    lis.forEach((item) => {
      const li = item;
      li.classList.remove(gray);
    });

    const e = event.target;
    e.classList.add(gray);
  });
};

const eraseTasks = () => {
  const button = document.querySelector('#apaga-tudo');

  button.addEventListener('click', () => {
    const lis = document.querySelectorAll(taskItem);
    lis.forEach((item) => {
      item.remove();
    });
  });
};

const eraseCompleted = () => {
  const btn = document.querySelector('#remover-finalizados');

  btn.addEventListener('click', () => {
    const lis = document.querySelectorAll(taskItem);
    lis.forEach((item) => {
      if (item.classList.contains('completed')) {
        item.remove();
      }
    });
  });
};

const saveTasks = () => {
  const btn = document.querySelector('#salvar-tarefas');
  const myStorage = localStorage;

  btn.addEventListener('click', () => {
    myStorage.setItem('task-list', taskList.innerHTML);
  });

  taskList.innerHTML = myStorage.getItem('task-list');
  completedTask();
};

const moveUp = () => {
  // marretei MUITO a cabeça, mas passando pelas breakouts, alguém falou sobre
  // elementSibling e fui logo pesquisar e cheguei numa POSSIVEL solução
  // eu vi uma explicação massa aqui: https://www.javascripttutorial.net/javascript-dom/javascript-siblings/
  const moveUpBtn = document.querySelector('#mover-cima');

  moveUpBtn.addEventListener('click', () => {
    const selected = document.querySelector('.gray-bgcolor');
    if (selected !== null) {
      const previous = selected.previousElementSibling;
      // é aqui que ele sobe, inserindo ANTES (before)
      if (selected !== taskList.firstChild) {
        taskList.insertBefore(selected, previous);
      }
    }
  });
};

const moveDown = () => {
  // a diferença pro moveDown() do moveUp() é justamente o sibling, MAS
  // aqui é o PRÓXIMO (after) e não ANTES (before) como acima. O resto
  // é bem similar, muda o proximo elemento que o insertBefore() vai receber
  // em vez de ser o primeiro filho, vai ser o ultimo filho
  const moveDownBtn = document.querySelector('#mover-baixo');

  moveDownBtn.addEventListener('click', () => {
    const selected = document.querySelector('.gray-bgcolor');
    if (selected !== null) {
      const next = selected.nextElementSibling;
      // é aqui que ele sobe, inserindo ANTES (before)
      if (selected !== taskList.lastChild) {
        taskList.insertBefore(selected, next.nextElementSibling);
      }
    }
  });
};

const eraseSelected = () => {
  const btn = document.querySelector('#remover-selecionado');

  btn.addEventListener('click', () => {
    const lis = document.querySelectorAll(taskItem);
    lis.forEach((item) => {
      if (item.classList.contains('gray-bgcolor')) {
        item.remove();
      }
    });
  });
};

saveTasks();
createTask();
eraseTasks();
highlightTask();

moveUp();
moveDown();

eraseSelected();
eraseCompleted();
