/* 
for (let index = 0; index <= 10; index++) {
    let nombre = prompt("ingrese su nombre: ");

    if (index === 6 && nombre == "Erick") {
        alert("Sabes que no podes ser el numero 6")
        break;
    }

    alert("Turno numero " + index + " Nombre " + nombre);


}

 */


/* let usuario = prompt("Ingrese el Usuario");
let intento = 0;

while (usuario != "erick") 
{
    alert("Usuario Incorrecto");

    if (intento === 3) {
        break;
    }

    intento++;

    usuario = prompt("Ingrese el usuario");


}

if (intento === 3) {
    alert("no puedes acceder")

}

else {
    alert("Ingresaste!")
} */

/* let repetir = false;

while(repetir){
    console.log("hola");
}

do {
    console.log("holi");
} while(repetir); */

/* var numero = prompt("Imgrese un numero del 1 al 10 para saber su tabla de multiplos");

while ((numero < 10) && (numero != "") ) {
    for (let i = 0; i <= 15; i++) {
        alert(numero + " * " + i + " = " + (numero*i));

        if (i >= 10) {
        var numero = prompt("Imgrese un numero para saber su tabla de multiplos");
            if (numero == null) {
                break;
            }
        i = 0;
        }
    }
}
 */


/* Estructura de una funcion

*/

/* function mensaje(){
    console.log("Hola a todos")
}

mensaje(); */

function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case "+":
            return parseInt(num1) + parseInt(num2);
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        default:
            return String("No hay operador valido")
            break;
    }
}

alert(calculadora(prompt("Numero 1"), prompt("Numero 2"), prompt("el operador"))) */


/* const suma = (num1, num2) => {
    return num1 + num2;
};

let numero1 = parseInt(prompt("ingrese un numero"))
let numero2 = parseInt(prompt("Ingrese el segundo numero"))

alert(suma(numero1, numero2)); */