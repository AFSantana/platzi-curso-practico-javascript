// Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado()
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areacuadrado + "cm²");
console.groupEnd();

// Código del triángulo
console.group("Triángulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//console.log(
//   "Los lados del triángulo miden: " 
//   + ladoTriangulo1 + "cm," 
//   + ladoTriangulo2 + "cm," 
//   + baseTriangulo + "cm,"
//   );
//console.log("La altura del triángulo es de : " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log("El perímetro del triángulo es : " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El área del triángulo es: " + areaTriangulo + "cm²");

console.groupEnd();

// Código del Círculo
console.group("Círculo");

// Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es : " + radioCirculo + "cm");

// Diámetro
//const diametroCirculo = radioCirculo * 2;
//console.log("El diámetro del circulo es : " + diametroCirculo + "cm");

// PI
const pi = Math.PI;
//console.log("PI es : " + pi);

// Circunferencia
function perimetroCirculo(radio){
    return (radio * 2) * pi;
}
//console.log("El perímetro del circulo es : " + perimetroCirculo + "cm");

//Área
function areaCirculo(radio){
    return (radio * radio) * pi;
}
//console.log("El área del circulo es : " + areaCirculo + "cm²");

console.groupEnd();



// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = parseInt(input2.value);
    const inputB = document.getElementById("inputTrianguloB");
    const valueB = parseInt(inputB.value);

    const perimetro = perimetroTriangulo(value1, value2, valueB);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputB = document.getElementById("inputTrianguloB");
    const valueB = inputB.value;
    const inputH = document.getElementById("inputTrianguloH");
    const valueH = inputH.value;

    const area = areaTriangulo(valueB, valueH);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

// Pendientes algunos cambios