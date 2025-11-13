document.addEventListener ('DOMContentLoaded', () => {
  const mainContainer = document.querySelector ('.mainContainer');

  const heading = document.createElement ('h1');
  heading.textContent = 'Welcome To To-Do List!';

  const addTaskHolder = document.createElement ('div');
  addTaskHolder.classList.add ('addTaskHolder');

  const inputBox = document.createElement ('input');
  inputBox.classList.add ('input');
  inputBox.type = 'text';
  inputBox.placeholder = 'Enter Task Name';

  const addButton = document.createElement ('button');
  addButton.classList.add ('addBtn');
  addButton.innerHTML = 'Add Task';
  addButton.type = 'submit';

  const contentHolder = document.createElement ('div');
  contentHolder.classList.add ('contentHolder');

  const displayTask = document.createElement ('div');
  displayTask.classList.add ('displayTaks');

  const loadTasks = () => {
    displayTask.innerHTML = '';
    const tasks = JSON.parse (localStorage.getItem ('taskDetails')) || {};

    Object.entries (tasks).forEach (([id, name]) => {
      const taskBox = document.createElement ('div');
      taskBox.classList.add ('taskBox');

      const taskInfo = document.createElement ('div');
      taskInfo.classList.add ('taskInfo');
      taskInfo.innerHTML = `<span>ID: ${id}</span><span>Task: ${name}</span>`;

      const taskBtns = document.createElement ('div');
      taskBtns.classList.add ('taskBtns');

      // Update button
      const updateBtn = document.createElement ('button');
      updateBtn.classList.add ('updateBtn');
      updateBtn.textContent = 'Update';
      updateBtn.addEventListener ('click', () => {
        const newName = prompt ('Enter new task name:', name);
        if (newName && newName.trim () !== '') {
          tasks[id] = newName.trim ();
          localStorage.setItem ('taskDetails', JSON.stringify (tasks));
          loadTasks ();
        }
      });

      // Delete button
      const deleteBtn = document.createElement ('button');
      deleteBtn.classList.add ('deleteBtn');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener ('click', () => {
        delete tasks[id];
        localStorage.setItem ('taskDetails', JSON.stringify (tasks));
        loadTasks ();
      });

      taskBtns.append (updateBtn, deleteBtn);
      taskBox.append (taskInfo, taskBtns);
      displayTask.appendChild (taskBox);
    });
  };

  addButton.addEventListener ('click', () => {
    const taskName = inputBox.value.trim ();
    if (!taskName) {
      alert ('Task Name is Required!');
      return;
    }

    const taskID = Math.floor (Math.random () * 99999);
    const tasks = JSON.parse (localStorage.getItem ('taskDetails')) || {};
    tasks[taskID] = taskName;

    localStorage.setItem ('taskDetails', JSON.stringify (tasks));

    inputBox.value = '';
    loadTasks ();
  });

  addTaskHolder.append (inputBox, addButton);
  contentHolder.appendChild (displayTask);
  mainContainer.append (heading, addTaskHolder, contentHolder);

  loadTasks ();
});
  