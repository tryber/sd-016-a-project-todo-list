// eslint-disable-next-line max-lines-per-function
const listaTarefas = document.getElementById('lista-tarefas');

function backgroundColorTarefa(event) {
  const tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].style.backgroundColor = 'white';
  }
  // eslint-disable-next-line no-param-reassign
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function tarefaCompleta(event) {
  const { classList } = event.currentTarget;
  if (classList.contains('completed') === false) {
    classList.add('completed');
  } else if (classList.contains('completed')) {
    classList.remove('completed');
  }
}

function criarTarefa() {
  const inputTextoTarefa = document.getElementById('texto-tarefa');
  const btnCriarTarefa = document.getElementById('criar-tarefa');
  btnCriarTarefa.addEventListener('click', () => {
    const criarLi = document.createElement('li');
    criarLi.className = 'tarefa';
    criarLi.innerText = inputTextoTarefa.value;
    criarLi.addEventListener('click', backgroundColorTarefa);
    criarLi.addEventListener('dblclick', tarefaCompleta);
    listaTarefas.appendChild(criarLi);
    inputTextoTarefa.value = '';
  });
}
criarTarefa();

function apagarTarefas() {
  const btnApagar = document.getElementById('apaga-tudo');
  btnApagar.addEventListener('click', () => {
    listaTarefas.innerText = '';
  });
}
apagarTarefas();

function apagarTarefasFinalizadas() {
  const btnApagar = document.getElementById('remover-finalizados');
  btnApagar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('.tarefa');
    for (let i = 0; i < tarefas.length; i += 1) {
      if (tarefas[i].classList.contains('completed')) {
        tarefas[i].remove();
      }
    }
  });
}
apagarTarefasFinalizadas();

function salvarTarefas() {
  const btnSalvar = document.getElementById('salvar-tarefas');
  btnSalvar.addEventListener('click', () => {
    localStorage.setItem('Lista', listaTarefas.innerHTML);
  });
}
salvarTarefas();

window.onload = function storage() {
  listaTarefas.innerHTML = localStorage.getItem('Lista');
};
