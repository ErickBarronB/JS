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

/* function Perrito(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ladrar = function(){console.log("estoy ladrando")}

}

const perrito1 = new Perrito("firu", 2);
perrito1.ladrar(); */

/* class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [];
productos.push(new Producto("Arroz", 1000));
productos.push(new Producto("Pan", 10002));
productos.push(new Producto("papa", 20002));

for (const producto of productos){
    console.log(producto);
}
 */



const Registros = [];



for (let index = 0; index < 3; index++) {


let nombre = prompt(" Nombre");
let peso = prompt("Peso");
let altura = prompt("Altura en mts (ej: 1.76")
let sexo = prompt("hombre o mujer")
let edad = prompt("edad")
let actividadBaja = 27




const calcularIMC = (peso, altura) => {
    return peso / Math.pow(altura, 2)
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

let resultadoTDEE = (calcularTDEE(resultadoBMR, actividadBaja))
let resultadoIMC = (calcularIMC(peso, altura));

console.log(resultadoIMC);
console.log(resultadoBMR)
console.log(resultadoTDEE);






class regConst{
    constructor(nombre, peso, altura, sexo, edad, actividadBaja, resultadoIMC, resultadoBMR, resultadoTDEE, IMCnivel){
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.sexo = sexo;
        this.edad = edad;
        this.actividadBaja = actividadBaja;
        this.calcularIMC = resultadoIMC;
        this. resultadoBMR = resultadoBMR;
        this.resultadoTDEE = resultadoTDEE;
        this.IMCnivel = IMCnivel;

    }
}



Registros.push(new regConst(nombre, peso, altura, sexo, edad, actividadBaja, resultadoIMC, resultadoTDEE, resultadoBMR, IMCnivel))
console.log(Registros);
}

console.log(Registros);





