import './style.css';

window.onload = () => {
  const tasks = [
    {
      description: 'Finish my first project',
      completed: false,
      index: 0,
    },
    {
      description: 'Finish my second project',
      completed: false,
      index: 1,
    },
    {
      description: 'Finish my third project',
      completed: false,
      index: 2,
    }
  ];

  const todoList = document.querySelector('.todoList');

  const displayToDo = () => {
    tasks.forEach((task) => {
      todoList.innerHTML 
      += `<label class="checkbox" for="myCheckboxId">
          <input class="checkbox__input" type="checkbox" name="myCheckboxName" id="myCheckboxId" placeholder=".">
          <div class="checkbox__box"></div>
          <li>
            ${task.description}<span><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
          </li>
        </label>
        <hr>`;
    });
  };

  displayToDo();
}