// Determinando as variáveis
const addButton = document.getElementById("criar-tarefa");
const clearButton = document.getElementById("apaga-tudo");
const completedButton = document.getElementById("remover-finalizados");
const saveButton = document.getElementById("salvar-tarefas");
let todoList = [];
let nbmrOfTodos = 0;

// Adicionar funcoes
addButton.addEventListener("click", addTodo);
clearButton.addEventListener("click", deleteEverything);
completedButton.addEventListener("click", deleteCompleted);
saveButton.addEventListener("click", saveList);

// Funcoes
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

function deleteEverything(){
    const theList = document.querySelectorAll("li");
    for(let z = 0; z < theList.length; z += 1){
        theList[z].remove();
    }
}

function deleteCompleted(){
    const toBeDeleted = document.querySelectorAll(".completed")
    for(let k = 0; k < toBeDeleted.length; k += 1){
        toBeDeleted[k].remove();
    }
}

function saveList(){
    // Criando um array com todos os elementos que estao listados
    const todosToSave = document.querySelectorAll("li"); 

    // Criando um array para salvar o conteúdo desses li em texto
    const savedTodoText = [];

    // Criando um array para salvar se os conteúdos desses li estao completos ou nao
    const todosCompleted = [];

    // Colocando as classes dentro desse array
    for (let n = 0; n < todosToSave.length; n += 1){
        todosCompleted.push(todosToSave[n].className);
    }

    // Colocando os textos dentro desse array
    for(let t = 0; t < todosToSave.length; t += 1){
        savedTodoText.push(todosToSave[t].innerHTML);
    }

    // Botando esse array no localstorage
    localStorage.setItem("savedTodos", JSON.stringify(savedTodoText));

    // BOtando o arrya de classe no localstorage
    localStorage.setItem("todosClasses", JSON.stringify(todosCompleted));
}

// Criando funcao para, quando carregar a pagina, montar as li`s
window.onload = () => {
    // checando se existem itens salvos no local storage com a key savedTodos
    if(localStorage.getItem("savedTodos") !== null){
        //  Caso exista, pegar os valores de dentro dele usando o parse
        const savedTodoText = JSON.parse(localStorage.getItem("savedTodos"));

        // pegar os valores das classes
        const todosClasses = JSON.parse(localStorage.getItem("todosClasses"));

        // Criando um for para criar as Li`s dos todos salvos
        for(let m = 0; m < savedTodoText.length; m += 1){
            // Pegar o item e o valor do item
            let caixaDeTexto = document.getElementById("texto-tarefa");
            let textoTarefa = savedTodoText[m];

            // criando uma li contendo o valor do input
            const actualTodo = document.createElement("li");
            actualTodo.innerHTML = textoTarefa;

            // Pegando o OL
            const orderedList = document.getElementById("lista-tarefas");

            // appendando a li dentro do ol
            orderedList.appendChild(actualTodo);

            // Adicionando o todo para a lista de todos
            todoList.push(actualTodo);

            // Adicionando o evento de clicar em cada LI criada
            todoList[nbmrOfTodos].addEventListener("click", turnGrey);
            todoList[nbmrOfTodos].addEventListener("dblclick", riskIt);

            // Adicionando todo +1
            nbmrOfTodos += 1;

            // Adicionando as classes aos elementos
            actualTodo.className = todosClasses[m];
        }
    }
}