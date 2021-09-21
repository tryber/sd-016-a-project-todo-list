// Capturar o botão
const selectbutton = document.querySelector('#criar-tarefa');
// Capturar frase do input com id
const inputFrase = document.getElementById('texto-tarefa');
// Agora quando clicar no botão adicionar o que foi escrito na ol
selectbutton.addEventListener('click', () => {
  if (inputFrase.value === '') {
    return alert('Nenhum intem encontrado');
  }
  const createli = document.createElement('li');
  createli.classList.add('listAdd');
  createli.innerText = inputFrase.value;
  document.querySelector('#lista-tarefas').appendChild(createli);
  inputFrase.value = '';
});

function MudaBackground() {
  const selectorColor = document.querySelectorAll('.listAdd');
  for (let index = 0; index < selectorColor.length; index += 1) {
    selectorColor[index].addEventListener('click', () => {
      for (let cont = 0; cont < selectorColor.length; cont += 1) {
        selectorColor[cont].style.backgroundColor = '';
      }
      selectorColor[index].style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

function ClickComplete() {
  const selectCom = document.querySelectorAll('.listAdd');
  for (let index = 0; index < selectCom.length; index += 1) {
    selectCom[index].ondblclick = () => {
      selectCom[index].classList.toggle('completed');
    };
  }
}

selectbutton.addEventListener('click', MudaBackground);
selectbutton.addEventListener('click', ClickComplete);

// Capturar botao
const buttonClearlist = document.querySelector('#apaga-tudo');
// Adicionar escutador
buttonClearlist.addEventListener('click', () => {
  // Quantos li existe no momento, primeiro eu tenho que capturar class dos lis
  const list = document.querySelectorAll('.listAdd');
  for (let i = 0; i < list.length; i += 1) {
    list[i].remove('li');
  }
});

// Capturar o butão
const buttonDel = document.querySelector('#remover-finalizados');
// Adicionar escutador
buttonDel.addEventListener('click', () => {
  // Capturar o li com completed
  const liCompleted = document.querySelectorAll('.completed');
  // Verificar se tem mais de um
  for (let index = 0; index < liCompleted.length; index += 1) {
    liCompleted[index].remove('li');
  }
});
