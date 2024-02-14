let todoList = [];

function renderTodoList() {
    const todoListElement = document.getElementById("todoList");
    todoListElement.innerHTML = "";

    todoList.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <input type="checkbox" onchange="toggleDone(${index})" ${item.done ? 'checked' : ''}>
            <span>${item.text}</span>
            <button onclick="deleteItem(${index})">Delete</button>
        `;
        todoListElement.appendChild(listItem);
    });
}

function addItem() {
    const newItemText = document.getElementById("newItem").value.trim();
    if (newItemText !== "") {
        const newItem = { text: newItemText, done: false };
        todoList.push(newItem);
        renderTodoList();
        document.getElementById("newItem").value = "";
    }
}

function toggleDone(index) {
    todoList[index].done = !todoList[index].done;
    renderTodoList();
}

function deleteItem(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

window.onload = renderTodoList;
