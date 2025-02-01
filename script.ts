// Objects and types
type Task = {
    text: string;
}

// DOM Elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input") as HTMLInputElement;
const taskList = document.querySelector(".task-list");

// Init
const initialTasks: Task[] = [
    {text: "Buy groceries"},
    {text: "Pet doge"}
];

// Event listeners
if (taskForm && taskInput) {
    taskForm.addEventListener('submit', handleSubmit);
}

if (taskList) {
    document.addEventListener("DOMContentLoaded", loadDefaultTasks);
}

// Function and handlers
function loadDefaultTasks(event: Event){
    for (const task of initialTasks) {
        addTask(task);
    }
}

function handleSubmit(event: Event) {
    event.preventDefault();

    const newTask: Task = {
        text: taskInput.value
    }
    addTask(newTask)
}

function addTask(task: Task) {
    const taskItem = document.createElement('li')
    taskItem.textContent = task.text; // Using textContext. Could've used innerHTML or appendChild with a textNode.
    taskInput.value = "";

    addDeleteButton(taskItem)

    taskList?.appendChild(taskItem);
}

function addDeleteButton(taskItem: HTMLElement) {
    const newDeleteButton = document.createElement('button')
    newDeleteButton.textContent = "Delete";
    newDeleteButton.type = "button";
    newDeleteButton.className = "delete-button"
    newDeleteButton.addEventListener('click', () => {
        taskItem.remove()
    })
    taskItem.appendChild(newDeleteButton)
}


