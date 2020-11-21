function abrirPanel(panelInicial) {
    const paneles = document.querySelectorAll(".panel");
    paneles.forEach(panel => panel.classList.remove("activa"));

    const opciones = document.querySelectorAll(".opcion");
    opciones.forEach(opcion => opcion.classList.remove("activo"));

    document.getElementById(panelInicial).classList.add("activa");
}
