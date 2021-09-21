// Declaração de variáveis e constantes
const input = document.getElementById('texto-tarefa')
const olList = document.getElementById('lista-tarefas')
const button = document.getElementById('criar-tarefa')
const clearAllButton = document.querySelector('#apaga-tudo')

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
button.addEventListener('click', createItens);
clearAllButton.addEventListener('click', ClearAll);
 
    

