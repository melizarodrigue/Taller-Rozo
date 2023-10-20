function verificarMayorEdad() {
    const fechaNacimientoInput = document.getElementById("fechaNacimiento");
    const resultado = document.getElementById("resultado");
    const fechaNacimiento = new Date(fechaNacimientoInput.value);
    const hoy = new Date();

    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    // Verificar si la persona es mayor de 18 años en Colombia
    if (edad >= 18) {
        resultado.textContent = "Es mayor de edad en Colombia.";
    } else {
        resultado.textContent = "No es mayor de edad en Colombia.";
    }
}