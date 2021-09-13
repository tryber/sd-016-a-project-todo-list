let listaTarefas = document.getElementById("lista-tarefas");
function trazerFilho() {
    let filho = document.createElement('li');
    let valor = document.getElementById('texto-tarefa');
    filho.innerText = valor.value;
    listaTarefas.appendChild(filho);
    valor.value = '';
}
let botao = document.getElementById('criar-tarefa');
botao.addEventListener("click",trazerFilho);
