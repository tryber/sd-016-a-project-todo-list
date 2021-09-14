let btnCriarTarefa = document.getElementById('criar-tarefa');
btnCriarTarefa.addEventListener('click', function () {
  let textoTarefa = document.getElementById("texto-tarefa").value;
  // document.querySelector("#texto-tarefa");
  let li = document.createElement("li");
  let texto = document.createTextNode(textoTarefa);
  li.appendChild(texto);
  document.getElementById("lista-tarefas").appendChild(li);
  // if (textoTarefa != "") {
  // }
  li.innerHTML = document.querySelector("#texto-tarefa").value;
  listatarefas = document.querySelector("#lista-tarefas")
  //alterar a cor da linha
  listatarefas.addEventListener('click', newColor)
  //li.addEventListener('click', newColor) 
  //selista.appendChild(li)=listatarefas
  document.querySelector("#texto-tarefa").value = ""
})

function newColor(event){
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  //document.BodyStyle.backgroundColor = 'rgb(0, 128, 0)';
  //li.style.backgroundColor = 'rgb(0, 128, 0)';
}

// function createItemEl(itemValue,itemId){
//   let btn = document.createElement("li");
//   li.setAttribute("index",itemId);
//   li.appendChild(document.createTextNode(itemValue))
//   return li;
// }

// function createRemoveTaskBtn(itemId){
//   let btn = document.createElement("button");
//   li.setAttribute("onclick","removeTask("+itemId+")");
//   btn.innerHTML = 'X';
//   return btn;
// }

// function removeTask(){

// }


// const btnHoliday = document.getElementById('btn-holiday');
// btnHoliday.addEventListener('click', function () {
//   const holidays = document.querySelectorAll('.holiday');
//   for (let index = 0; index < holidays.length; index += 1) {
//     if (holidays[index].style.bacdkgroundColor === 'white') {
//       holidays[index].style.backgroundColor = 'rgb(238,238,238)';
//     } else {
//       holidays[index].style.backgroundColor = 'white';
//     }
//   }
// })


// function changeColor(elements, color) {
//   let selectedItems = document.querySelectorAll(elements);
//   // Percorrer essa lista de elementos e mudar a cor de cada um
//   for (let index = 0; index < selectedItems.length; index += 1) {
//     selectedItems[index].style.backgroundColor = color;
//   }
// }

// changeColor('.holiday', 'blue');
