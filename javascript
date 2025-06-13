function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  span.onclick = () => {
    li.classList.toggle('completed');
  };

  const actions = document.createElement('div');
  actions.className = 'actions';

  const editBtn = document.createElement('button');
  editBtn.innerHTML = '✏️';
  editBtn.onclick = () => {
    const newTask = prompt('Edit your task:', span.textContent);
    if (newTask !== null && newTask.trim() !== '') {
      span.textContent = newTask.trim();
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
