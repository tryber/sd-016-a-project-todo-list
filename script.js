const inputList = document.querySelector('#texto-tarefa');
const buttonInput = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefa');

// Implantei timeout no evento atraves de uma pesquisa onde encontrei em https://schier.co/blog/wait-for-user-to-stop-typing-using-javascript a função dentro do EventListener
function getText(){
  let timeout = null;
  inputList.addEventListener('keyup', function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      let text = e.target.value;
      if (e.target.value === null) {
        return
      }
      insertList(text)
      console.log(text) 
    }, 1000)    
  });
}
getText()

function insertList(text) {
  let inputText = text;
  console.log(inputText)
  buttonInput.addEventListener('click', function () {
    if (inputText === null) {
      alert('Desculpe, não pode acrescentar um item vazio!')
      return
    }
    let assignment = document.createElement('li');
    assignment.innerText = inputText;
    list.appendChild(assignment);
    inputText = null;
  })
}