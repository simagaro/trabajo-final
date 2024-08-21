function calcular () {

    var nombre = document.getElementById("nombre").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var estatura = parseFloat(document.getElementById("estatura").value) / 100;

    var imc = (peso / (estatura * estatura)).toFixed(2);

    var rango;
    if (imc < 18.5) {
        rango = "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        rango = "Peso adecuado";
    } else if (imc >= 25 && imc < 29.9) {
        rango = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        rango = "Obesidad tipo 1";
    } else if (imc >= 35 && imc < 39.9) {
        rango = "Obesidad tipo 2";
    } else {
        rango = "Obesidad tipo 3";
    }

    alert(nombre + ", tu IMC es " + imc + ". Categoria: " + rango + ".");
}

