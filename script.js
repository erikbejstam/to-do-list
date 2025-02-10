// DOM Elements
var taskForm = document.getElementById("task-form");
var taskInput = document.getElementById("task-input");
var taskList = document.querySelector(".task-list");
var addButton = document.querySelector(".add-button");
// Init
var initialTasks = [
    { text: "Buy groceries" },
    { text: "Pet doge" }
];
// Event listeners
if (taskForm && taskInput) {
    taskForm.addEventListener('submit', handleSubmit);
}
if (taskList) {
    document.addEventListener("DOMContentLoaded", loadDefaultTasks);
}
if (addButton) {
    addButton.addEventListener('mouseover', function () {
        addButton.style.opacity = '0.6';
    });
    addButton.addEventListener('mouseout', function () {
        addButton.style.opacity = '1';
    });
    addButton.addEventListener('click', function (event) {
        handleSubmit(event);
    });
}
// Function and handlers
function loadDefaultTasks(event) {
    for (var _i = 0, initialTasks_1 = initialTasks; _i < initialTasks_1.length; _i++) {
        var task = initialTasks_1[_i];
        addTask(task);
    }
}
function handleSubmit(event) {
    event.preventDefault();
    var taskValue = taskInput.value.trim();
    if (taskValue === "") {
        alert("Please enter a task.");
        return; // Do nothing if the input is empty
    }
    var newTask = { text: taskInput.value };
    addTask(newTask);
}
function addTask(task) {
    var taskItem = document.createElement('li');
    taskItem.classList.add("task-item");
    var taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = task.text; // Using textContext. Could've used innerHTML or appendChild with a textNode.
    taskItem.appendChild(taskText);
    taskInput.value = "";
    addDeleteButton(taskItem);
    taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(taskItem);
}
function addDeleteButton(taskItem) {
    var newDeleteButton = document.createElement('img');
    newDeleteButton.src = "./icons/delete-1-svgrepo-com.svg";
    newDeleteButton.alt = "Delete Button";
    newDeleteButton.className = "delete-button";
    newDeleteButton.addEventListener('click', function () {
        taskItem.remove();
    });
    newDeleteButton.addEventListener('mouseover', function () {
        newDeleteButton.style.opacity = '0.6';
    });
    newDeleteButton.addEventListener('mouseout', function () {
        newDeleteButton.style.opacity = '1';
    });
    taskItem.appendChild(newDeleteButton);
}
