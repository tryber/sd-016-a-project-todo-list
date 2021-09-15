const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const button2 = document.getElementById('apaga-tudo');
const button3 = document.getElementById('remover-finalizados');

function taskList() {
  const listContent = input.value;
  const creatList = document.createElement('li');
  creatList.className = 'task';
  list.appendChild(creatList);
  creatList.innerText = listContent;
  input.value = '';
}

//ref: lógica aprendida através de codereview de codigo da turma 13;

function paintList(event2) {
  const listContent = document.querySelector('.selected');
  if (event2.target.className === 'task') {
    event2.target.classList.add('selected');
    if (listContent !== null) {
      listContent.classList.remove('selected');
    }
  }
}

//ref: lógica aprendida através de codereview de codigo da turma 13;

function taskComplete(event3) {
  if (event3.target.classList.contains('completed') === false) {
    event3.target.classList.add('completed');
  } else if (event3.target.classList.contains('completed')) {
    event3.target.classList.remove('completed');
  }
}

// ref: https://www.w3schools.com/jsref/met_node_removechild.asp

function apagaTudo() {
  let lista = document.getElementById('lista-tarefas');
  while (lista.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

//ref: lógica aprendida através de codereview de codigo da turma 13;

function apagaFinalizados() {
  let finalizados = document.querySelectorAll('.completed');
  for (let index = 0; index < finalizados.length; index += 1) {
    if (finalizados[index].classList.contains('completed')) {
      list.removeChild(finalizados[index]);
    }
  }
}

function addEvents() {
  button.addEventListener('click', taskList);
  list.addEventListener('click', paintList);
  list.addEventListener('dblclick', taskComplete);
  button2.addEventListener('click', apagaTudo);
  button3.addEventListener('click', apagaFinalizados);
}
addEvents();
