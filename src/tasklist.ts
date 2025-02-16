class TaskList {
    private tasks: Map<number, Task>;
    private element: HTMLUListElement;
    public renderCallback: () => void;
    private observer: MutationObserver;

    constructor() {
        this.tasks = new Map<number, Task>();
        this.element = document.querySelector(".task-list") as HTMLUListElement;
        this.renderCallback = () => {};
        this.render();
        this.observer = this.initObserver();
        this.element.addEventListener('scroll', () => this.updateMask());
    }

    initObserver(): MutationObserver {
        const observer = new MutationObserver(() => this.handleMutation())
        observer.observe(this.element, { childList: true, subtree: true });
        return observer
    }

    handleMutation(): void {
        if (this.element.scrollHeight > this.element.clientHeight) {
            this.updateMask();
        }
    }

    updateMask(): void {
        const scrollTop = this.element.scrollTop;
        const clientHeight = this.element.clientHeight;
        const scrollHeight = this.element.scrollHeight;
        const atTop = scrollTop === 0;
        const atBottom = scrollTop + clientHeight >= scrollHeight;

        if (atTop) {
            this.element.style.maskImage = "linear-gradient(to bottom, black 90%, transparent)";
        } else if (atBottom) {
            this.element.style.maskImage = "linear-gradient(to top, black 90%, transparent)";
        } else {
            this.element.style.maskImage = "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)";
        }
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
        const newTaskID = Date.now()
        const newTask = new Task(newTaskID, text)
        newTask.setOnDelete((id) => this.deleteTask(id));

        this.tasks.set(newTaskID, newTask);
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
