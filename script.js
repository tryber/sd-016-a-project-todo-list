function changeBackgroudColor() {
  const liContent = document.querySelectorAll('.content');
  for (let index = 0; index < liContent.length; index += 1) {
    const liSelected = liContent[index];
    liContent[index].addEventListener('click', () => {
      liSelected.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  let createLi = document.createElement('li');
  createLi.className = 'content';
  createLi.innerText = input.value;
  input.value = '';
  document.querySelector('#lista-tarefas').appendChild(createLi);
  createLi = '';
  changeBackgroudColor();
});

window.onload = function onload() {
};
