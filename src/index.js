
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('new-task-description');
    const prioritySelect = document.getElementById('task-priority');
    const taskDescription = taskInput.value;
    const priority = prioritySelect.value;

    const listItem = document.createElement('li');
    listItem.textContent = taskDescription;
    listItem.className = priority; 
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editTask(listItem, taskDescription);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
      taskList.removeChild(listItem);
    };
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    switch (priority) {
      case 'high':
        listItem.style.color = 'black';
        break;
      case 'medium':
        listItem.style.color = 'blue';
        break;
      case 'low':
        listItem.style.color = 'pink';
        break;
    }

    taskList.appendChild(listItem);
    taskInput.value = '';
  });

  function editTask(listItem, originalDescription) {
    const newDescription = prompt('Edit your task:', originalDescription);
    if (newDescription !== null) {
      listItem.firstChild.textContent = newDescription;
    }
  }
});
