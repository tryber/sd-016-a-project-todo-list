const getButtonClick = document.getElementById('criar-tarefa');

getButtonClick.addEventListener('click', function () {
  const getInputValue = document.getElementById('texto-tarefa');
  const getOl = document.getElementById('lista-tarefas');
  const digitedValue = getInputValue.value;
  getInputValue.value = '';
  const createLi = document.createElement('li');
  createLi.setAttribute('class', 'item-lista');
  createLi.appendChild(document.createTextNode(digitedValue));
  getOl.appendChild(createLi);
  highlightElement();
});

let selected = null;

function highlightElement() {
  const getLi = document.querySelectorAll('.item-lista');
  for (let index = 0; index < getLi.length; index += 1) {
    getLi[index].addEventListener('click', function () {
      getLi[index].classList.add('highlighted-item');
    });
  }
  for (let j = 0; j < getLi.length; j += 1) {
    getLi[j].addEventListener('click', function (evt) {
      for (let i = 0; i < getLi.length; i += 1) {
        getLi[i].classList.remove('highlighted-item');
      }
      evt.target.classList.add('highlighted-item');
    });
  }
}
