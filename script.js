let btnLimparFinish = document.getElementById("remover-finalizados");
let btnCriarTarefa = document.getElementById('criar-tarefa');
btnCriarTarefa.addEventListener('click', function () {
  let textoTarefa = document.getElementById("texto-tarefa");
  let li = document.createElement("li");
  let texto = document.createTextNode(textoTarefa);
  li.appendChild(texto);
  li.innerText = textoTarefa.value;
  document.getElementById("lista-tarefas").appendChild(li);
  listaTarefas = document.querySelector("#lista-tarefas")
  //alterar a cor da linha
  listaTarefas.addEventListener('click', newColor);
  //riscar a tarefa
  listaTarefas.addEventListener('dblclick', riskTasK);
  textoTarefa.value =''
})

//Item 10 - clicar no botão `apaga-tudo` para deixar lista de tarefas vazia
let btnLimparTarefas = document.getElementById('apaga-tudo');
btnLimparTarefas.addEventListener('click', function() {
  let lineTarefas = document.querySelectorAll("li")
  for (let index = 0; index < lineTarefas.length; index += 1) {
    document.querySelector("#lista-tarefas").removeChild(lineTarefas[index])
  }
  })

//Item 11 - clicar no botão `remover-finalizados` 
function removeFinish(){
  let lineTarefas = document.querySelectorAll(".completed")
  for (let index = 0; index < lineTarefas.length; index += 1) {
    document.querySelector("#lista-tarefas").removeChild(lineTarefas[index])
     
  }
}
btnLimparFinish.addEventListener('click', removeFinish)

function newColor(color){
  let lineTarefas = document.getElementById("lista-tarefas").children
  for (let index = 0; index < lineTarefas.length; index += 1) {
    lineTarefas[index].style.backgroundColor = 'rgba(100, 148, 237, 0.11)';
  }
    color.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function riskTasK(risk){
    risk.target.classList.toggle('completed');
    //risk.target.classList.add('completed')
}


