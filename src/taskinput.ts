class TaskInput {
    private formElement: HTMLFormElement;
    private inputElement: HTMLInputElement;
    private buttonElement: HTMLImageElement;
    public submitCallback: (text: string) => void;

    constructor(submitCallback: (text: string) => void) {
        this.formElement = document.getElementById("task-form") as HTMLFormElement;
        this.inputElement = document.getElementById("task-input") as HTMLInputElement;
        this.buttonElement = document.querySelector(".add-button") as HTMLImageElement;
        this.submitCallback = submitCallback;
        this.init();
    }

    init(): void {
        if (this.buttonElement) {
            this.buttonElement.addEventListener('mouseover', () => {
                this.buttonElement.style.opacity = '0.6';
            })
            this.buttonElement.addEventListener('mouseout', () => {
                this.buttonElement.style.opacity = '1';
            })
            this.buttonElement.addEventListener('click', (event) => {
                this.handleSubmit(event);
            })
        }
        
        if (this.formElement && this.inputElement) {
            this.formElement.addEventListener('submit', (event) => {
                this.handleSubmit(event);
            })
        }
    }

    handleSubmit = (event: Event): void => {
        event.preventDefault();
        const taskText = this.inputElement.value.trim();   

        if (!this.inputElement.checkValidity()) { 
            this.inputElement.reportValidity();
            return;
        }

        this.inputElement.value = "";

        this.submitCallback(taskText)
    }

}