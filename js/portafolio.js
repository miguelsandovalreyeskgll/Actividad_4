function alternarMenu() {
    document.getElementById("barraLateral").classList.toggle("mostrar");
}

function cerrarMenu() {
    if (window.innerWidth < 992) {
        document.getElementById("barraLateral").classList.remove("mostrar");
    }
}

function enviarFormulario() {
    let nombre = document.getElementById("nombreContacto").value;
    let resultado = document.getElementById("resultadoContacto");

    resultado.textContent = "Gracias, " + nombre + ". El formulario funciona como demostración.";
    resultado.className = "mt-3 text-success fw-bold";

    return false;
}
