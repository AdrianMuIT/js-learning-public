const toDoList1 = [];
let toDoList2 = [];

function addTodo1(selector) {
  const inputElement = document.querySelector(`${selector}`);
  let name = inputElement.value;
  
  toDoList1.push(name);
  console.log(toDoList1);

  inputElement.value = '';
}

function addTodo2(selector) {
  const inputElement = document.querySelector(`${selector}`);
  let name = inputElement.value;
  
  toDoList2.push(name);
  
  let htmlCode = '';

  for (let i = 0; i < toDoList2.length; i++) {
    htmlCode += `<li> ${toDoList2[i]} </li>`;  
  }

  document.querySelector('.js-list').innerHTML = htmlCode;

  inputElement.value = '';
}




