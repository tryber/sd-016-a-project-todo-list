function additems() {
  let btn = document.querySelector('button');
  btn.addEventListener('click', function(){
    let ol = document.querySelector('ol');
    let input = document.querySelector('#texto-tarefa').value;
    let criacao = document.createElement('li');
    criacao.innerHTML = input;
    ol.appendChild(criacao);
    resetvalue();
  });
}
function resetvalue(){
  document.querySelector('#texto-tarefa').value = "";
}

additems();