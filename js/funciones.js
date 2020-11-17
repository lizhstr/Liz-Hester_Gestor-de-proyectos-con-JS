function abrirPanel(panelInicial) {

    const paneles = document.getElementsByClassName(panel);
    paneles.forEach(panel => panel.classList.remove("activa"));
    
    const opciones = document.getElementsByClassName(opcion);
    opciones.forEach(opcion => opcion.classList.remove("activo"));

    document.getElementById(panelInicial).classList.add("activa");
}
