// Código del cuadrado
console.group('Cuadrados')

const perimetroCuadrado =(lado) => lado * 4

const areaCuadrado = (lado) => lado * lado

console.groupEnd();

// Código del triángulo
console.group('Triangulos')

const perimetrotriangulo =(lado1, lado2, base) => lado1 + lado2 + base

const areaTriangulo =(base, altura) => (base * altura) / 2

console.groupEnd()

// Código del circulo
console.group('Circulos')

const PI = Math.PI

const diametroCirculo =(radio) => radio * 2

const perimetroCirculo =(radio) => diametroCirculo(radio) * PI

const areaCirculo =(radio) => (radio * radio) * PI

console.groupEnd()

//Interacción con HTML

//Cuadrado

let calcularPerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado")
    const value = Number(input.value)
    const perimetro = perimetroCuadrado(value)

    alert(perimetro)

}

let calcularAreaCuadrado = () => {
    const input = document.getElementById("InputCuadrado")
    const value = Number(input.value)
    const area = areaCuadrado(value)

    alert(area)
}

//Triangulo

let calcularPerimetroTriangulo = () => {
    const input1 = document.getElementById("InputTrianguloLado1")
    const input2 = document.getElementById("InputTrianguloLado2")
    const input3 = document.getElementById("InputTrianguloBase")

    const lado1 = Number(input1.value)
    const lado2 = Number(input2.value)
    const base  = Number(input3.value)

    const perimetro = perimetrotriangulo(lado1, lado2, base)

    alert(perimetro)
}

let calcularAreaTriangulo = () => {
    const input1 = document.getElementById("InputTrianguloAltura")    
    const input2 = document.getElementById("InputTrianguloBase")

    const altura = Number(input1.value)
    const base =   Number(input2.value)
    
    const area = areaTriangulo(base, altura)

    alert(area)
}

//Circulo

let calcularPerimetroCirculo = () => {
    const input = document.getElementById("InputCirculo")      
    const radio = Number(input.value)
    const perimetro = perimetroCirculo(radio)

    alert(perimetro)
}

let calcularAreaCirculo = () => {
    const input = document.getElementById("InputCirculo")      
    const radio = Number(input.value)
    const area = areaCirculo(radio)

    alert(area)
}
