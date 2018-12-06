//variables/queries
const btn = document.querySelector('.btn');
const todoUl = document.querySelector('.todo-ul');
const todoArr = [];

// User submits item to Todo Array
btn.addEventListener('click', e => {
  e.preventDefault();

  let item = document.forms.todoForm.todoItem;
  if (item.value.length > 0) {
    todoArr.push(item.value);
    console.log(todoArr);
    createList();
    item.value= '';
  };
});

// Create List from Array
function createList() {
  todoUl.innerHTML = ''; //clears out existing list
  for (let task of todoArr) {
    const todoLi = document.createElement('li');
    todoLi.textContent = task;
    todoUl.appendChild(todoLi);
  }
};
