//funçao que adiciona os item a lista
function additems() {
  let btn = document.querySelector('button');
  btn.addEventListener('click', function(){
    let ol = document.querySelector('ol');
    let input = document.querySelector('#texto-tarefa').value;
    let criacao = document.createElement('li');
    criacao.innerHTML = input;
    ol.appendChild(criacao);
    resetValue();
  });
}
//funçao que limpa o imput
function resetValue(){
  document.querySelector('#texto-tarefa').value = "";
}


document.querySelector('ol').addEventListener('click',function (event) {
  if (document.querySelectorAll('.selected').length > 0) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
});
//adiciona ou remove class completed quando clica duas vezes
document.querySelector('ol').addEventListener('dblclick', function (event) {
  let objeto = event.target;
  if(objeto.classList.contains('completed') === true ){
    objeto.classList.remove('completed');
  }else{
    objeto.classList.add('completed');
  }
});


additems();

