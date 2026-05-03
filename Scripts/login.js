document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();

  const usuario = document.getElementById('usuario').value.trim();
  const clave = document.getElementById('clave').value.trim();
  const rol = document.getElementById('rol').value;
  const mensajeError = document.getElementById('mensajeError');

  // Ocultar mensaje al intentar de nuevo
  mensajeError.style.display = "none";

  // VALIDACIÓN CAMPOS VACÍOS
  if (usuario === "" || clave === "" || rol === "") {
    mensajeError.textContent = "Por favor complete todos los campos.";
    mensajeError.style.display = "block";
    return;
  }

  // USUARIOS SIMULADOS
  const usuarios = [
    { usuario: "admin", clave: "1234", rol: "admin" },
    { usuario: "estudiante", clave: "1234", rol: "estudiante" }
  ];

  // VALIDACIÓN
  const usuarioValido = usuarios.find(u => 
    u.usuario === usuario &&
    u.clave === clave &&
    u.rol === rol
  );

  if (usuarioValido) {

    // ✅ GUARDAR SESIÓN (AHORA SÍ CORRECTO)
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("rol", rol);

    // REDIRECCIÓN
    if (rol === "admin") {
      window.location.href = "admin/panel.html";
    } else if (rol === "estudiante") {
      window.location.href = "estudiante/dashboard.html";
    }

  } else {
    mensajeError.textContent = "Usuario, contraseña o rol incorrecto.";
    mensajeError.style.display = "block";
  }
});