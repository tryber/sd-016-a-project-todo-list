const botao = document.querySelector("#criar-tarefa");
botao.addEventListener("click", inputBotao);
const listItem = document.querySelector("#lista-tarefas")

function selecionaBGColor(event) {
    let linha = document.querySelectorAll("li");
    for(let index = 0; index < linha.length; index +=1) {
        linha[index].style.backgroundColor = "white";
    }
    event.target.style.backgroundColor = "rgb(128, 128, 128)"
}

listItem.addEventListener("click", selecionaBGColor)

function inputBotao() {
    let inputValor = document.querySelector("#texto-tarefa");
    let valor = inputValor.value;
    let itemLista = document.createElement("li")
    itemLista.innerText = valor;
    document.querySelector("#lista-tarefas").appendChild(itemLista);
    inputValor.value = "";
}

//https://www.w3schools.com/howto/howto_js_toggle_class.asp

listItem.addEventListener("dblclick", riscaItem)

function riscaItem(event) {
    event.target.classList.toggle("completed")
}