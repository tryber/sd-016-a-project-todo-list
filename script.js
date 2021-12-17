const listaTarefas = document.getElementById('lista-tarefas');

function criarTarefa() {
  const inputTextoTarefa = document.getElementById('texto-tarefa');
  const btnCriarTarefa = document.getElementById('criar-tarefa');
  btnCriarTarefa.addEventListener('click', () => {
    const criarLi = document.createElement('li');
    criarLi.className = 'tarefa';
    criarLi.innerText = inputTextoTarefa.value;
    listaTarefas.appendChild(criarLi);
    inputTextoTarefa.value = '';
  });
}
criarTarefa();

function backgroundColorTarefa() {
  listaTarefas.addEventListener('click', (event) => {
    const tarefas = document.querySelectorAll('.tarefa');
    for (let i = 0; i < tarefas.length; i += 1) {
      tarefas[i].style.backgroundColor = 'white';
    }
    // eslint-disable-next-line no-param-reassign
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
backgroundColorTarefa();
