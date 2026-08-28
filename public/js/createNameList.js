import alterNameList from "./alterNameList.js";

export default function createNameList(name) {

    const liElement = document.createElement("li");
    liElement.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
    );

    const nameElement = document.createElement("span");
    nameElement.innerText = name;

    liElement.append(nameElement);

    const buttonDeleteElement = document.createElement("button");
    buttonDeleteElement.classList.add("btn", "btn-danger", "btn-sm");
    buttonDeleteElement.innerText = "Excluir";

    buttonDeleteElement.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        event.currentTarget.parentElement.remove();
    });

    liElement.append(buttonDeleteElement);

    liElement.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            return;
        }

        alterNameList(liElement);
    });

    return liElement;
}