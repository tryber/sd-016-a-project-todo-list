// aqui vou fazer a função de adicionar tarefa na lista

let quantosDuploClick=1;// essa variavel armazena a quantidade de duplos cliques que dei em cada item da lista
function adicionarTarefa() {
  
  const addTarefa = document.createElement('li');
  addTarefa.className = "itemList";
  addTarefa.innerHTML = document.querySelector('#texto-tarefa').value;
  document.querySelector('#lista-tarefas').appendChild(addTarefa);
  document.querySelector('#texto-tarefa').value = '';
  addTarefa.addEventListener("click",changeBackgroundListItem)// aqui estou adicionando um evento de click para cada li(item da lista de tarefa)
  addTarefa.addEventListener("dblclick",changeRiskItem)// aqui estou adicionando um evento de dblclick para cada li(item da lista de tarefa)
}

// aqui vou fazer o evento de clicar no botão adicionar-tarefa
document.querySelector('#criar-tarefa').addEventListener('click', adicionarTarefa);

//aqui vou fazer os eventos de cada item da lista de tarefas

// aqui vou fazer a função para quando clicar em um item da lista de tarefa a cor de fundo mude para cinza
function changeBackgroundListItem(){
  //esse for é para todos os outros elementos que não estão selecionados mudarem para a cor original
  for(let contDesfazerSelecao=0; contDesfazerSelecao < document.querySelectorAll(".itemList").length; contDesfazerSelecao += 1) {
    document.querySelectorAll(".itemList")[contDesfazerSelecao].style.backgroundColor=""
  }
  event.target.style.backgroundColor = "rgb(128,128,128)"; 
}

function changeRiskItem() {
  for(let contDesfazerSelecao=0; contDesfazerSelecao < document.querySelectorAll(".itemList").length; contDesfazerSelecao += 1) {
    document.querySelectorAll(".itemList")[contDesfazerSelecao].style.backgroundColor=""
  }
  if(quantosDuploClick == 1){
    quantosDuploClick += 1
    event.target.style.textDecoration = "line-through";
    event.target.classList.add("completed")
  }else{
    quantosDuploClick = 1
    event.target.style.textDecoration = "none";
    event.target.className = "itemList";
  }
}

function apagaItens(){

  qtdElementos = document.querySelectorAll(".itemList").length;// Essa variável armazena a quantidade de elementos que tem na lista
  for(let contQuantosElementosTem = 0; contQuantosElementosTem < qtdElementos; contQuantosElementosTem += 1){
    document.querySelector("#lista-tarefas").removeChild(document.querySelectorAll(".itemList")[0]);
  }
}
document.querySelector("#apaga-tudo").addEventListener("click", apagaItens)

