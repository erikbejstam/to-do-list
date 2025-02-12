class Task {
    id: number;
    text: string;

    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
    }

    createTask() {
        const taskElement = document.createElement('li');
        taskElement.classList.add("task-item")
        const taskText = document.createElement('span');
        taskText.classList.add('task-text');
        taskText.textContent = this.text; // Using textContext. Could've used innerHTML or appendChild with a textNode.
        taskElement.appendChild(taskText);
        this.createDeleteButton(taskElement)

        return taskElement;
    }

    createDeleteButton(taskItem: HTMLElement) {
        const newDeleteButton = document.createElement('img')
        newDeleteButton.src = "icons/delete-1-svgrepo-com.svg";
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
}