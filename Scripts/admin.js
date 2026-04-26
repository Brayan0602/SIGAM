function agregarEstudiante() {
    mostrarMensaje("Estudiante agregado correctamente");
}

function eliminarEstudiante() {
    let confirmar = confirmarAccion("¿Seguro que deseas eliminar este estudiante?");
    
    if (confirmar) {
        mostrarMensaje("Estudiante eliminado");
    }
}

function verDashboard() {
    mostrarMensaje("Mostrando estadísticas del sistema");
}