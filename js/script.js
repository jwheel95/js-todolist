const btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
  e.preventDefault();

  const item = document.forms.todoForm.todoItem;
  console.log(item.value);
});
