// Determinando as variáveis
const addButton = document.getElementById("criar-tarefa");
let todoList = [];
let nbmrOfTodos = 0;

// Adicionar funcoes
addButton.addEventListener("click", addTodo);




function addTodo(){
    // Pegar o item e o valor do item
    let caixaDeTexto = document.getElementById("texto-tarefa");
    let textoTarefa = document.getElementById("texto-tarefa").value;

    // criando uma li contendo o valor do input
    const actualTodo = document.createElement("li");
    actualTodo.innerHTML = textoTarefa;

    // Pegando o OL
    const orderedList = document.getElementById("lista-tarefas");

    // appendando a li dentro do ol
    orderedList.appendChild(actualTodo);

    // Limpar a caixa de texto
    caixaDeTexto.value = "";

    // Adicionando o todo para a lista de todos
    todoList.push(actualTodo);

    // Adicionando o evento de clicar em cada LI criada
    todoList[nbmrOfTodos].addEventListener("click", turnGrey);
    todoList[nbmrOfTodos].addEventListener("dblclick", riskIt);

    // Checando se foi
    console.log(todoList);

    // Adicionando todo +1
    nbmrOfTodos += 1;
}

function turnGrey(){
    for (let y = 0; y < todoList.length; y += 1){
        todoList[y].style.backgroundColor = "white";
    }
    this.style.backgroundColor = "rgb(128, 128, 128)";
}

function riskIt(){
    // Checar se já tem a classe completed
    if(this.className === "completed"){
        this.className = "";
    }else{
        this.className = "completed";
    }
}