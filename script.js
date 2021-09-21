// Declaração de variáveis e constantes
const input = document.getElementById('texto-tarefa');
const olList = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const clearAllButton = document.querySelector('#apaga-tudo');

// Função que adiciona elementos do Input do usuário à lista
function createItens() {
  let createItem = document.createElement('li');
  const createdInput = input.value;
  createItem.classList.add('item');
  createItem.innerText = createdInput;
  olList.appendChild(createItem);
  input.value = '';
}

// Função para o Botao "Apagar Tudo" apagar a Lista toda
function ClearAll() {
olList.innerHTML = '';
}
// https://www.codegrepper.com/code-examples/javascript/javascript+remove+all+children

// Click Listener (Escutador de click)
  // Escutador do Botao de Criar Itens
  button.addEventListener('click', createItens);
  // Escutador do Botao de Limpar Tudo
  clearAllButton.addEventListener('click', ClearAll);
  // Escutador de click, seleciona o item da lista
  olList.addEventListener('click', SelectAndColor);
  // Escutador de double click
  olList.addEventListener('dblclick', crossListItem);

// Função de Selecionar itens e Colorir
function SelectAndColor (event) {
  let selected = document.querySelector(".selected");
  if (selected) {
    selected.classList.remove("selected");
  }
  const itemSelected = event.target;
  itemSelected.classList.add('selected');
}
// Função de Riscar item ao clicar 2x
function crossListItem(event) {
  event.target.classList.toggle('completed');
}
// consultei o slack e ja havia uma resposta para este desafio
// https://trybecourse.slack.com/archives/C02A8CKT31U/p1631750861472900
// não entendi o porque usar toggle e não classList.add então pesquisei e encontrei isso
// https://pt.stackoverflow.com/questions/492295/qual-a-diferen%C3%A7a-entre-usar-classname-classlist-toggle-e-classlist-add

    

