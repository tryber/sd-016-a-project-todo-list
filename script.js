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

function highlightElement() {
  const getLi = document.querySelectorAll('.item-lista');
  for (let index = 0; index < getLi.length; index += 1) {
    getLi[index].addEventListener('click', function () {
      getLi[index].style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}
