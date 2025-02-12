class TaskList {
    private tasks: Task[] = []

    addTask(text: string): void {
        const newTask = new Task(Date.now(), text)
        this.tasks.push(newTask)
    }

    render() {
        const taskListElement = document.querySelector(".task-list")
        if (taskListElement) {
            this.tasks.forEach((task) => {
                const taskElement: HTMLElement = task.createTask()
                taskListElement.appendChild(taskElement);
            })
        }
    }

    getTasks(): Task[] {
        return this.tasks
    }

}
