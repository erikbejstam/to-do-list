class Task {
    id: number;
    text: string;
    element: HTMLLIElement;
    private onDelete?: (id: number) => void;

    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
        this.element = this.createElement();
    }

    createElement() {
        const taskElement = document.createElement('li');
        taskElement.className = 'task-item';
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = this.text; // Using textContext. Could've used innerHTML or appendChild with a textNode.
        taskElement.appendChild(taskText);
        this.createDeleteButton(taskElement)

        return taskElement;
    }

    createDeleteButton(taskItem: HTMLLIElement) {
        const newDeleteButton = document.createElement('img')
        newDeleteButton.src = "icons/delete-1-svgrepo-com.svg";
        newDeleteButton.alt = "Delete Button";
        newDeleteButton.className = "delete-button"
    
        newDeleteButton.addEventListener('click', () => {
            this.onDelete?.(this.id);
        })
        newDeleteButton.addEventListener('mouseover', () => {
            newDeleteButton.style.opacity = '0.6';
        })
        newDeleteButton.addEventListener('mouseout', () => {
            newDeleteButton.style.opacity = '1';
        })
    
        taskItem.appendChild(newDeleteButton)
    }

    // Callback setters and getters

    public setOnDelete(callback: (id: number) => void): void {
        this.onDelete = callback;
    }

    public getElement(): HTMLLIElement {
        return this.element;
    }
}