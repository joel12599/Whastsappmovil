let contacto = [];
let selectContact = null;
let inputcontacto = document.getElementById('name-nombre');
const seleccionarimg = document.getElementById('selected-img');
const seleccionarnom = document.getElementById('selected-contact-name');
const seleccionartel = document.getElementById('selected-contact-number');
const inputmensaje = document.getElementById('message-input');
const enviar = document.getElementById('send-button');
const mensajes = document.getElementById('chat-messages');
const lis = document.getElementById("contact-list");

document.getElementById('Agregar').addEventListener('click', () => {
    const valorinput = inputcontacto.value.trim();
    if (valorinput) {
        const [imagen, nombre, telefono] = valorinput.split('*');
        if (imagen && nombre && telefono) {
            contacto.push({ imagen, nombre, telefono });
            inputcontacto.value = '';
            rendercontacto();
        }
    }
});

function rendercontacto() {
    lis.innerHTML = "";
    contacto.forEach((contta, index) => {
        const contac = document.createElement('div');
        contac.innerHTML = `
        <div class="contacto" onclick="selectdContact(${index})">
            <div id="img">
                <img src="${contta.imagen}" alt="👤">
            </div>
            <div id="info">
                <h3>${contta.nombre}</h3> 
                <p>+57 ${contta.telefono}</p>
            </div>
        </div>
        `;
        contac.onclick = () => {selectdContact(index)
            document.querySelector('.header').style.display = 'none';
        };
        lis.appendChild(contac);
    });
}

function selectdContact(index) {
    selectContact = contacto[index];
    seleccionarimg.src = selectContact.imagen;
    seleccionarnom.textContent = selectContact.nombre;
    seleccionartel.textContent = selectContact.telefono;
}

enviar.addEventListener('click', () => {
    const mensaje = inputmensaje.value.trim();
    if (mensaje && selectContact) {
        const mensajeelement = document.createElement('div');
        mensajeelement.classList.add('mensaje', 'enviado');
        mensajeelement.innerHTML = "<div class='mensaje-enviado'>" + mensaje + "</div>";
        mensajes.appendChild(mensajeelement);
        inputmensaje.value = '';
    }
});
