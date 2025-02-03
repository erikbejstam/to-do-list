// Objects and types
type Task = {
    text: string;
}

// DOM Elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input") as HTMLInputElement;
const taskList = document.querySelector(".task-list");
const addButton = document.querySelector(".add-button") as HTMLImageElement;

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

if (addButton) {
    addButton.addEventListener('mouseover', () => {
        addButton.style.opacity = '0.6';
    })
    addButton.addEventListener('mouseout', () => {
        addButton.style.opacity = '1';
    })
    addButton.addEventListener('click', (event) => {
        handleSubmit(event);
    })
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
    const taskItem = document.createElement('li');
    taskItem.classList.add("task-item")
    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = task.text; // Using textContext. Could've used innerHTML or appendChild with a textNode.
    taskItem.appendChild(taskText);
    taskInput.value = "";

    addDeleteButton(taskItem)

    taskList?.appendChild(taskItem);
}

function addDeleteButton(taskItem: HTMLElement) {
    const newDeleteButton = document.createElement('img')
    newDeleteButton.src = "./icons/delete-1-svgrepo-com.svg";
    newDeleteButton.alt = "Delete Button";
    newDeleteButton.className = "delete-button"

    newDeleteButton.addEventListener('click', () => {
        taskItem.remove()
    })
    newDeleteButton.addEventListener('mouseover', () => {
        newDeleteButton.style.opacity = '0.6';
    })
    newDeleteButton.addEventListener('mouseout', () => {
        newDeleteButton.style.opacity = '1';
    })

    taskItem.appendChild(newDeleteButton)
}


