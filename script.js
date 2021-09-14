// variáveis utilizadas nas funções:
const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('input');
const oList = document.querySelector('#lista-tarefas');
// const lItem = document.querySelectorAll('.item-lista'); ** explicação antes da function colorTaskToGray.

// função responsável por alterar a cor de fundo dos 'list-itens' para cinza.
// não estava conseguindo criar a função chamando os li direto por document.querySelectorAll('.lItem'), então tentei chamar pelos filhos da lista ordenada com id = '#lista-tarefas', assim deu certo. Portanto, no ínicio do código, comentei a constante 'lItem'.
function colorTaskToGray(event) { // cria a function colorTaskToGray
  for (let index = 0; index < oList.children.length; index += 1) {
    const listItem = oList.children[index];
    listItem.style.backgroundColor = 'white';
  }
  const functionEvent = event;
  functionEvent.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// função responsável por riscar o conteúdo da 'li' quando clicar duas vezes em cima dela, adicionando a classe completed com o style declarado no style.css.
function completedTasks(event) { // cria a function completedTasks
  if (event.target.classList.contains('completed') === true) { // se a 'li' tem a classe 'completed'
    event.target.classList.remove('completed'); // remove a classe 'completed'
  } else { // senão,
    event.target.classList.add('completed'); // adiciona a classe 'completed'
  }
}

// função responsável por criar um novo item na lista de tasks ao clicar no botão com id 'criar-tarefa', e limpar o valor do input.
function tasksList() {
  const listItem = document.createElement('li'); // cria o elemento 'li' que receberá o valor digitado em input.
  listItem.innerText = input.value; // insere o valor do input no elemento 'li'.
  listItem.classList.add('item-lista');
  oList.appendChild(listItem); // coloca os elementos 'li' como filhos da lista ordenada com id 'lista-tarefas'.
  input.value = ''; // limpa o valor do input.
  listItem.style.backgroundColor = 'white';
  listItem.addEventListener('click', colorTaskToGray); // escutador da função colorTasksToGray
  listItem.addEventListener('dblclick', completedTasks); // escutador da função completedTasks
}
button.addEventListener('click', tasksList); // adiciona um escutador de eventos no momento que clicar no botão, e chama a função 'tasksList'
