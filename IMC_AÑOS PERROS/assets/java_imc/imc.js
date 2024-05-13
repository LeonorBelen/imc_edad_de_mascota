function calculaIMC() {
    const sexo = document.getElementById("sexo").value;
    const edad = parseInt(document.getElementById("edad").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = peso / (altura * altura);

    document.getElementById("resultado").innerHTML = `Tu IMC es: ${imc.toFixed(2)}`;
}