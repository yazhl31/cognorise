
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', span.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                span.textContent = newTaskText.trim();
            }
        });

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
