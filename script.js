function createContainer() {
  const div = document.createElement('div');
  div.id = 'container';
  document.body.appendChild(div);
}

function createHeader() {
  const header = document.createElement('header');
  const container = document.querySelector('#container');
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Minha Lista de Tarefas';
  container.appendChild(header);
  header.appendChild(h1);
}

createContainer();
createHeader();

function createMain() {
  const main = document.createElement('main');
  const container = document.querySelector('#container');
  main.id = 'content-main';
  container.appendChild(main);
}

function createTagP() {
  const p = document.createElement('p');
  const main = document.querySelector('main');
  p.id = 'funcionamento';
  p.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  main.appendChild(p);
}

createMain();
createTagP();

function createContentInput() {
  const section = document.createElement('section');
  const main = document.querySelector('main');
  section.id = 'content-input';
  main.appendChild(section);
}

function createInput() {
  const input = document.createElement('input');
  const section = document.querySelector('#content-input');
  input.id = 'texto-tarefa';
  input.placeholder = 'Digite uma tarefa à fazer';
  section.appendChild(input);
}

function createUl() {
  const ol = document.createElement('ol');
  const main = document.querySelector('main');
  ol.id = 'lista-tarefas';
  main.appendChild(ol);
}

function createButInput() {
  const button = document.createElement('button');
  const section = document.querySelector('#content-input');
  button.id = 'criar-tarefa';
  button.innerHTML = 'Adicionar';
  section.appendChild(button);
}

function createButAllClear() {
  const buttonAllClear = document.createElement('button');
  const main = document.querySelector('#content-main');
  buttonAllClear.id = 'apaga-tudo';
  buttonAllClear.innerHTML = 'Limpar lista';
  main.appendChild(buttonAllClear);
}

function buttonClearSelected() {
  const butClear = document.createElement('button');
  const main = document.querySelector('#content-main');
  butClear.id = 'remover-finalizados';
  butClear.innerHTML = 'Limpar Completos';
  main.appendChild(butClear);
}

function ButtonSaveTasks() {
  const save = document.createElement('button');
  const main = document.querySelector('#content-main');
  save.id = 'salvar-tarefas';
  save.innerHTML = 'Salvar lista';
  main.appendChild(save);
}

createContentInput();
createInput();
createButInput();
createUl();
createButAllClear();
buttonClearSelected();
ButtonSaveTasks();
// funções acima são estrutura HTML fixa

// Usei a base do exercicio do Calendario
function addList() {
  const input = document.querySelector('#texto-tarefa');
  const ol = document.querySelector('#lista-tarefas');
  if (input.value.length > 0) {
    const addLi = document.createElement('li');
    addLi.classList.add('list');
    addLi.innerHTML = input.value;
    ol.appendChild(addLi);
    input.value = '';
  }
}

// instutor Caique Coelho me ajudou a melhorar minha função de click

function clearBackgroundOl() {
  const taskList = document.querySelectorAll('.list');
  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i].style.backgroundColor = 'unset';
  }
  // unset - deixara indefinoido o background
  // https://developer.mozilla.org/en-US/docs/Web/CSS/unset
}

function clickOl() {
  const taskList = document.querySelectorAll('.list');
  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i].addEventListener('click', () => {
      clearBackgroundOl();
      taskList[i].style.backgroundColor = 'rgb(128, 128, 128) ';
    });
  }
}

function completeTask() {
  const taskList = document.querySelectorAll('.list');
  for (let i = 0; i < taskList.length; i += 1) {
    // Ajuda do instutor Victor Faria e Brunão da turma A
    // usei o .ondblclick porque o javaScript da um bug quando utliza o addEventListener, ele pula um elemento.
    taskList[i].ondblclick = () => {
      taskList[i].classList.toggle('completed');
    };
  }
}

function allClear() {
  const buttonClear = document.querySelector('#apaga-tudo');
  const listTasks = document.querySelector('#lista-tarefas');
  buttonClear.addEventListener('click', () => {
    while (listTasks.firstElementChild) {
      // while é um loop de repetição de condição verdadeira
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
      listTasks.firstElementChild.remove();
    }
  });
}


allClear();

function addAllFunction() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', () => {
    addList();
    completeTask();
    clickOl();
  });
}

addAllFunction();

function clearCompleted() {
  const tasksCompleted = document.getElementsByClassName('completed');
  while( tasksCompleted.length > 0) {
    const listCom = tasksCompleted[0]
    listCom.parentNode.removeChild(listCom)
  }
}
function removeCompleted() {
  const butClear = document.querySelector('#remover-finalizados');
  butClear.addEventListener('click', clearCompleted);
}
removeCompleted();

function saveTasks() {
  const list= document.querySelector('#lista-tarefas')
  
  window.localStorage.Tasks = list.innerHTML
}

function save() {
  const buttonSave = document.querySelector('#salvar-tarefas');
  buttonSave.addEventListener('click', saveTasks);
}
save()

function printList() {
  const list= document.querySelector('#lista-tarefas')
  list.innerHTML = (window.localStorage.Tasks === undefined) ? '' : window.localStorage.Tasks;
}

printList()
