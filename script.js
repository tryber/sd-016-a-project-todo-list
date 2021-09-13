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
botao.addEventListener('click',trazerFilho);

listaTarefas.addEventListener('click', mudaCor);

function mudaCor(event) {
 let click = event.target;
 click.style.backgroundColor = "rgb(128, 128, 128)";
 click.classList.add('selecionar') ;
}