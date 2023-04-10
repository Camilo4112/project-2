let contactos = [];

// Función para generar un nuevo ID para cada contacto
function generarId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Función para agregar un nuevo contacto a la lista
function agregarContacto(nombres, apellidos, telefono, ubicaciones, ciudad, direccion) {
  let contacto = {
    id: generarId(),
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    ubicaciones: ubicaciones,
    ciudad: ciudad,
    direccion: direccion
  };
  contactos.push(contacto);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(id) {
  contactos = contactos.filter(contacto => contacto.id !== id);
}

// Función para imprimir en la tabla los contactos presentes en la lista
function imprimirContactos() {
  let tableBody = document.querySelector('#contactos-table tbody');
  tableBody.innerHTML = '';
  for (let contacto of contactos) {
    let row = document.createElement('tr');
    let idCell = document.createElement('td');
    let nombresCell = document.createElement('td');
    let apellidosCell = document.createElement('td');
    let telefonoCell = document.createElement('td');
    let ubicacionesCell = document.createElement('td');
    let ciudadCell = document.createElement('td');
    let direccionCell = document.createElement('td');
    let deleteCell = document.createElement('td');
    let deleteButton = document.createElement('button');
    idCell.textContent = contacto.id;
    nombresCell.textContent = contacto.nombres;
    apellidosCell.textContent = contacto.apellidos;
    telefonoCell.textContent = contacto.telefono;
    ubicacionesCell.textContent = contacto.ubicaciones;
    ciudadCell.textContent = contacto.ciudad;
    direccionCell.textContent = contacto.direccion;
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('delete-button');
    deleteButton.dataset.id = contacto.id;
    deleteButton.addEventListener('click', e => {
      borrarContacto(e.target.dataset.id);
      imprimirContactos();
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(idCell);
    row.appendChild(nombresCell);
    row.appendChild(apellidosCell);
    row.appendChild(telefonoCell);
    row.appendChild(ubicacionesCell);
    row.appendChild(ciudadCell);
    row.appendChild(direccionCell);
    row.appendChild(deleteCell);
    tableBody.appendChild(row);
  }
}

// Función para manejar el evento de envío del formulario de agregar contacto
function agregarFormSubmit(e) {
  e.preventDefault();
  let nombresInput = document.querySelector('#nombres-input');
  let apellidosInput = document.querySelector('#apellidos-input');
  let telefonoInput = document.querySelector('#telefono-input');
  let ubicacionesInput = document.querySelector('#ubicaciones-input');
  let ciudadInput = document.querySelector('#ciudad-input');
  let direccionInput = document.querySelector('#direccion-input');
  agregarContacto(
    nombresInput.value.trim(),
    apellidosInput.value.trim(),
    telefonoInput.value.trim(),
    ubicacionesInput.value.trim(),
    ciudadInput.value.trim(),
    direccionInput.value.trim()
  );
  nombresInput.value = '';
  apellidosInput.value = '';
  telefonoInput.value = '';
  ubicacionesInput.value = '';
  ciudadInput.value = '';
  direccionInput.value = '';
  imprimirContactos();
}

// Asignación de eventos
document.querySelector('#agregar-form').addEventListener('submit', agregarFormSubmit);

// Impresión inicial de los contactos
imprimirContactos();
