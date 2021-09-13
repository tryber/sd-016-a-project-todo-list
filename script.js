let input = document.querySelector("#texto-tarefa");
let botao = document.querySelector("#criar-tarefa");
let ol = document.querySelector("#lista-tarefas");

botao.addEventListener('click', adiciona);

function adiciona() {
  let criaLi = document.createElement('li');
  criaLi.innerHTML = input.value;
  input.value ='';
  ol.appendChild(criaLi);
}