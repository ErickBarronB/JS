let num1 = parseInt(prompt("ingresa un numero"));
let num2 = parseInt(prompt("ingresa otro numero"));
let numVerdad = true;
let numFalso = false;

let resultado = parseInt(num1) + parseInt(num2);

alert(resultado);


if (resultado > 10) {
    alert(" el resultado es mayor a 10")
}
else {
    alert("El resultado no es mayor a 10")
};

let edad = prompt("Ingrese su edad")

if (edad > 18) {
    alert("puede acceder")
}
else  {
    alert("no puede acceder, la edad minima es 18")
    let edad = prompt("Ingrese su edad")
}

