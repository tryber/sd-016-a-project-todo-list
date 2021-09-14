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
  
  li.innerHTML=document.querySelector("#texto-tarefa").value;
  listatarefas =document.querySelector("#lista-tarefas")
  //selista.appendChild(li)=listatarefas
  document.querySelector("#texto-tarefa").value=""
  //textoTarefa = ""
})



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

// const fridayDays = [6, 13, 20, 27];
// const btnFriday = document.getElementById('btn-friday');
// btnFriday.addEventListener('click', function () {
//   const fridays = document.getElementsByClassName('friday-day');
//   for (let index = 0; index < fridays.length; index += 1) {
//     if (fridays[index].innerHTML !== "SEXTOU!") {
//       fridays[index].innerHTML = "SEXTOU!";
//     } else {
//       fridays[index].innerHTML = fridayDays[index];
//     }
//   }
// })

// const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
// const weekDaysList = document.querySelector('.week-days');

// for (let index = 0; index < weekDays.length; index += 1) {
//   let days = weekDays[index];

//   let dayListItem = document.createElement('li');
//   dayListItem.innerHTML = days;

//   weekDaysList.appendChild(dayListItem);
// }

// const daysList = [];
// for (index = 1; index < 31; index += 1) {
//   daysList.push(index);
// }

// const getDaysList = document.querySelector('#days');

// for (let index = 0; index < daysList.length; index += 1) {
//   const day = daysList[index];
//   const dayItem = document.createElement('li');
//   if (day === 2 | day === 15) {
//     dayItem.className = 'holiday';
//     dayItem.innerHTML = day;
//     getDaysList.appendChild(dayItem);
//   } else if (day === 6 | day === 13 | day === 27) {
//     dayItem.className = 'friday-day';
//     dayItem.innerHTML = day;
//     getDaysList.appendChild(dayItem);
//   } else if (day === 20) {
//     dayItem.className = 'holiday friday-day';
//     dayItem.innerHTML = day;
//     getDaysList.appendChild(dayItem);
//   } else {
//     dayItem.innerHTML = day;
//     getDaysList.appendChild(dayItem);
//   }
// }

// function changeColor(elements, color) {
//   let selectedItems = document.querySelectorAll(elements);
//   // Percorrer essa lista de elementos e mudar a cor de cada um
//   for (let index = 0; index < selectedItems.length; index += 1) {
//     selectedItems[index].style.backgroundColor = color;
//   }
// }

// changeColor('.holiday', 'blue');
