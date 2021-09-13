const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', () => {
  const textInput = document.querySelector('#texto-tarefa');
  const lista = document.querySelector('#lista-tarefas');
  const itemLista = document.createElement('li');

  itemLista.innerHTML = textInput.value;
  lista.appendChild(itemLista);
  textInput.value = '';
});
