document.addEventListener("DOMContentLoaded", () => {
    const taskList = new TaskList();
    taskList.renderCallback = () => taskList.render();

    const taskInput = new TaskInput((text) => taskList.addTask(text));

    taskList.addTask('Pet doge');

    taskList.render();
});






