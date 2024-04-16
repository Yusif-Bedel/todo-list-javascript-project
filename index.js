// const searchButton=document.querySelector(".add")
// const search=document.querySelector(".search")
// const todos=document.querySelector(".todos")

// function addingTasks() {
//     let li=document.createElement('li')
//     let =document.createElement('li')
// }

document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('.search');
    const addButton = document.querySelector('.add');
    const todosList = document.querySelector('.todos');

    addButton.addEventListener('click', function() {
        const todoText = inputField.value.trim();
        if (todoText !== '') {
            const newTodo = createTodoItem(todoText);
            todosList.appendChild(newTodo);
            inputField.value = ''; 
        }
    });

    function createTodoItem(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="complete">
                <i class="fa-solid fa-check"></i>
            </div>
            <p>${text}</p>
            <button>
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;

        const completeButton = li.querySelector('.complete');
        const deleteButton = li.querySelector('button');

        completeButton.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        return li;
    }
});
