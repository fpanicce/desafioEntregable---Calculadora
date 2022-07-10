//Desafio entregable numero 2. Algoritmo Calculadora Simple

const calculadora = (numero1, numero2) =>{
    const accion = prompt("Indica con el numero que operacion queres hacer: \n1- Sumar \n2- Restar \n3- Multiplicar \n4- Dividir \n0- Salir ")
    if(accion == 1){
        const numero1 = Number(prompt("Ingresa el numero 1"))
        const numero2 = Number(prompt("Ingresa el numero 2"))
        console.log(`La suma de los dos numeros es ${sumar(numero1, numero2)}`)
        alert(`La suma de los dos numeros es ${sumar(numero1, numero2)}`)
    }else if(accion == 2){
        const numero1 = Number(prompt("Ingresa el numero 1"))
        const numero2 = Number(prompt("Ingresa el numero 2"))
        console.log(`La resta de los dos numeros es ${restar(numero1, numero2)}`)
        alert(`La resta de los dos numeros es ${restar(numero1, numero2)}`)
    }else if(accion == 3){
        const numero1 = Number(prompt("Ingresa el numero 1"))
        const numero2 = Number(prompt("Ingresa el numero 2"))
        console.log(`La multiplicacion de los dos numeros es ${multiplicar(numero1, numero2)}`)
        alert(`La multiplicacion de los dos numeros es ${multiplicar(numero1, numero2)}`)
    }else if(accion == 4){
        const numero1 = Number(prompt("Ingresa el numero 1"))
        const numero2 = Number(prompt("Ingresa el numero 2"))
        console.log(`La division de los dos numeros es ${dividir(numero1, numero2)}`)
        alert(`La division de los dos numeros es ${dividir(numero1, numero2)}`)
    }else if(accion == 0){
        alert("Que lastima, las matematicas son divertidas")
    }else if(accion == null){
        alert("Perdon, pero al cerrar el cuadro de texto no puedo realizar ninguna operacion")
    }else{
        alert("Perdon, pero no ingresaste ninguna instruccion correcta")
    }
}

const sumar = (numero1, numero2) => numero1 + numero2
const restar = (numero1, numero2) => numero1 - numero2
const multiplicar = (numero1, numero2) => numero1 * numero2
const dividir = (numero1, numero2) => numero1 / numero2

calculadora()