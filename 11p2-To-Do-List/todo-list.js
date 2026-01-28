let toDoList = JSON.parse(localStorage.getItem('toDoListSave')) || [];

renderToDoList();

function renderToDoList() {

  let htmlList = '';

  for (let i = 0; i < toDoList.length; i++) {
    const toDoObject = toDoList[i];
    const {name, dueDate} = toDoObject;
    const html = `
      <div> ${name} </div>
      <div> ${dueDate} </div>
      <button onclick="
        toDoList.splice(${i}, 1);
        saveToStorage();
        renderToDoList();
      " class="delete-todo-button">Delete</button>
    `;
    htmlList += html;
  }
  document.querySelector('.list').innerHTML = htmlList;
}


function addToDo() {
  const inputElement = document.querySelector('.js-todo-list');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date');
  const dueDate = dateInputElement.value;

  toDoList.push({
    name,
    dueDate,
  });

  inputElement.value = '';

  renderToDoList();

  //Whenever we update the todo list, save in localStorage
  saveToStorage();
}

function saveToStorage () {
  localStorage.setItem('toDoListSave', JSON.stringify(toDoList));
}

