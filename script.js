const botao = document.querySelector("#criar-tarefa");
botao.addEventListener("click", inputBotao);

function inputBotao() {
    let inputValor = document.querySelector("#texto-tarefa");
    let valor = inputValor.value;
    let itemLista = document.createElement("li");
    itemLista.innerText = valor;
    document.querySelector("#lista-tarefas").appendChild(itemLista);
    inputValor.value = "";
}