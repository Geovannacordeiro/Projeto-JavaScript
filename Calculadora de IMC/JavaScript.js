function calculate() {
    let imc;

    let resultado = document.getElementById("resultado");

    let weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + " kg"


    let height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + " cm"

    imc = (weight / Math.pow( (height / 100 ), 2)).toFixed (1);

    resultado.textContent = imc;

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
        resultado.style.color = "#ffc44d"
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        categoria = "Peso normal"
        resultado.style.color = "#0be881"
    }
    else if (imc >= 25 && imc <= 29.9) {
        categoria = "Excesso de peso"        
        resultado.style.color = "#ff884d"
    }
    else {
        categoria = "Obeso"
        resultado.style.color = "#ff5e57"
    }
    document.getElementById("categoria").textContent = categoria
}