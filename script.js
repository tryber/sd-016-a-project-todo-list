let button = document.getElementsByTagName("button")[0];
let input = document.getElementById("texto-tarefa");
let tabela = document.getElementById("lista-tarefas");
let apagar = document.getElementById("apaga-tudo");
let selected = null;
console.log(button);
button.addEventListener("click", adicionaItem);
apagar.addEventListener("dblclick", apagarLista);
apagar.addEventListener("click", apagarLista);
function adicionaItem(event) {
  let texto = input.value;
  let listaDeTarefas = document.createElement("li");
  listaDeTarefas.innerText = texto;
  listaDeTarefas.className = "lista";
  tabela.appendChild(listaDeTarefas);
  listaDeTarefas.addEventListener("click", () => {
    if (selected) {
      listaDeTarefas.style.backgroundColor = 'rgb(0, 0, 0)';
      selected = null;
    }
    else {
      listaDeTarefas.style.backgroundColor = 'rgb(128, 128, 128)'
    selected = true;
    }
  })
  input.value = "";
}
function apagarLista(event) {
  let listaDeTarefas = document.querySelectorAll(".lista")
  for (let i = 0; i < listaDeTarefas.length; i += 1) {
    let element = listaDeTarefas[i];
    tabela.removeChild(element);
  }
}