function html1() {
  // variáveis de elementos Pai dos elementos filhos abaixo.
  const header = document.querySelector('header');
  const section = document.querySelector('section');
  // cria o titulo.
  const h1 = document.createElement('h1');
  header.appendChild(h1);
  document.querySelector('h1').innerText = 'Minha Lista de Tarefas';
  // cria o paragrafo <p>.
  const paragrafo = document.createElement('p');
  section.appendChild(paragrafo);
  document.querySelector('p').id = 'funcionamento';
  document.querySelector('p').innerText = 'Clique duas vezes em um item para marcá-lo como completo';
}

function nav() {
  //constantes Pai.
  const nav = document.querySelector('nav');
  const ol = document.createElement('ol');
  // cria o input.
  const input = document.createElement('input');
  nav.appendChild(input);
  document.querySelector('input').id = 'texto-tarefa';
  // cria lista ordenada.
  nav.appendChild(ol);
  ol.id = 'lista-tarefas';
  //constantes Filho.
   const olAcess = document.querySelector('ol');
   const inputText = document.querySelector('#texto-tarefa');
  // cria o botão Na Página.
  const btn = document.createElement('button');
  nav.appendChild(btn);
  document.querySelector('button').id = 'criar-tarefa';
  document.querySelector('button').innerText = 'Create';
  // acessa o botão
  const btnAcess = document.querySelector('#criar-tarefa');
  // mensagem de erro! 
  const error = document.createElement('p');
  nav.appendChild(error);
  // funçao do botão.

  btnAcess.addEventListener('click', function (){
   
    if (inputText.value !== '') {
      const li = document.createElement('li');
      li.innerText = inputText.value;
      li.classList.add('task');
      olAcess.appendChild(li);
      inputText.value = '';
      // limpa mensagem de erro ao criar uma tarefa.
      document.querySelector('nav p').innerText = ''; 

      const grayList = document.querySelector('li');
      grayList.addEventListener('click', function(){
        li.style.backgroundColor = 'gray';
      });

      } else {
        error.innerText = 'erro: Digite uma lista de tarefa !';
        error.style.color = 'red';
        console.log('erro: Digite uma lista de tarefa !');
      }
  });
}

html1();
nav();
