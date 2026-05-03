document.addEventListener("DOMContentLoaded", function () {

  const rol = localStorage.getItem("rol");

  // VALIDAR ACCESO
  if (rol !== "estudiante") {
    alert("Acceso no autorizado");
    window.location.href = "../index.html";
    return;
  }

  // BIENVENIDA DINÁMICA
  const usuario = localStorage.getItem("usuario");
  document.getElementById("bienvenidaUsuario").textContent = "Bienvenido, " + usuario;

});

// CERRAR SESIÓN
function cerrarSesion() {
  localStorage.clear();
  window.location.href = "../index.html";
}