

function mudarCor(event) {
    const todos = document.querySelectorAll(".tarefa");
    for (let index = 0; index < todos.length; index++) {
        todos[index].classList.remove("cor");
    }

    const escolhido = " cor";
    event.target.className += escolhido;
}

function completado(event) {

    if (event.target.classList.contains("completed")) {
        event.target.classList.remove("completed");
    } else {
        event.target.classList.add("completed")
    }

}



function criarLista() {
    let pai = document.querySelector("#lista-tarefas");
    let entrada = document.querySelector("#texto-tarefa");



    const itemLista = document.createElement("li");
    itemLista.className = "tarefa";
    itemLista.innerText = entrada.value;
    pai.appendChild(itemLista);
    entrada.value = "";

    const selecionar = document.querySelectorAll(".tarefa");

    for (index = 0; index < selecionar.length; index++) {
        selecionar[index].addEventListener("click", mudarCor);
    }

    for (index = 0; index < selecionar.length; index++) {
        selecionar[index].addEventListener("dblclick", completado);
    }



}

function apagarLista() {
    const todos = document.getElementById("lista-tarefas");

    while (todos.firstChild) {
        todos.removeChild(todos.lastChild);
    }
}

function apagarFinalizados() {
    const todos = document.querySelectorAll(".completed");
    
    for (let index = 0; index < todos.length; index++) {
        todos[index].parentElement.removeChild(todos[index]);
    }

}

function removeSelecionado(){
    const remover = document.querySelector(".cor")

    remover.parentElement.removeChild(remover);
}

function eventos() {
    const botao = document.querySelector("#criar-tarefa");
    const botaoApagar = document.querySelector("#apaga-tudo")
    const botaoApagarFinalizados = document.querySelector("#remover-finalizados");
    const botaoApagarSelecionado = document.querySelector("#remover-selecionado");

    botao.addEventListener("click", criarLista);
    botaoApagar.addEventListener("click", apagarLista);
    botaoApagarFinalizados.addEventListener("click", apagarFinalizados);
    botaoApagarSelecionado.addEventListener("click", removeSelecionado);

}

eventos();