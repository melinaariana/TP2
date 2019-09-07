let btnAdd = document.getElementById('btn-add');

btnAdd.addEventListener('click', function() {
    let showInputs = document.getElementById('containerInput');

    showInputs.classList.toggle('show');
});

let addTask = document.getElementById('btn-send-task');

addTask.addEventListener('click', function() {
    let title = document.getElementById('title-task').value;
    let description = document.getElementById('description-task').value;

    let li = addCard(title, description);
    let lista = document.getElementById('task-incomplete');
    apendizamosATuHijo(lista, li);
});

// SVG
let completeSVG =
    '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/> < svg>';

let trashSVG =
    '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http:/ www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"/> </svg>';

// Función que crea la card
function addCard(title, description) {
    // li padre
    let li = document.createElement('li');
    li.classList.add('task-card', 'incomplete');

    // div contenedor del titulo y descripcion
    let divTitleDescription = crearEtiqueta('div', 'container-title-description');

    // div contenedor de los botones
    let divButtons = crearEtiqueta('div', 'container-buttons');

    // titulo
    let titleTask = crearEtiqueta('h3', 'task-title');
    titleTask.innerText = title;

    // descripción
    let descriptionTask = crearEtiqueta('p', 'task-description');
    descriptionTask.innerText = description;

    // botón de tarea completa
    let btnComplete = crearEtiqueta('button', 'btn-task');
    btnComplete.innerHTML = completeSVG;

    // botón de trash
    let btnTrash = crearEtiqueta('button', 'btn-task');
    btnTrash.innerHTML = trashSVG;

    // Apendizar los elementos acá
    apendizamosATuHijo(divTitleDescription, titleTask);
    apendizamosATuHijo(divTitleDescription, descriptionTask);
    apendizamosATuHijo(divButtons, btnComplete);
    apendizamosATuHijo(divButtons, btnTrash);
    apendizamosATuHijo(li, divTitleDescription);
    apendizamosATuHijo(li, divButtons);

    btnComplete.addEventListener('click', elementoCompleto);
    btnTrash.addEventListener('click', elementoEliminado);

    return li;
}

function crearEtiqueta(etiqueta, clase) {
    let elemento = document.createElement(etiqueta);
    elemento.classList.add(clase);
    return elemento;
}

function apendizamosATuHijo(padre, hijo) {
    return padre.appendChild(hijo);
}

function elementoCompleto() {
    let li = this.parentNode.parentNode;
    li.classList.toggle('complete');

    var clase = li.className;
    if (clase === 'task-card incomplete complete') {
        let padre = document.querySelector('ul.ulcomplete');
        padre.appendChild(li);
    } else if (clase === 'task-card incomplete') {
        let padre = document.querySelector('ul.tasks-list');
        padre.appendChild(li);
    }
    console.log(clase);
}

function elementoEliminado() {
    let li = this.parentNode.parentNode;
    li.parentNode.removeChild(li);
}
