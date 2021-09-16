
const listaTarefas = document.querySelector('#lista-tarefas');
const inputTarefa = document.querySelector("#texto-tarefa");
const criarTarefaBtn = document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);

function adicionarRisco(event){
  const tarefaClicada2x = event.target; 
  if(tarefaClicada2x.classList.contains("completed")){
    tarefaClicada2x.classList.remove("completed")
  }else{
    tarefaClicada2x.classList.add("completed")
  }
}

function addCor(event) {
  const tarefaClicada = event.target;
  if(tarefaClicada.classList.contains('corCinza')) {
    tarefaClicada.classList.remove('corCinza');
  } else {
    tarefaClicada.classList.add('corCinza');
  }
}

function selecionarTarefas() {
  const tarefaLis = document.getElementsByClassName("ordem");
  for (let i = 0; i < tarefaLis.length; i++) {
    tarefaLis[i].addEventListener("click", addCor);
    tarefaLis[i].addEventListener("dblclick", adicionarRisco);
  }
}

function criarTarefa() {
  const tarefa = document.createElement('li');
  tarefa.classList.add('ordem');
  tarefa.innerHTML = inputTarefa.value;
  listaTarefas.appendChild(tarefa);
  inputTarefa.value = "";
  selecionarTarefas();
}


