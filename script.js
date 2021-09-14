let listaTarefas = document.getElementById("lista-tarefas");

function trazerFilho() {
  let filho = document.createElement('li');
  filho.className = 'item-lista';
  let valor = document.getElementById('texto-tarefa');
  filho.innerText = valor.value;
  listaTarefas.appendChild(filho);
  valor.value = '';
}
let botao = document.getElementById('criar-tarefa');

botao.addEventListener('click', trazerFilho);

function mudaCor(event) {
  const item = document.querySelector('.selecionar');
  if (item != null) {
    item.style.backgroundColor = 'white';
    item.classList.remove('selecionar');
  }
  let click = event.target;
  click.style.backgroundColor = "rgb(128, 128, 128)";
  click.classList.add('selecionar');

}
listaTarefas.addEventListener('click', mudaCor);



