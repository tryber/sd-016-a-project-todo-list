let button = document.getElementsByTagName("button")[0];
let input = document.getElementById("texto-tarefa");
let tabela = document.getElementById("lista-tarefas");
let listaDeTarefas = document.getElementsByTagName("li");

console.log(button);
button.addEventListener("click", adicionaItem);
function adicionaItem(event) {
  let texto = input.value;
  itemDaLista = document.createElement("li");
  itemDaLista.innerText = texto;
  tabela.appendChild(itemDaLista);
  input.value = "";
  itemDaLista.addEventListener("click", selecionaItem);

}
function selecionaItem(event) {
  for (let i = 0; i < listaDeTarefas.length; i +=1){
    listaDeTarefas[i].classList.remove("selected");
  }
  event.target.classList.add("selected")
}