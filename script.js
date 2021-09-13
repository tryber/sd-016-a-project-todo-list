


function criarLista(){
    let pai = document.querySelector("#lista-tarefas");
    let entrada = document.querySelector("#texto-tarefa");

    const itemLista = document.createElement("li");
    itemLista.innerText = entrada.value;
    pai.appendChild(itemLista);
    entrada.value = "";

}

function eventos(){
    const botao = document.querySelector("#criar-tarefa");

    botao.addEventListener("click", criarLista);
}

eventos();