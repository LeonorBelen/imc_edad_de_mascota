function calcularEdadPerruna() {
    const edadHumana = parseInt(document.getElementById("edadHumana").value);
    let edadPerruna = 0;

    // Primeros dos años del perro
    if (edadHumana <= 2) {
        edadPerruna = edadHumana * 10.5;
    } else {
        // Después de los primeros dos años, cada año humano equivale a 4 años perrunos
        edadPerruna = 21 + (edadHumana - 2) * 4;
    }

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").innerText = `La edad de tu perro en años perrunos es: ${edadPerruna}`;
}