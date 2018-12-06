const btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
  e.preventDefault();

  let item = document.forms.todoForm.todoItem;
  console.log(item.value);
  item.value= '';
});
