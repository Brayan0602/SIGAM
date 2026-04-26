document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();

  const rol = document.getElementById('rol').value;

  if (rol === "estudiante") {
    window.location.href = "estudiante/dashboard.html";
  } else if (rol === "admin") {
    window.location.href = "admin/panel.html";
  } else {
    alert("Seleccione un rol válido para continuar.");
  }
});
