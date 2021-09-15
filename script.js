const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', () => {
  const textInput = document.querySelector('#texto-tarefa');
  const lista = document.querySelector('#lista-tarefas');
  const itemLista = document.createElement('li');

  itemLista.innerHTML = textInput.value;
  lista.appendChild(itemLista);
  textInput.value = '';
});

function colorItem() {
  const lista = document.querySelector('ol');
  lista.addEventListener('click', (event) => {
    event.target.classList.add('itemColor');
  });
}
colorItem();
