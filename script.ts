let newDiv: HTMLDivElement = document.createElement("div"); //Skapa ett element som vi kallar newDiv. document kommer att länka med docet som detta script åkallas ifrån.

newDiv.innerHTML = "This is a dynamically created div!" //Sätt själva texten i div:en.

newDiv.classList.add("newDiv")

document.body.appendChild(newDiv)

