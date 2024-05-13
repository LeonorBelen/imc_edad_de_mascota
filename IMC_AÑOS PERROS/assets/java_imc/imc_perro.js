function calcularEdadPerro(edadHumana) {
    // Calcula la edad del perro en "años perrunos" utilizando la fórmula de los 7 años
    let edadPerruna = edadHumana * 7;
    return edadPerruna;
}

function calcularEdad() {
    // Obtener el valor ingresado por el usuario
    let edadHumanaPerro = document.getElementById("edadHumana").value;

    // Convertir la entrada del usuario a un número entero
    edadHumanaPerro = parseInt(edadHumanaPerro);

    // Verificar si la entrada es un número válido
    if (isNaN(edadHumanaPerro) || edadHumanaPerro < 0) {
        alert("Por favor, ingrese un número válido de años.");
        return;
    }

    // Calcular la edad del perro en años humanos y perrunos
    let edadPerruna = calcularEdadPerro(edadHumanaPerro);

    // Mostrar los resultados al usuario
    document.getElementById("resultadoEdad").innerHTML = "La edad de tu perro en años humanos es: " + edadHumanaPerro + " años.";
    document.getElementById("resultadoPerruno").innerHTML = "La edad de tu perro en años perrunos es aproximadamente: " + edadPerruna + " años.";
}