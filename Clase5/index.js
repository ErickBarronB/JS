/* let peso = prompt("Ingrese su peso");
let altura = prompt("Ingrese su Altura"); */
/* 
let peso = 70
let altura = 1.68
let sexo = "mujer"
let edad = 20
let actividadBaja = 0.27


const calcularIMC = (peso, altura) => {
    return peso / Math.pow(altura, 2);
}



const calcularCaloriasBMR = (peso, edad, altura, sexo) => {
    if (sexo == "hombre") {
        return 66.5 + (13.75*parseInt(peso) + (5.003*(altura*100)) - (6.75*edad))
    }
    else if (sexo == "mujer") {
        return 655.1 + (9.563*parseInt(peso) + (1.850*(altura*100)) - (4.676*edad))
    }
}

let resultadoBMR = (calcularCaloriasBMR(peso, edad, altura, sexo));


const calcularTDEE = (resultadoBMR, actividadBaja) => {
    return resultadoBMR + (resultadoBMR*actividadBaja);
}

console.log(calcularIMC(peso, altura));
console.log(resultadoBMR)
console.log(calcularTDEE(resultadoBMR, actividadBaja));
 */

function Perrito(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ladrar = function(){console.log("estoy ladrando")}

}

const perrito1 = new Perrito("firu", 2);
perrito1.ladrar();