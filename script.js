function createTarefa() {
	// chamar texto dentro do input
	const inputValue = document.querySelector('#texto-tarefa');
	const tarefaInput = inputValue.value;
	// chama a ol pai vazia
	const unorderedList = document.querySelector('#lista-tarefas');
	// cria as li que serão adicionadas ao ol pai
	const tarefaLi = document.createElement('li');
	// a cada li vai entrar o nome da tarefa do input
	tarefaLi.innerHTML = tarefaInput;
	unorderedList.appendChild(tarefaLi);
	// zerar o valor do input para a proxima tarefa
	inputValue.value = '';
eventColorLi();
eventCompletedTarefa();
}

function eventCreateTarefa() {
	const createButton = document.getElementById('criar-tarefa');
	createButton.addEventListener('click', createTarefa);
}
eventCreateTarefa()

function colorLi(event) {
  const li = document.querySelector('#lista-tarefas').children;
  for (let index = 0; index < li.length; index += 1) {
    li[index].style.backgroundColor = 'rgb(255, 255, 255)';
    // opção de deixar vazio porque houve problemas com os botões de subir e descer
    li[index].id = '';
  }
  // add Id para confirmar a seleção e para dps fazer o lance do botão
  // usar o mesmo conceito inicialmente do backgroundColor -> add para um e remove/add outro a outro
  event.target.id = 'selected';
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function eventColorLi() {
  const li = document.querySelector('#lista-tarefas').children;
  for (let index = 0; index < li.length; index += 1) {
		li[index].addEventListener('click', colorLi);
  }
}

function completedTarefa(event) {
  // usando o contains seguindo o indicado no seguinte link
  // https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript
  if (event.target.classList.contains('completed')) {
		event.target.classList.remove('completed');    
  	// talvez add um " " ao class para nao ficar vazio
	} else {
    event.target.classList.add('completed');
  }
}

function eventCompletedTarefa() {
  const li = document.querySelector('#lista-tarefas').children;
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('dblclick', completedTarefa);
  }
}

function removeAllTarefas() {
  // fonte para o código abaixo foi encontrada e baseado na seguinte página, na resposta de Gibolt
  // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  const tarefaList = document.querySelector('#lista-tarefas');
  // "while houver primeiro filho da lista de tarefas faça algo"
  while (tarefaList.firstChild) {
		// remove filho enquanto houver algum firschild na ul, e evita o problema de apagar um por vez
    tarefaList.removeChild(tarefaList.firstChild);
  }
  // avaliar depois se não é útil zerar o localStorage
}

function removeAllButton() {
  const removeButton = document.querySelector('#apaga-tudo');
  removeButton.addEventListener('click', removeAllTarefas);
}
removeAllButton();

function removerCompleted() {
  //chama as li filhas do ol -- partindo do principio que havera tarefas completed
  const tarefaList = document.querySelectorAll('.completed');
  for (let index = 0; index < tarefaList.length; index += 1) {
  //chama o pai ol para deletar as filhas li completed na posicao index
    tarefaList[index].parentElement.removeChild(tarefaList[index]);
  }
}

function removeCompletedButton() {
  const removeCompletedButton = document.querySelector('#remover-finalizados');
  removeCompletedButton.addEventListener('click', removerCompleted);
}
removeCompletedButton();

function moveToPrevious () {
  // o uso do outerHTML foi baseado no código do Humberto Castro, e confirmado no link abaixo
  // o outerHTML pegar o fragmento html, por exemplo, pode haver um span ou p dentro, e pode substituir o html
  // https://w3schools.unlockfuture.com/jsref/prop_html_outerhtml.html
  // é necessário haver PELO MENOS um selected, originalmente nenhum tem o id selected ou seja, length === 0;
  if (document.querySelectorAll('#selected').length !== 0) {
    // considera o único elemento selected
    const selectedElement = document.querySelector('#selected').outerHTML;
    if (selectedElement !== document.querySelectorAll('li').outerHTML) {
      // [liList.length - 1] representa a posição do ultimo elemento  ->> talvez aqui isso não faça diferença
      // chamar o outhtml do elemento acima do selected, ou seja, não selecionado
      const notSelectedLi = document.querySelector('#selected').previousSibling.outerHTML;
      // esse elemento nao selecionado ira receber do irmao previamente selecionado, que esta abaixo dele
      document.querySelector('#selected').previousSibling.outerHTML = selectedElement;
      // o elemento inicialmente selecionado, irá receber as infos do irmao superior que era o not selected
      document.querySelector('#selected').nextSibling.outerHTML = notSelectedLi;
    }
    // no livecode os botões funcionam mas os eventos não
    // adicionar os eventos de click e doubleclick
    eventColorLi();
    eventCompletedTarefa();
  }
}

function eventMoveToPrevious() {
  const moveUpButton = document.querySelector('#mover-cima');
  moveUpButton.addEventListener('click', moveToPrevious);
}
eventMoveToPrevious();

function moveToNext() {
  // Essa funcao foi criada baseada no apresentado pelo Humberto Castro
  // parecido como o esquema do moveToPrevious;
  if (document.querySelectorAll('#selected').length !== 0) {
    const selectedElement = document.querySelector('#selected').outerHTML;
    const liList = document.querySelectorAll('li');
    if (selectedElement !== document.querySelectorAll('li')[liList.length - 1].outerHTML) {
      // como esta descendo, o next precisa receber o outerHTML do selected
      const notSelectedLi = document.querySelector('#selected').nextSibling.outerHTML;
      // como esta descendo, o next precisa receber o outerHTML do selected
      document.querySelector('#selected').nextSibling.outerHTML = selectedElement;
      document.querySelector('#selected').outerHTML = notSelectedLi;
  	}
  	// no livecode os botões funcionam mas os eventos não
  	// adicionar os eventos de click e doubleclick 
  	eventColorLi();
  	eventCompletedTarefa();
 	}
}

function eventMoveToNext() {
  const moveDownButton = document.querySelector('#mover-baixo');
  moveDownButton.addEventListener('click', moveToNext);
}
eventMoveToNext();

function removeSelected() {
  // só há um selected por vez
  const selectedElement = document.querySelector('#selected');
  // conceito parecido com o removercompleted
  selectedElement.parentElement.removeChild(selectedElement);
}

function eventRemoveSelected() {
  const removeSelectedButton = document.querySelector('#remover-selecionado');
  removeSelectedButton.addEventListener('click', removeSelected);
}
eventRemoveSelected();

// As funcionalidades de salvar e carregar foram realizadas com base no código do Humberto Castro
// houve também o uso das seguintes fontes e o exercício do course
// https://blog.logrocket.com/localstorage-javascript-complete-guide/
// https://www.section.io/engineering-education/how-to-use-localstorage-with-javascript/
// https://www.taniarascia.com/how-to-use-local-storage-with-javascript/

// a cunho comparativo foi realizado diferente do shopping cart, onde não usei o stringfy, focando direto no innertHTML/Text para o salvamento
function saveTask() {
  const olList = document.querySelector('#lista-tarefas').children;
  if (olList.length !== 0) {
    // ou seja, se houver elemento na ol
    const tarefasLi = document.querySelectorAll('li');
    const tarefasArray = [];
    // pegando o value inserido na lista de tarefas
    for (let index = 0; index < tarefasLi.length; index += 1) {
      // se salvasse com o innerText retornaria um array com o texto das tarefas
      // aí no carregamento do localStorage teria de criar um append deles como li -- outerHTML melhor mesmo
      tarefasArray.push(tarefasLi[index].outerHTML);
    }
    localStorage.setItem('tarefas', JSON.stringify(tarefasArray));
  }
}

function eventSaveTask() {
  const saveButton = document.querySelector('#salvar-tarefas');
  saveButton.addEventListener('click', saveTask);
}
eventSaveTask();

// a cunho comparativo é mais parecido com o realizado no shopping cart
function carregarListaSalva() {
  if (localStorage.getItem('tarefas') !== null) {
    const tarefasStored = JSON.parse(localStorage.getItem('tarefas'));
    // console.log(tarefasStored);
    // o problema estava no <= !!!!
    for (let index = 0; index < tarefasStored.length; index += 1) {
      // criar as li
      const tarefasLi = document.createElement('li');
      // append na ol pai
      document.querySelector('#lista-tarefas').appendChild(tarefasLi);
      // adiciona o conteudo guardado no local storage
      // substituindo por outerHTMl para não carregar o html <li> etc
      tarefasLi.outerHTML = tarefasStored[index];
    }
  }
  // tal como no shopping cart, o localStorage recarregado não acompanha as funcionalidades de eventos
  eventColorLi();
  eventCompletedTarefa();
}

window.onload = function load() {
  carregarListaSalva();
};
