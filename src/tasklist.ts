class TaskList {
    private tasks: Map<number, Task>;
    private element: HTMLUListElement;
    public renderCallback: () => void;

    constructor() {
        this.tasks = new Map<number, Task>();
        this.element = document.querySelector(".task-list") as HTMLUListElement;
        this.renderCallback = () => {};
        this.render();
    }

    render() {
        if (this.element) {
            this.element.innerHTML = '';
            this.tasks.forEach((task) => {
                const taskElement: HTMLElement = task.createElement();
                this.element.appendChild(taskElement);
            })
        }
    }

    addTask(text: string): void {
        const newTask = new Task(Date.now(), text)
        newTask.setOnDelete((id) => this.deleteTask(id));

        this.tasks.set(Date.now(), newTask);
        this.element.appendChild(newTask.element);
        this.renderCallback();
    }

    deleteTask(id: number): void {
        const task = this.tasks.get(id);
        if (task) {
            task.element.remove();
            this.tasks.delete(id);
        }

        this.renderCallback();
    }

    getTasks(): Map<number, Task> {
        return this.tasks;
    }

}
