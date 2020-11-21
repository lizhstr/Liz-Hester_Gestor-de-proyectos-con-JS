class Contacto{
    constructor(nombre, telefono, correo){
        this.nombre = nombre,
        this.telefono = telefono,
        this.correo = correo
    }
}

class Agenda{
    agregarContacto(contacto){
        const listaContactos = document.getElementById("listaContactos");
        const element = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML += `
        <p><strong>Nombre: </strong>${contacto.nombre}</p>
        <p><strong>Telefono: </strong>${contacto.telefono}</p>
        <p><strong>Email: </strong>${contacto.correo}</p>
        <button id="eliminar">Elimnar</button>
        `;
        
        listaContactos.appendChild(element);
    }
}



const btnGuardar = document.getElementById("guardar").addEventListener("click",function(e){
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;

    const contacto = new Contacto(nombre, telefono, email);

    const agenda = new Agenda;

    agenda.agregarContacto();

    console.log(contacto);

    e.preventDefault();
})
