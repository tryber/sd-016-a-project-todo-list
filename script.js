// Determinando as variáveis
const addButton = document.getElementById("criar-tarefa");

// Adicionar a funcao ao betao
addButton.addEventListener("click", addTodo);


function addTodo(){
    // Pegar o item e o valor do item
    let caixaDeTexto = document.getElementById("texto-tarefa");
    let textoTarefa = document.getElementById("texto-tarefa").value;

    // criando uma li contendo o valor do input
    const actualTodo = document.createElement("li");
    actualTodo.innerText = textoTarefa;

    // Pegando o OL
    const orderedList = document.getElementById("lista-tarefas");

    // appendando a li dentro do ol
    orderedList.appendChild(actualTodo);

    // Checando se tem valor
    //if (textoTarefa !== ""){
    //    console.log(textoTarefa);
    //} else{
    //    console.log("erro");
    //}

    // Limpar a caixa de texto
    caixaDeTexto.value = "";
}
console.log(addButton);