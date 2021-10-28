const checkItem = (i, e, todoList) => {
  todoList[i].completed = e.target.checked;
  return todoList[i];
};

export default checkItem;
