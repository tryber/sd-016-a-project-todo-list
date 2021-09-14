const localButton = document.querySelector('#criar-tarefa');
const localOl = document.querySelector('#lista-tarefas');
const contentInput = document.querySelector('#texto-tarefa');

function createLi() {
  const novaLi = document.createElement('li');
  novaLi.innerText = contentInput.value;
  localOl.appendChild(novaLi);
  contentInput.value = '';

  // Auxilio da Camila com o nome da função acusando no lint =>

  novaLi.addEventListener('click', () => {
    if (novaLi.className === '') {
      novaLi.className = 'selected';
    } else if (novaLi.className === 'selected') {
      novaLi.classList.remove('selected');
      return novaLi;
    }
  });
  // Auxilio durante mentoria Sumo vendo sugestão de colega

  novaLi.addEventListener('dblclick', () => {
    if (novaLi.className !== 'completed') {
      novaLi.className = 'completed';
    } else if (novaLi.className === 'completed') {
      novaLi.classList.remove('completed');
    }
  });
}

localButton.addEventListener('click', createLi);

const buttonApagar = document.getElementById('apaga-tudo');

function erasedIten() {
  localOl.innerHTML = '';
}

buttonApagar.addEventListener('click', erasedIten);
