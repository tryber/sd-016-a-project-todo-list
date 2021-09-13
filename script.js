let listaTarefas = document.getElementById("lista-tarefas");
let filho = document.createElement('li');
function trazerFilho() {
    let valor = document.getElementById('texto-tarefa');
    filho.innerText = valor.value;
    listaTarefas.appendChild(filho);
    valor.value = '';
}
let botao = document.getElementById('criar-tarefa');
botao.addEventListener('click',trazerFilho);

listaTarefas.addEventListener('click', criaClasse);


function criaClasse() {
    filho.className = 'selecionar';
    
}

listaTarefas.addEventListener('click', mudaCor);

function mudaCor() {
  filho.style.backgroundColor = 'rgb(128, 128, 128)';
}