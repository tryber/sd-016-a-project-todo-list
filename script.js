const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('input');
const oList = document.querySelector('#lista-tarefas');

// função responsável por criar um novo item na lista de tasks ao clicar no botão com id 'criar-tarefa', e limpar o valor do input.
function tasksList() {
  const listItem = document.createElement('li'); // cria o elemento 'li' que receberá o valor digitado em input.
  listItem.innerText = input.value; // insere o valor do input no elemento 'li'.
  oList.appendChild(listItem); // coloca os elementos 'li' como filhos da lista ordenada com id 'lista-tarefas'.
  input.value = ''; // limpa o valor do input.
}
button.addEventListener('click', tasksList); // adiciona um escutrador de eventos no momento que clicar no botão, e chama a função 'tasksList'
